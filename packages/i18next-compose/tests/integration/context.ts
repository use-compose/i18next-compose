import { Createi18nConfigParams } from '@use-compose/i18next-core';
import { composeI18nextContext } from '../../src/compose-context';
import { I18NextContext } from '../../src/types';

export async function initConfigAndGetContext(): Promise<I18NextContext> {
  const mockI18nConfig: Createi18nConfigParams = {
    namespace: 'i18next',
    fallbackLng: 'en',
    debug: false,
    lng: 'en',
    supportedLanguages: ['en', 'de'],
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
  const context = await composeI18nextContext(mockI18nConfig);
  return context;
}
