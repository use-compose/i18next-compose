import { I18NextContext } from 'i18next-compose';
import { InjectionKey, Ref } from 'vue';

export type Context = Ref<I18NextContext>;

export const i18nKey = Symbol() as InjectionKey<Context>;
