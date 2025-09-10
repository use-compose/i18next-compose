import { i18n, Namespace, TOptions } from 'i18next';
import type { I18nFormatterHelper } from '../../types';

export const i18NextFormatterMock = (): I18nFormatterHelper => {
  const translationHelper = () => '';
  const globalNSHelper = () => '';

  return { translationHelper, globalNSHelper };
};

export type ComposeI18nHelper = (level3: Namespace | string, params?: TOptions) => string;

/**
 * Description
 * @param i18nextConfig: i18n
 * @returns {I18nFormatterHelper}
 
 */
export function i18nFormatter(i18nextConfig: i18n): I18nFormatterHelper {
  if (!i18nextConfig) {
    return i18NextFormatterMock();
  }

  /**
   * Create and return a translation helper based on the current namespace
   * @param level2: string
   * @returns {ttFunc}
   */
  const translationHelper = (level2: string): ComposeI18nHelper => {
    // t contains the translation function from the given configuration

    const t = i18nextConfig.t;
    /*
     * We do not enforce type of ns, since we need to also dynamically access plurals
     * e.g. we do not want to write _one or _other in the namespace
     */
    function composeT(level3: Namespace | string, params?: TOptions): string {
      return t(`${level2}.${level3}`, params) ?? '';
    }

    // composeT.namespace = level2;
    return composeT;
  };

  /**
   * Return helper associated to global namespace
   * @param ns
   */
  const globalNSHelper = (level3: string): string => {
    return translationHelper('global')(level3);
  };

  return { translationHelper, globalNSHelper };
}
