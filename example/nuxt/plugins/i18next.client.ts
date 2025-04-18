import type { ComposeContext, Createi18nConfigParams } from 'core';
import { composeContext } from 'core';

export default defineNuxtPlugin(
  async (): Promise<{
    provide: { i18nContext: ComposeContext };
  }> => {
    const i18nParams: Createi18nConfigParams = {
      namespace: 'nuxt_example',
      fallbackLng: 'en',
      debug: true,
      resources: {
        en: {
          nuxt_example: {
            home: {
              welcome: 'Welcome to i18next-Compose',
              hello: 'Hello',
              goodbye: 'Goodbye',
            },
          },
        },
        de: {
          nuxt_example: {
            home: {
              welcome: 'Willkommen bei i18next-Compose',
              hello: 'Hallo',
              goodbye: 'Auf Wiedersehen',
            },
          },
        },
      },

      // TODO: get the language from the user
      lng: 'en',
      supportedLanguages: ['en', 'en'],
    };

    const i18nextContext: ComposeContext = await composeContext(i18nParams);

    return {
      provide: {
        i18nContext: i18nextContext,
      },
    };
  },
);
