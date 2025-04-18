import { i18n } from 'i18next';
import { I18nFormatterHelper } from './formatter';

export interface ComposeContext extends I18nFormatterHelper {
  i18nApp: i18n;
}
