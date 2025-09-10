/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Namespace, TOptions } from 'i18next';

export interface I18nFormatterHelper {
  // createTranslationHelper: (ns: Namespace | string) => ComposeI18nHelper;
  translationHelper: Function;
  globalNSHelper: Function;
}

export type ttFunc = {
  (ns: Namespace | string, params?: TOptions): string;
  namespace?: string;
};
