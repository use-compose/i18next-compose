import { i18n } from 'i18next';
import { ComposeI18nHelper } from 'packages/core/src/utils/formatter/i18n';

export interface ComposeContext {
  useI18n(namespace: string): {
    i18n: i18n;
    cT: ComposeI18nHelper;
    getTGlobal: ComposeI18nHelper;
  };
}
