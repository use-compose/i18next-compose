import { i18nKey } from '@/types/i18n-key';
import {
  composeI18nextContext,
  Createi18nConfigParams,
  I18NextContext,
  i18nextContextStub,
} from 'i18next-compose';
import { inject, onUnmounted, ref, Ref } from 'vue';

export function useI18nContext() {
  const context: Ref<I18NextContext> = ref(i18nextContextStub);

  async function initContext(i18nextConfig: Createi18nConfigParams) {
    context.value = await composeI18nextContext(i18nextConfig);
    return context.value;
  }

  // async function providei18nextContext(i18nextConfig: Createi18nConfigParams) {
  //   // const context: Ref<ComposeContext> = ref(I18NextContext);

  //   async function init() {
  //     context.value = await composeContext(i18nextConfig);
  //   }
  //   await init();

  //   return context.value;
  // }

  // reactive lang bridged to core (handy if you want v-model in provider)
  // const lang = computed({
  //   get(): string {
  //     return context.value.useI18n('').i18nApp.language;
  //   },
  //   set(next: string) {
  //     // this setter calls i18n.changeLanguage via the core
  //     context.value.useI18n('').lang(next);
  //   },
  // });

  return { initContext, context }; //, lang
}

export function useI18n(ns: string) {
  const ctxRef = inject<Ref<I18NextContext>>(i18nKey)!;

  const i18nApp = ctxRef.value.i18nApp;
  if (!i18nApp) {
    throw new Error('i18nApp is not available in the context. Make sure to provide i18n context.');
  }

  const cT = ref(ctxRef.value.translationHelper(ns));
  const globalT = ref(ctxRef.value.globalNSHelper);

  // 1) reactive language (driven by i18next events)
  const langRef = ref(i18nApp.language);
  const unsubscribe = ctxRef.value.onLangChange((lng) => {
    langRef.value = lng;
    ctxRef.value.i18nApp.language = lng;
    cT.value = ctxRef.value.translationHelper(ns);
    globalT.value = ctxRef.value.globalNSHelper;
  });
  onUnmounted(unsubscribe);

  // i18nApp.on('languageChanged', function (lng) {
  //   cT.value = ctxRef.value.translationHelper(ns);
  //   globalGetter.value = ctxRef.value.globalNSHelper;
  //   langRef.value = lng;
  // });

  // 2) make getters that *depend on* the language
  //    when langRef changes, these recompute to the latest helper
  // const cTGetter = computed(() => {
  //   void langRef.value; // establish dependency on the language (no tick)
  //   return ctxRef.value.translationHelper(ns);
  // });

  // const globalGetter = computed(() => {
  //   void langRef.value;
  //   return ctxRef.value.composeHelper('global');
  // });

  // 3) expose stable plain functions that read the latest helpers
  // const cT = reactiveFn(() => cTGetter.value);
  // const globalNSHelper = reactiveFn(() => globalGetter.value);

  return {
    i18nApp: ctxRef.value.i18nApp,
    cT,
    globalT,
    changeLanguage: (lng: string) => ctxRef.value.lang(lng),
    lang: ctxRef.value.lang,
  };
}
