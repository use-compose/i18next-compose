export { mocki18nConfig };

const mocki18nConfig = {
  namespace: 'i18next',
  fallbackLng: 'en',
  ns: ['i18next'],
  lng: 'en',
  supportedLanguages: ['en', 'de'],
  debug: false,
  resources: {
    en: {
      i18next: {
        compose_translations: {
          test_key: 'Value of test key2',
        },
      },
    },
  },
};
