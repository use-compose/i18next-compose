import { i18n } from 'i18next';
import { initI18nConfig } from '../src/init-i18n-config';
import { i18nFormatter } from '../src/utils';
import { mocki18nConfig } from './mocks/i18next-config';

export { getFormatterFunctions, initi18nConfig };

async function initi18nConfig(): Promise<i18n> {
  const i18next = await initI18nConfig(mocki18nConfig);
  return i18next;
}

function getFormatterFunctions(config: i18n) {
  const { translationHelper: testTranslationHelper, globalNSHelper: getTGlobal } =
    i18nFormatter(config);
  return { testTranslationHelper, getTGlobal };
}
