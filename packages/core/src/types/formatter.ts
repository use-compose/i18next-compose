import { Namespace, TOptions } from 'i18next';
export type { cTFunc, I18nFormatterHelper, InputNamespaces };
type InputNamespaces = Namespace | Namespace[];

interface I18nFormatterHelper {
  translationHelper: (level2: Namespace) => cTFunc;
}

type cTFunc = { (ns: InputNamespaces, params?: TOptions): string; namespace?: Namespace };
