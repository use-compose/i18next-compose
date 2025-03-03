export function useI18n() {
  const nuxtApp = useNuxtApp();
  console.log('📟 - nuxtApp → ', nuxtApp);

  const i18n = nuxtApp.$i18nApp;
  return i18n;
}
