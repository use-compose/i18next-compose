---
outline: [2, 3]
order: 1
title: Types
---

# Types

## Createi18nConfigParams

Parameters for creating an i18next configuration.

```ts
interface Createi18nConfigParams {
  namespace: string;
  fallbackLng: string;
  preload?: string[];
  lng: string;
  supportedLanguages: string[];
  resources?: Resource;
  debug?: boolean;
  initImmediate?: boolean;
}
```

### Properties

- `namespace`: The namespace to use for the i18next configuration.
- `fallbackLng`: The fallback language to use if the translation is not available in the current language.
- `preload`: An optional array of languages to preload.
- `lng`: The current language to use for the i18next configuration.
- `supportedLanguages`: An array of supported languages for the i18next configuration.
- `resources`: An optional object containing the resources for the i18next configuration.
- `debug`: An optional boolean to enable debug mode.
- `initImmediate`: An optional boolean to enable immediate initialization of i18next.

## I18nFormatterHelper

Helper for formatting i18next translations.

```ts
type I18nFormatterHelper = {
  createTranslationHelper: (ns: string) => ttFunc | string;
  getTGlobal: Function;
};
```

### Properties

- `createTranslationHelper`: A generic function to create a translation helper through nested namespaces.
- `getTGlobal`: A function to get the global translation function.

## ttFunc

Function returned by the translation helper.

```ts
type ttFunc = {
  (ns: Namespace | string, params?: TOptions): string;
  namespace?: string;
};
```

### Properties

- `ns`: The namespace to use for the translation.
- `params`: An optional object containing the parameters for the translation.
- `namespace`: The namespace used for the translation.
