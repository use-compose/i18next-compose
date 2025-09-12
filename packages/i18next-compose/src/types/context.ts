import { ComposeI18nHelper, cTFunc } from '@use-compose/i18next-core';
import { i18n } from 'i18next';

export interface ComposeContext {
  useI18n(namespace: string): {
    i18nApp: i18n;
    cT: cTFunc | string;
    globalNSHelper: ComposeI18nHelper;
  };
}
