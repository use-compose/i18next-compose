import {
  changeLanguage,
  contextCoreStub,
  Createi18nConfigParams,
  I18nApp,
  useCoreContext,
} from '@use-compose/i18next-core';
import { Namespace } from 'i18next';
import { composeI18nHelpers } from './translation-helpers';
import type { ComposeContext, UseI18n } from './types';
import { I18NextContext } from './types';

const composeContextStub: I18NextContext = {
  i18nApp: {} as I18nApp,
  translationHelper: () => () => '',
  cT: () => '',
  globalNSHelper: () => '',
  lang: async () => {},
};

export async function composeContext(
  options: Createi18nConfigParams,
  { ssr = typeof window === 'undefined' } = {},
): Promise<ComposeContext> {
  if (import.meta.env.SSR || !options) {
    return {
      useI18n: (namespace: Namespace): UseI18n => ({
        i18nApp: composeContextStub.i18nApp,
        cT: composeContextStub.translationHelper(namespace),
        globalNSHelper: composeContextStub.globalNSHelper,
        lang: composeContextStub.lang,
      }),
    };
  }
  // SSR/no options: return inert context with safe stubs
  if (ssr || !options) {
    const { i18nApp: inertI18nApp, translationHelper: inertTranslationHelper } =
      await useCoreContext({} as Createi18nConfigParams);
    const inertFmt = composeI18nHelpers(inertTranslationHelper);
    const noop = async () => {};
    const useI18n = (namespace: Namespace): UseI18n => ({
      i18nApp: inertI18nApp,
      cT: contextCoreStub().translationHelper(namespace),
      globalNSHelper: inertFmt.globalNSHelper,
      lang: noop,
    });
    const onLangChange = () => () => {};
    return {
      useI18n,
      onLangChange,
    };
  }

  // ---- real instance ----
  const { i18nApp, translationHelper } = await useCoreContext(options);
  const { globalNSHelper } = composeI18nHelpers(translationHelper);

  async function changeLang(lang?: string): Promise<void> {
    if (i18nApp.language !== lang) {
      await changeLanguage(i18nApp, lang || (options.fallbackLng as string) || 'en');
    }
  }

  /**
   * Hook to access i18nApp instance and translation helpers
   *
   * @param {string} namespace
   * @returns {UseI18n}
   */
  function useI18n(namespace: string) {
    if (!i18nApp) {
      return composeContextStub;
    }

    return {
      i18nApp,
      cT: translationHelper(namespace),
      globalNSHelper: globalNSHelper,
      lang: changeLang,
    };
  }

  /**
   * Helper/wrapper to provide to specific Frameworks (e.g. Vue, React) to listen to language changes
   * See docs: https://www.i18next.com/overview/api#events
   */
  function onLangChange(cb: (lng: string) => void): () => void {
    i18nApp.on('languageChanged', cb);
    cb(i18nApp.language); // emit current once
    return function unsubscribe(): void {
      i18nApp.off('languageChanged', cb);
    };
  }

  return {
    useI18n,
    onLangChange,
  };
}
