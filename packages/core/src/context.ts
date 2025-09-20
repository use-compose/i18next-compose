import { i18n } from 'i18next';
import { cTFunc } from './types';

export { contextStub };
export type { UseContext };

interface UseContext {
  i18nApp: i18n;
  cT: cTFunc;
  globalNSHelper: cTFunc;
}

function contextStub(): UseContext {
  return {
    i18nApp: {} as i18n,
    cT: () => '',
    globalNSHelper: () => '',
  };
}
