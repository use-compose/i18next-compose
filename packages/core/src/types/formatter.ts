import { Namespace, TOptions } from 'i18next';

export type InputNamespaces = Namespace | Namespace[] | string;

export type cTFunc = { (ns: InputNamespaces, params?: TOptions): string; namespace?: Namespace };
