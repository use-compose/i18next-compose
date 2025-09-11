 
import { Namespace, TOptions } from 'i18next';

export interface I18nFormatterHelper {
  // createTranslationHelper: (ns: Namespace | string) => ComposeI18nHelper;
  translationHelper: ComposeI18nHelper;
  globalNSHelper: ComposeI18nHelper;
}

export type ComposeI18nHelper = (level2: Namespace) => cTFunc | string;

export type cTFunc = (ns: Namespace | string, params?: TOptions) => string;
