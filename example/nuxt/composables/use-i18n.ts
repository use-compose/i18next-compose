export function useI18n() {
  const nuxtApp = useNuxtApp();

  const i18n = nuxtApp.$i18nApp;
  return i18n;
}
