import { CoreContext, cTFunc } from '@use-compose/i18next-core';

export interface I18NextContext extends CoreContext {
  // useI18n(namespace: string): I18NextContext;
  globalNSHelper?: cTFunc;
  lang: (lang?: string) => Promise<void>;
  onLangChange: (callback: (lng: string) => void) => () => void;
}
