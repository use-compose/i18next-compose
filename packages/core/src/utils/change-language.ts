import { useLogger } from '@use-compose/logger';
import { i18n } from 'i18next';

export const localStorageLangKey = 'lang';

export type ChangeLanguageFunc = (i18n: i18n, lang: string) => Promise<void>;

export const changeLanguage: ChangeLanguageFunc = async (i18n: i18n, lang: string) => {
  const { log } = useLogger('changeLanguage');
  log('i18n.language' + i18n.language);
  await i18n.changeLanguage(lang);
};
