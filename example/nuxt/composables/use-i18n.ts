import type { ComposeContext, I18nFormatterHelper } from 'i18next-compose';

export function useI18nLocal(namespace: string) {
  const formatter: I18nFormatterHelper = {
    createTranslationHelper: () => '',
    getTGlobal: () => '',
  };

  if (import.meta.server) {
    return formatter;
  }

  const nuxtApp = useNuxtApp();

  const i18nContext = nuxtApp.$i18nContext as ComposeContext;
  const { i18nApp, useI18n } = i18nContext;

  return {
    i18n: i18nApp,
    cT: useI18n(namespace).cT,
    getTGlobal: useI18n(namespace).getTGlobal,
  };
}
