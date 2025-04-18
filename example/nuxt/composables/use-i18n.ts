import type { ComposeContext, I18nFormatterHelper } from 'core';

export function useI18n(namespace: string) {
  const formatter: I18nFormatterHelper = {
    createTranslationHelper: () => '',
    getTGlobal: () => '',
  };

  if (import.meta.server) {
    return formatter;
  }

  const nuxtApp = useNuxtApp();

  const i18nContext = nuxtApp.$i18nContext as ComposeContext;
  const { i18nApp, createTranslationHelper, getTGlobal } = i18nContext;

  return {
    i18n: i18nApp,
    cT: createTranslationHelper(namespace),
    getTGlobal,
  };
}
