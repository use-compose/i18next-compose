import { Namespace, TOptions } from 'i18next';
import { InputNamespaces } from '../utils/formatter/i18n';

export interface I18nFormatterHelper {
  // createTranslationHelper: (ns: Namespace | string) => ComposeTranslationHelper;
  translationHelper: ComposeTranslationHelper;
  globalNSHelper: cTFunc;
}

export type ComposeTranslationHelper = (level2: Namespace) => cTFunc;

export type cTFunc = (ns: InputNamespaces, params?: TOptions) => string;
