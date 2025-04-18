import { Createi18nConfigParams, initI18nConfig } from './init-i18n-config';
import { ComposeContext } from './types';
import { i18nFormatter } from './utils';

export async function composeContext(options: Createi18nConfigParams): Promise<ComposeContext> {
  const i18nConfig = await initI18nConfig(options);
  const i18nFormatterValue = i18nFormatter(i18nConfig);

  return {
    i18nApp: i18nConfig,
    ...i18nFormatterValue,
  };
}
