import { cTFunc, UseCoreContext } from '@use-compose/i18next-core';

export interface I18NextContext extends UseCoreContext {
  cT: cTFunc;
  globalNSHelper: cTFunc;
  lang: (lang?: string) => Promise<void>;
}

export interface UseI18n {
  i18nApp: I18NextContext['i18nApp'];
  cT: cTFunc;
  globalNSHelper: I18NextContext['globalNSHelper'];
  lang: (lang?: string) => Promise<void>;
}

export interface ComposeContext {
  useI18n(namespace: string): UseI18n;
  onLangChange?: (callback: (lng: string) => void) => () => void;
}
