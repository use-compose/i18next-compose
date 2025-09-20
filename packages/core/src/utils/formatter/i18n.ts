import { i18n, Namespace, TOptions } from 'i18next';
import type { cTFunc, InputNamespaces } from '../../types';

export { i18nFormatterHelper, i18nFormatterMock };
export type { I18nFormatterHelper };

const i18nFormatterMock = (): I18nFormatterHelper => {
  const translationHelper = () => () => '';
  return { translationHelper };
};

interface I18nFormatterHelper {
  translationHelper: (level2: Namespace | string) => cTFunc;
}
/**
 * Provide helper formatter based on current i18next instance to access translations
 *
 * @param i18nextInstance: i18n
 * @returns {I18nFormatterHelper}
 */
function i18nFormatterHelper(i18nextInstance: i18n): I18nFormatterHelper {
  if (!i18nextInstance) {
    return i18nFormatterMock();
  }

  /**
   * Create and return a translation helper based on the current namespace
   * @param level2: string
   * @returns {cTFunc}
   */
  const translationHelper = (level2: Namespace): cTFunc => {
    // t contains the translation function from the given configuration
    const t = i18nextInstance.t;

    /*
     * We do not enforce type of ns, since we need to also dynamically access plurals
     * e.g. we do not want to write _one or _other in the namespace
     */
    const composeT: cTFunc = (ns: InputNamespaces, params?: TOptions): string => {
      const namespaces: Namespace[] = [];

      if (Array.isArray(ns) && ns.length !== 0) {
        for (const n of ns) {
          namespaces.push(n);
        }
      } else {
        namespaces.push(ns as string);
      }
      return t(`${level2}.${namespaces.join('.')}`, params) ?? '';
    };

    composeT.namespace = level2;
    return composeT;
  };

  return { translationHelper };
}
