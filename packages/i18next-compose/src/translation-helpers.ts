import { cTFunc, I18nFormatterHelper, InputNamespaces } from '@use-compose/i18next-core';
import { Namespace } from 'i18next';

export { composeI18nHelpers };
export type { ComposeI18nHelpers };

interface ComposeI18nHelpers extends I18nFormatterHelper {
  globalNSHelper: cTFunc;
  composeHelper(level2: Namespace): cTFunc;
}

/**
 * Provide helpers and utility function to create own translation helpers
 *
 * @param {I18nApp} i18nextInstance
 * @returns {ComposeI18nHelpers}
 */
function composeI18nHelpers(translationHelper: (level2: Namespace) => cTFunc): ComposeI18nHelpers {
  /**
   * Return helper associated to global namespace
   * @param ns
   * @returns {string}
   *
   * @example
   * {
   *  "namespace": {
   *   "key_from_global_namespace": "This is a global translation"
   *  }
   * }
   *
   * Usage:
   * globalNSHelper('key_from_global_namespace');
   * // returns "This is a global translation"
   */
  const globalNSHelper: cTFunc = (ns: InputNamespaces) => {
    return composeHelper('global')(ns);
  };

  /**
   * Utility to create own translation helper based on level2 namespace
   */
  function composeHelper(level2: string): cTFunc {
    return translationHelper(level2);
  }

  return { translationHelper, globalNSHelper, composeHelper };
}
