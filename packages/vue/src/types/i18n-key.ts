import { ComposeI18nextContext } from 'i18next-compose';
import { InjectionKey, Ref } from 'vue';

export type Context = Ref<ComposeI18nextContext>;

export const i18nKey = Symbol() as InjectionKey<Context>;
