import { i18n } from 'i18next';
import { I18nFormatterHelper, ttFunc } from './formatter';

export interface ComposeContext extends I18nFormatterHelper {
  i18nApp: i18n;
  useI18n(namespace: string):
    | I18nFormatterHelper
    | {
        i18n: i18n;
        cT: string | ttFunc;
        getTGlobal: (ns: string) => ttFunc | string;
      };
}
