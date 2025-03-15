import i18next from 'i18next';
// import { i18nFormatter } from '../src/utils'

export async function initi18nConfigAndGetKey(): Promise<string> {
  const mocki18nConfig = {
    fallbackLng: 'en',
    ns: ['i18next'],
    debug: false,
    resources: {
      en: {
        i18next: {
          compose_translations: {
            test_key: 'Value of test key',
          },
        },
      },
    },
  };
  await i18next.init(mocki18nConfig);
  // const { i18nHelper } = i18nFormatter(i18next)
  // const rtTranslateTest = i18nHelper('compose_translations')
  return i18next.t('compose_translations.test_key');
}
