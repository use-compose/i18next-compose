/* eslint-disable @typescript-eslint/no-explicit-any */
import { i18nKey } from '@/types/i18n-key';
import {
  composeI18nextContext,
  Createi18nConfigParams,
  I18NextContext,
  i18nextContextStub,
} from 'i18next-compose';
import { computed, inject, onUnmounted, ref, Ref } from 'vue';

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

// TODO: fix (from GPT)
// small helper: wraps a getter of a function into a stable, plain function
function reactiveFn<F extends (...a: any[]) => any>(get: () => F): F {
  // we capture a computed below; this wrapper just dereferences it at call time
  return ((...args: any[]) => get()(...(args as Parameters<F>))) as F;
}

export function useI18n(ns: string) {
  const ctxRef = inject<Ref<I18NextContext>>(i18nKey)!;

  // 1) reactive language (driven by i18next events)
  const langRef = ref(ctxRef.value.i18nApp.language);
  const stop = ctxRef.value.onLangChange((lng) => (langRef.value = lng));
  onUnmounted(stop);

  // 2) make getters that *depend on* the language
  //    when langRef changes, these recompute to the latest helper
  const cTGetter = computed(() => {
    void langRef.value; // establish dependency on the language (no tick)
    return ctxRef.value.translationHelper(ns);
  });

  const globalGetter = computed(() => {
    void langRef.value;
    return ctxRef.value.composeHelper('global');
  });

  // 3) expose stable plain functions that read the latest helpers
  const cT = reactiveFn(() => cTGetter.value);
  const globalNSHelper = reactiveFn(() => globalGetter.value);

  return {
    i18nApp: ctxRef.value.i18nApp,
    cT, // call as cT('welcome'), both in template and script
    globalNSHelper, // same
    changeLanguage: (lng: string) => ctxRef.value.lang(lng),
    lang: ctxRef.value.lang,
  };
}
