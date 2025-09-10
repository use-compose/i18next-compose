import i18next, { i18n, InitOptions, Resource } from 'i18next';
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
  let initializedI18n = i18next;

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

  function withFsBackend(backend: FsBackendOptions): i18n {
    i18NConfig.backend = backend;
    return initializedI18n.use(FsBackend);
  }

  if (backend) {
    const fsBackendConfig: FsBackendOptions = {
      loadPath: backend?.loadPath,
      addPath: backend?.addPath,
      ident: backend?.ident,
      parse: backend?.parse,
      stringify: backend?.stringify,
      expirationTime: backend?.expirationTime,
    };

    initializedI18n = withFsBackend(fsBackendConfig);
  }

  return initializedI18n.init(i18NConfig).then(() => initializedI18n);
}
