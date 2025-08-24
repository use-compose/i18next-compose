import { Createi18nConfigParams, i18nFormatter, initI18nConfig, ttFunc } from 'core';
import i18next, { i18n } from 'i18next';
import type { ComposeContext } from './types';

interface UseI18nReturn {
  i18n: i18n;
  cT: string | ttFunc;
  getTGlobal: (ns: string) => ttFunc | string;
}

const formatter: UseI18nReturn = {
  i18n: i18next,
  cT: () => '',
  getTGlobal: () => '',
};

export const I18NextContext: ComposeContext = {
  i18nApp: i18next,
  useI18n: () => formatter,
};

export async function composeContext(options: Createi18nConfigParams): Promise<ComposeContext> {
  if (import.meta.env.SSR) {
    return I18NextContext;
  }

  const i18nConfig = await initI18nConfig(options);
  if (!i18nConfig) {
    return I18NextContext;
  }
  const i18nFormatterValue = i18nFormatter(i18nConfig);

  const useI18n = (namespace: string): UseI18nReturn => {
    if (import.meta.env.SSR || !i18nConfig) {
      return formatter;
    }

    const { createTranslationHelper, getTGlobal } = i18nFormatterValue;

    return {
      i18n: i18nConfig,
      cT: createTranslationHelper(namespace),
      getTGlobal,
    };
  };

  return {
    i18nApp: i18nConfig,
    // ...i18nFormatterValue,
    useI18n,
  };
}
