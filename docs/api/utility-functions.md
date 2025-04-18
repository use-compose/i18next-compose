---
outline: [2, 3]
order: 0
---

# Utility Functions

i18next-compose provides a set of utility functions to help you with your translations.

## initI18nConfig

Initializes the i18next configuration.
Return a promise that resolves to the i18next instance.

```ts
function initI18nConfig({
  namespace,
  fallbackLng,
  preload,
  lng,
  supportedLanguages,
  resources,
  initImmediate,
}: Createi18nConfigParams): Promise<i18n>;
```

### Parameters

```ts
interface Createi18nConfigParams {
  namespace: string;
  fallbackLng: string;
  preload?: string[];
  lng: string;
  supportedLanguages: string[];
  resources?: Resource;
  debug?: boolean;
  initImmediate?: boolean;
}
```

- `namespace`: The namespace to use for the i18next configuration.
- `fallbackLng`: The fallback language to use if the translation is not available in the current language.
- `preload`: An optional array of languages to preload.
- `lng`: The current language to use for the i18next configuration.
- `supportedLanguages`: An array of supported languages for the i18next configuration.
- `resources`: An optional object containing the resources for the i18next configuration.
- `debug`: An optional boolean to enable debug mode.
- `initImmediate`: An optional boolean to enable immediate initialization of i18next.

```js
import { Createi18nConfigParams, i18nConfigInit } from 'i18next-compose';

function initi18nextCompose()
 const i18nParams: Createi18nConfigParams = {
    namespace: 'my_namespace',
    fallbackLng: 'en',
    lng: 'en',
    supportedLanguages: ['en', 'fr', 'de'],
  };

  const i18next = await i18nConfigInit(i18nParams);

  return i18next;
}
```

## i18nFormatter

```ts
function i18nFormatter(i18nextConfig: i18n): I18nFormatterHelper;
```

## getFlagEmoji

Trick to transform an ISO code to an emoji flag
From [Grafikart](https://grafikart.fr/tutoriels/drapeau-emoji-fonction-2152)

```js
function isoToEmoji(code: string) {
  return code
    .split('')
    .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map((emojiCode) => String.fromCodePoint(emojiCode))
    .join('');
}

function getFlagEmoji(countryCode: string) {
  return isoToEmoji(countryCode);
}
```

### Example

```js
const frFlag = getFlagEmoji('fr'); // 🇫🇷
const enFlag = getFlagEmoji('en'); // 🇬🇧
const deFlag = getFlagEmoji('de'); // 🇩🇪
```
