import { i18n, Namespace, TOptions } from 'i18next';
import type { I18nFormatterHelper, ttFunc } from '../../types';

export const i18NextFormatterMock = (): I18nFormatterHelper => {
  const createTranslationHelper = () => '';
  const getTGlobal = () => '';

  return { createTranslationHelper, getTGlobal };
};

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
   * @param initialNamespace: string
   * @returns {ttFunc}
   */
  const createTranslationHelper = (initialNamespace: string): ttFunc => {
    const t = i18nextConfig.t;

    /*
     * We do not enforce type of ns, since we need to also dynamically access plurals
     * e.g. we do not want to write _one or _other in the namespace
     */
    function composeT(ns: Namespace | string, params?: TOptions): string {
      return t(`${initialNamespace}.${ns}`, params) ?? '';
    }

    composeT.namespace = initialNamespace;
    return composeT;
  };

  /**
   * Return helper associated to global namespace
   * @param ns
   */
  const getTGlobal = (ns: string): string => {
    return createTranslationHelper('global')(ns);
  };

  return { createTranslationHelper, getTGlobal };
}
