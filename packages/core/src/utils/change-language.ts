import { useLogger } from '@use-compose/logger';
import { i18n } from 'i18next';

export const localStorageLangKey = 'lang';

export async function changeLanguage(i18n: i18n, lang: string) {
  const { log } = useLogger('changeLanguage');

  i18n.changeLanguage(lang, (err, t) => {
    if (err) return log('something went wrong loading - ' + err);
    t('key'); // -> same as i18next.t
  });

  if (typeof window !== 'undefined') {
    localStorage.setItem(localStorageLangKey, lang);
  }
}
