import { Namespace } from 'i18next';
import { initI18nConfig } from '../init-i18n-config';
import { Createi18nConfigParams, cTFunc } from '../types';
import { I18nApp } from '../types/i18n-app';
import { i18nFormatterHelper, i18nFormatterMock } from '../utils';

export { contextCoreStub, useCoreContext };
export type { CoreContext };

interface CoreContext {
  i18nApp: I18nApp;
  translationHelper: (level2: Namespace | string) => cTFunc;
  composeHelper(level2: string): cTFunc;
}

/**
 * Creates a stub core context with default values
 *
 * @returns {CoreContext}
 */
function contextCoreStub(): CoreContext {
  const { translationHelper } = i18nFormatterMock();

  return {
    i18nApp: {} as I18nApp,
    translationHelper,
    composeHelper: () => () => '',
  };
}

/**
 * Hook to initialize and provide base core i18nApp context
 *
 * @async
 * @param {Createi18nConfigParams} config
 * @returns {Promise<CoreContext>}
 */
async function useCoreContext(config: Createi18nConfigParams): Promise<CoreContext> {
  if (import.meta.env.SSR || !config) {
    return contextCoreStub();
  }

  const i18nApp = await initI18nConfig(config);

  if (!i18nApp) {
    return contextCoreStub();
  }

  const { translationHelper } = i18nFormatterHelper(i18nApp);

  /**
   * Utility to create own translation helper based on level2 namespace
   */
  function composeHelper(level2: string): cTFunc {
    return translationHelper(level2);
  }

  return { i18nApp, translationHelper, composeHelper };
}
