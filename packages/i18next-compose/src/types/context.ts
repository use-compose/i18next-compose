import type { ttFunc } from '@use-compose/i18next-core';
import { i18n } from 'i18next';

export interface ComposeContext {
  i18nApp: i18n;
  useI18n(namespace: string): {
    i18n: i18n;
    cT: string | ttFunc;
    getTGlobal: (ns: string) => ttFunc | string;
  };
}
