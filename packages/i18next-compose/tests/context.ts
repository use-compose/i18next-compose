import { Createi18nConfigParams } from '@use-compose/i18next-core';
import { composeI18nextContext } from '../src/compose-context';

export async function initConfigAndGetContext(): Promise<ReturnType<typeof composeI18nextContext>> {
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
