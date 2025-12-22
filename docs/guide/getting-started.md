---
outline: [2, 3]
order: 1
---

# i18next-compose

![NPM Package Version](https://img.shields.io/npm/v/i18next-compose?color=519ea9)

A lightweight library to manage translations with **component interpolation** and **complex translation strings**

## Motivation

Translation is rarely just an engineering concern—it often involves multiple teams:

- Developers implement the system.
- Translators provide the content.
- Designers ensure proper rendering.
- Product Owners/Managers validate results.
- Content Writers refine copy.

i18next-compose provides a modular and efficient way to keep everyone aligned, without enforcing global `$t` helpers.

---

Built with a generic **core** package and framework-specific renderers for **Vue** and **React**.

::: tip Why?
Translations often involve developers, translators, designers, and product owners.  
This library keeps everyone aligned by making complex translations easier to manage.
:::

- [Vue →](./vue/)
- [React →](./react/)

## Installation

::: code-group

```bash [npm]
npm install i18next-compose
```

```bash [yarn]
yarn add i18next-compose
```

```bash [pnpm]
pnpm add i18next-compose
```

:::

## Usage

There are different ways to use i18next-compose.

### Context Provider (recommended)

The best way is to create a context that will provide the i18next instance and the corresponding helper functions to your application.

::: code-group

```js [JavaScript]
import { composeI18nextContext } from 'i18next-compose';

const i18nParams = {
  namespace: 'my_namespace',
  fallbackLng: 'en',
  lng: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
};
const context = await composeI18nextContext(i18nParams);
```

```ts [TypeScript]
import { composeI18nextContext } from 'i18next-compose';
import type { Createi18nConfigParams, I18nextContext } from 'i18next-compose';

const i18nParams: Createi18nConfigParams = {
  namespace: 'my_namespace',
  fallbackLng: 'en',
  lng: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
};

// type will be inferred as I18nextContext but you can also explicitly type it
const context: I18nextContext = await composeI18nextContext(i18nParams);
```

:::

### Standalone initialization

2. You can initialize the configuration in standalone mode:

::: code-group

```js [JavaScript]
import { i18nConfigInit } from 'i18next-compose';

const i18nParams = {
  namespace: 'my_namespace',
  fallbackLng: 'en',
  lng: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
};

const i18App = await i18nConfigInit(i18nParams);

return i18App;
```

```ts [TypeScript]
import { i18nConfigInit } from 'i18next-compose';
import type { Createi18nConfigParams, I18nApp } from 'i18next-compose';

const i18nParams: Createi18nConfigParams = {
  namespace: 'my_namespace',
  fallbackLng: 'en',
  lng: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
};

const i18App: I18nApp = await i18nConfigInit(i18nParams);
```

:::
Behind the scenes, this will create a new i18next instance with the provided configuration. You can then use this instance to translate your content using the i18next helper functions.

:::tip
i18next-compose doest not inject global variable such as `$t` or `$i18next`. It means to be used in a modular way.
:::

2. You can directly create a context that will:

- Create the i18n instance (as in 1.)
- Return the corresponding reactive helper functions (see features)

This context can then be used in different frameworks (Vue, React) as a provider.
