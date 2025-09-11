import { Createi18nConfigParams, i18nFormatter, initI18nConfig } from '@use-compose/i18next-core';
import i18next, { i18n } from 'i18next';
import { ComposeI18nHelper } from './../../core/src/utils/formatter/i18n';
import type { ComposeContext } from './types';

interface UseI18nReturn {
  i18nApp: i18n;
  cT: ComposeI18nHelper;
  getTGlobal: ComposeI18nHelper;
}

const formatter: UseI18nReturn = {
  i18nApp: i18next,
  cT: () => '',
  getTGlobal: () => '',
};

export const I18NextContext: ComposeContext = {
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

  function useI18n(namespace: string): UseI18nReturn {
    if (import.meta.env.SSR || !i18nConfig) {
      return formatter;
    }

    const { translationHelper, globalNSHelper } = i18nFormatterValue;

    return {
      i18nApp: i18nConfig,
      cT: translationHelper(namespace),
      globalNSHelper,
    };
  }

  return { useI18n };
}
