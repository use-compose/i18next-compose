import { Namespace } from 'i18next';
import { initI18nConfig } from './init-i18n-config';
import { Createi18nConfigParams, cTFunc } from './types';
import { I18nApp } from './types/i18n-app';
import { i18nFormatterHelper, i18nFormatterMock } from './utils';

export { contextCoreStub, useCoreContext };
export type { UseCoreContext };

interface UseCoreContext {
  i18nApp: I18nApp;
  translationHelper: (level2: Namespace | string) => cTFunc;
}

/**
 * Creates a stub core context with default values
 *
 * @returns {UseCoreContext}
 */
function contextCoreStub(): UseCoreContext {
  const { translationHelper } = i18nFormatterMock();

  return {
    i18nApp: {} as I18nApp,
    translationHelper,
  };
}

/**
 * Hook to initialize and provide base core i18nApp context
 *
 * @async
 * @param {Createi18nConfigParams} config
 * @returns {Promise<UseCoreContext>}
 */
async function useCoreContext(config: Createi18nConfigParams): Promise<UseCoreContext> {
  if (import.meta.env.SSR || !config) {
    return contextCoreStub();
  }

  const i18nApp = await initI18nConfig(config);

  if (!i18nApp) {
    return contextCoreStub();
  }

  const { translationHelper } = i18nFormatterHelper(i18nApp);

  return { i18nApp, translationHelper };
}
