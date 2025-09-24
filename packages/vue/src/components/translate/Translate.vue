<script lang="ts">
import {
  componentsPresent,
  hasManyChildren,
  ParsedResult,
  parseTranslation,
  TagObject,
} from '@/utils/parse';
import { TOptions } from 'i18next';
import { cTFunc } from 'i18next-compose';
import { isString } from 'unreadable-typescript';
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  h,
  HTMLAttributes,
  PropType,
  VNode,
  VNodeProps,
  watchEffect,
} from 'vue';

/* type ComponentPropValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | object
  | Date
  | Function
  | Array<string | number | boolean | null | undefined | object | Date | Function>
  | Symbol

type ComponentsProps = {
  [name: string]: { [key: string]: ComponentPropValue } | null
} */

type ComponentsProps = VNodeProps &
  HTMLAttributes & {
    [name: string]: VNodeProps & HTMLAttributes;
  };

// TODO-NUXT-3: https://www.notion.so/reteach/Interpolation-of-href-HTML-tags-186dffa13e1d4536838ed65b30849cbb?pvs=4
// and PR https://github.com/reteach/reteach-app/pull/3159 + https://github.com/reteach/reteach-app/pull/3853
// type ComponentsProps = Record<string, HTMLAttributes>;

/*
 * TODO-NUXT-3: Breaking changes in Render Function API and Functional Components
 * https://v3-migration.vuejs.org/breaking-changes/render-function-api.html
 * https://v3-migration.vuejs.org/breaking-changes/functional-components.html
 */

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Translate',
  props: {
    cTranslate: {
      type: Function as PropType<cTFunc>,
      required: true,
    },
    i18nKey: {
      type: String,
      required: true,
    },
    values: {
      type: Object as PropType<TOptions>,
      // default: () => ({}),
      required: false,
    },
    components: {
      type: Object as PropType<ComponentsProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    const { i18nKey, values, cTranslate } = props;

    const translationValue = computed(() => {
      if (values) {
        return cTranslate(i18nKey, values);
      }
      return cTranslate(i18nKey);
    });

    // If no tags are present, we return the translation string
    // Meaning this component could be used as a simple translation component
    if (!componentsPresent(translationValue.value)) {
      return translationValue;
    }

    let parsedTranslation: ParsedResult = parseTranslation(translationValue.value);

    // watch for props changes and re-render
    watchEffect(() => {
      parsedTranslation = parseTranslation(translationValue.value);
    });

    function renderComponent(element: TagObject): VNode | string {
      // const elementTag = removeNumberSuffix(element.tag);
      const ElementComponent = defineAsyncComponent(
        () => import(`@/components/${element.tag}.vue`),
      );

      const componentProps = props.components[element.tag];

      // If the component content contains other nested tags, we recursively render them
      const elementContent =
        hasManyChildren(element) && Array.isArray(element.content)
          ? element.content.map((child) => renderComponent(child))
          : element.content;

      //TODO-NUXT-3: For HTML attributes
      // const attrs = props?.attrs;

      // Extract event listeners (e.g., @click)
      // const eventListeners = props?.value.onClick || {};

      return h(
        ElementComponent,
        componentProps,
        // attrs,
        // on: eventListeners,

        () => elementContent,
      );
    }

    function renderParsedTranslation(parsed: ParsedResult): Array<VNode | string> | string {
      if (isString(parsed)) {
        return parsed;
      }
      if (typeof parsed === 'string') {
        return parsed;
      }
      return parsed.map((element) => {
        if (isString(element)) {
          return element;
        }
        if (typeof element === 'string') {
          return element;
        }
        return renderComponent(element);
      });
    }

    return () => renderParsedTranslation(parsedTranslation);
  },
});
</script>
