import { createInstance, i18n, InitOptions, Resource } from 'i18next';
import FsBackend, { FsBackendOptions } from 'i18next-fs-backend';

export { initI18nConfig };

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
  backend?: FsBackendOptions;
}

/* 
 * In case you want to load backend resources, you can use the following example to get the i18n instance:

*/

async function initI18nConfig({
  namespace,
  fallbackLng,
  preload,
  lng,
  supportedLanguages,
  resources,
  initImmediate = true,
  backend,
}: Createi18nConfigParams): Promise<i18n> {
  const initializedI18n = createInstance();

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

  if (backend) {
    initializedI18n.use(FsBackend);
    const fsBackendConfig: FsBackendOptions = {
      loadPath: backend?.loadPath,
      addPath: backend?.addPath,
      ident: backend?.ident,
      parse: backend?.parse,
      stringify: backend?.stringify,
      expirationTime: backend?.expirationTime,
    };
    i18NConfig.backend = fsBackendConfig;
  }

  await initializedI18n.init(i18NConfig);
  return initializedI18n;
}
