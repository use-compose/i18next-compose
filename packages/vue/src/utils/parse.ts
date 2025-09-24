export {
  componentsPresent,
  hasManyChildren,
  parseTranslation,
  removeNumberSuffix,
  type FlatComponent,
};

const i18nRegex = {
  /*
   * We need to consider 3 cases:
   * 1 Opening tags (e.g. <NuxtLink>)
   * 2 Closing tags (e.g. </NuxtLink>)
   * 3 Self-closing tags (e.g. <NuxtLink />, which in this case could refer to a class as the logo in the login page)
   *
   * We will then inject the props directly in the template that call the RtTranslate component
   * in the case 3 it's more straightforward but in the case 1 and 2 we need to also keep the content inside the tag
   *
   * These are 3 RegEx that we can use to detect components or tags in the translation value
   * All of them also support snake-case in case of third-party components
   */

  // 1 & 3 - could be considered to inject the props
  // https://regex101.com/r/Or6Bah/1
  selfClosingAndOpeningTagsOnly: /<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s?\/?>/g,

  // 1 & 2 & 3
  // https://regex101.com/r/axPbVS/1
  selfClosingOpeningAndClosingTags:
    /<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(?:\/)?>|<\/([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*>/g,

  // Same but slightly different, to test
  // https://regex101.com/r/iZVQDh/1
  allTypesOfTags:
    /<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(\/?)>|<\/([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*>/g,
  /*
   * "The first regular expression uses a non-capturing group for the optional slash,
   * while the second regular expression directly captures the optional slash." (from ChqtGPT)
   */

  /*
   * RegEx that also contain the content inside the tags
   */
  // https://regex101.com/r/TQXaEL/1
  allTagsWithContent:
    /<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(?:\/)?>((?:.|[\r\n])*?)<\/\1\s*>|<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(?:\/)?>/g,

  /*
   * RegEx to match tags and content inside it
   */
  // https://regex101.com/r/3SXgzD/1
  openingAndClosingTagsWithContent:
    /<([A-Z][a-zA-Z0-9-]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(?:\/)?>((?:.|[\r\n])*?)<\/\1\s*>/g,

  // https://regex101.com/r/w9BBjg/1
  standaloneTags: /<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9-]*)\s*([^>]*)\s*(?:\/)?>/g,
};

export interface TagObject {
  tag: string;
  content?: TagObject[] | string;
}

interface FlatComponent {
  tag: string;
  content: string;
}

export type ParsedResult = (string | TagObject)[]; // | ParsedResult[]

function hasManyChildren(element: TagObject): boolean {
  if (!element.content) {
    return false;
  }
  return Array.isArray(element.content);
}

/*
 * Used to handle cases when a translation string contains multiple tags with the same name
 * e.g. "<NuxtLink>Wilkommen</NuxtLink> <NuxtLink-2>zurück</NuxtLink-2>""
 * We remove the hyphen and the number to only render the real tag name
 */
function removeNumberSuffix(str: string) {
  return str.replace(/-\d+/g, '');
}

/*
 * Will return an array of strings of tags or null
 * Example: ["<NuxtLink>","</NuxtLink>"]
 */
function componentsPresent(translationString: string): string[] | null {
  return translationString.match(i18nRegex.allTypesOfTags);
}

/*
 * Parse a given translation string and return an array of strings and objects
 * e.g. for a key
 * "Wunderbar! <NuxtLink>The customer <strong>{{ customer.name }}</strong></NuxtLink> hat den <NuxtLink-2>Kurs</NuxtLink-2> erfolgreich absolviert.",
 *
 * Will return
 * [
 *   'Wunderbar! ',
 *   {
 *     tag: 'NuxtLink',
 *     content: [
 *       'The customer ',
 *       {
 *         tag: 'strong',
 *         content: 'Arthur',
 *       },
 *     ],
 *   },
 *   ' hat den ',
 *   {
 *     tag: 'NuxtLink-2',
 *     content: 'Kurs',
 *   },
 *   ' erfolgreich absolviert.',
 * ]
 */
function parseTranslation(translationString: string): ParsedResult {
  let initialValue = translationString;

  const result: ParsedResult = [];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  initialValue.replace(
    i18nRegex.openingAndClosingTagsWithContent,
    function (substring, tagName, _attrs, content) {
      const index = initialValue.indexOf(substring);

      /*
       * If there is a string before the tag, we push it to the result
       * e.g. "Hallo und <NuxtLink>Wilkommen zurück</NuxtLink>! Viel Spaß"
       * We push "Hallo und " to the result
       */
      if (index > 0) {
        result.push(initialValue.substring(0, index));
      }

      if (componentsPresent(content)) {
        // If the content of the tag contains other tags, we parse it recursively
        content = parseTranslation(content);
        result.push({ tag: tagName, content });
      } else {
        result.push({ tag: tagName, content: content.trim() });
      }

      initialValue = initialValue.substring(index + substring.length);
      /**
       * TODO: to avoid
       * Argument of type '(substring: string, tagName: any, _attrs: any, content: any) => void' is not assignable to parameter of type '(substring: string, ...args: any[]) => string'.
       * Type 'void' is not assignable to type 'string'.
       */
      return substring;
    },
  );

  // TODO:
  // Match self-closing tags
  // initialValue.replace(i18nRegex.standaloneTags, function (match, tagName) {
  //   const index = initialValue.indexOf(match)
  //   if (index > 0) {
  //     result.push(initialValue.substring(0, index))
  //   }
  //   result.push({ tag: tagName })
  //   initialValue = initialValue.substring(index + match.length)
  // })

  // Push the remaining string if any
  if (initialValue.length > 0) {
    result.push(initialValue);
  }

  return result;
}
