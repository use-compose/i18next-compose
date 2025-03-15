import i18next, { i18n, InitOptions, Resource } from 'i18next';

export { i18nConfigInit };

const i18NConfigOptions: InitOptions = {
  fallbackLng: 'en',
  preload: ['en', 'en'],
  interpolation: {
    escapeValue: false,
  },
  initImmediate: true,
};

export interface Createi18nConfigParams {
  namespace: string;
  fallbackLng: string;
  preload?: string[];
  lng: string;
  supportedLanguages: string[];
  resources?: Resource;
  debug?: boolean;
  initImmediate?: boolean;
}

/* 
 * In case you want to load backend resources, you can use the following example to get the i18n instance:

*/

async function i18nConfigInit({
  namespace,
  fallbackLng,
  preload,
  lng,
  supportedLanguages,
  resources,
  initImmediate = true,
}: Createi18nConfigParams): Promise<i18n> {
  const i18NConfig: InitOptions = {
    ...i18NConfigOptions,
    ns: namespace,
    fallbackLng,
    preload,
    lng,
    supportedLngs: supportedLanguages,
    resources,
    initImmediate,
  };

  await i18next.init(i18NConfig);

  return i18next;
}
