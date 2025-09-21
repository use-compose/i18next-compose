import { Createi18nConfigParams } from '@use-compose/i18next-core';
import { composeContext } from '../src/compose-context';
import { ComposeContext } from '../src/types/context';

export async function initConfigAndGetContext(): Promise<ComposeContext> {
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
  const context = await composeContext(mockI18nConfig);
  return context;
}
