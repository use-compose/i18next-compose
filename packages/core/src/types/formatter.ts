import { Namespace, TOptions } from 'i18next';

export type I18nFormatterHelper = {
  createTranslationHelper: (ns: string) => ttFunc | string;
  getTGlobal: () => ttFunc | string;
};

export type ttFunc = {
  (ns: Namespace | string, params?: TOptions): string;
  namespace?: string;
};
