import { Createi18nConfigParams, initI18nConfig } from './init-i18n-config';
import { ComposeContext, I18nFormatterHelper } from './types';
import { i18nFormatter } from './utils';

const formatter: I18nFormatterHelper = {
  createTranslationHelper: () => '',
  getTGlobal: () => '',
};

export async function composeContext(options: Createi18nConfigParams): Promise<ComposeContext> {
  const i18nConfig = await initI18nConfig(options);
  const i18nFormatterValue = i18nFormatter(i18nConfig);

  function useI18n(namespace: string) {
    if (import.meta.env.SSR) {
      return formatter;
    }

    const { createTranslationHelper, getTGlobal } = i18nFormatterValue;

    return {
      i18n: i18nConfig,
      cT: createTranslationHelper(namespace),
      getTGlobal,
    };
  }

  return {
    i18nApp: i18nConfig,
    ...i18nFormatterValue,
    useI18n,
  };
}
