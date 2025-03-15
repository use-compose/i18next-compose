import type { Createi18nConfigParams } from 'core';
import { i18nConfigInit } from 'core';

export default defineNuxtPlugin(async () => {
  const i18nParams: Createi18nConfigParams = {
    namespace: 'test',
    fallbackLng: 'en',
    debug: true,

    // TODO: get the language from the user
    lng: 'en',
    supportedLanguages: ['en', 'en'],
  };

  const i18next = await i18nConfigInit(i18nParams);

  return {
    provide: {
      i18nApp: i18next,
    },
  };
});
