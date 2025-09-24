import {
  changeLanguage,
  Createi18nConfigParams,
  cTFunc,
  I18nApp,
  InputNamespaces,
  useCoreContext,
} from '@use-compose/i18next-core';
import { I18NextContext } from './types';

export { composeI18nextContext, i18nextContextStub };

const i18nextContextStub: I18NextContext = {
  i18nApp: {} as I18nApp,
  translationHelper: () => () => '',
  globalNSHelper: () => '',
  composeHelper: () => () => '',
  onLangChange: () => () => {},
  lang: async () => {},
};

/**
 * Creates and returns an i18next context with the provided configuration options.
 *
 * @async
 * @param {Createi18nConfigParams} options
 * @param {{ ssr?: boolean; }} [param0={}]
 * @param {boolean} [param0.ssr=typeof window === 'undefined']
 * @returns {Promise<I18NextContext>}
 */
async function composeI18nextContext(
  options: Createi18nConfigParams,
  { ssr = typeof window === 'undefined' } = {},
): Promise<I18NextContext> {
  if (ssr || !options) {
    return i18nextContextStub;
  }

  const { i18nApp, translationHelper, composeHelper } = await useCoreContext(options);

  /**
   * Return helper associated to global namespace
   * @param ns
   * @returns {string}
   *
   * @example
   * {
   *  "namespace": {
   *   "key_from_global_namespace": "This is a global translation"
   *  }
   * }
   *
   * Usage:
   * globalNSHelper('key_from_global_namespace');
   * // returns "This is a global translation"
   */
  const globalNSHelper: cTFunc = (ns: InputNamespaces) => {
    return composeHelper('global')(ns);
  };

  /**
   * Change the current language.
   *
   * @async
   * @param {?string} [lng]
   * @returns {*}
   */
  async function lang(lng?: string) {
    const target = lng || (options.fallbackLng as string) || 'en';
    if (i18nApp.language !== target) {
      await changeLanguage(i18nApp, target);
    }
  }

  /**
   * Helper/wrapper to provide to specific Frameworks (e.g. Vue, React) to listen to language changes
   * See docs: https://www.i18next.com/overview/api#events
   */
  function onLangChange(cb: (lng: string) => void) {
    i18nApp.on('languageChanged', cb);
    cb(i18nApp.language);
    return function unsubscribe(): void {
      i18nApp.off('languageChanged', cb);
    };
  }

  return {
    i18nApp,
    translationHelper,
    globalNSHelper,
    composeHelper,
    lang,
    onLangChange,
  };
}
