# i18next-compose

![NPM Package Version](https://img.shields.io/npm/v/i18next-compose?color=519ea9)

One of the biggest challenge in Engineering is to ensure that everyone is on the same page.
This can relate to the codebase, the documentation, etc. It's often related as to be on the same **boat**.

## Motivation

Translation processes go beyond only Engineering, they can involve multiple teams and require to synchronize the knowledge, in a common language
They can involve:

- **Developers**: to implement the translation process
- **Translators**: to translate the content
- **Content Writers**: to validate and correct the translations
- **Designers**: to ensure that the translations are correctly displayed
- **Product Owners/Managers**: to test the final result
  etc.

This Library aims to provide a simple and efficient way to manage translations in a Vue or Nuxt project.

## Installation

:::code-group

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

1. You can initialize the configuration in standalone mode:

```js
import { Createi18nConfigParams, i18nConfigInit } from 'i18next-compose';

function initi18nextCompose()
 const i18nParams: Createi18nConfigParams = {
    namespace: 'my_namespace',
    fallbackLng: 'en',
    lng: 'en',
    supportedLanguages: ['en', 'fr', 'de'],
  };

  const i18next = await i18nConfigInit(i18nParams);

  return i18next;
}
```

Behind the scenes, this will create a new i18next instance with the provided configuration. You can then use this instance to translate your content using the i18next helper functions.

:::tip
i18next-compose doest not inject global variable such as `$t` or `$i18next`. It means to be used in a modular way.
:::

2. You can directly create a context that will:

- Create the i18n instance (as in 1.)
- Return the corresponding reactive helper functions (see features)

This context can then be used in different frameworks (Vue, React) as a provider.

# Features

## Translations parsing

Support for rendering complex translations that involve components and values in one single translation string.

Example:

1. Initial code:

```html
<template>
  <!-- using a render function, this extra div could potentially be avoided -->
  <div>
    Hallo und <NuxtLink :to="link1">Wilkommen zurück</NuxtLink>! Viel Spaß
    <NuxtLink2 :to="link2">mit unserer <SelfClosingComponent :prop="nameOfProp" /> App</NuxtLink2>
    <library-component> sie uns </library-component> wissen
  </div>
</template>
```

2. Translation string:
   `"Hallo und <NuxtLink>Wilkommen zurück</NuxtLink>! Viel Spaß <NuxtLink2>mit unserer <SelfClosingComponent />App</NuxtLink2><library-component> sie uns </library-component/> wissen"`

3. Using the `RtTranslate` component:

```vue
<RtTranslate
  :rt-translate="rtTranslate"
  i18n-key="name_of_key"
  :components="{
    NuxtLink: { to: someLocation },
    'NuxtLink-2': { to: anoTherLocation, prop2: value },
    'library-component': {},
  }"
  :values="{ valueToInterpolate1: 'test' }"
/>
```

### Explanation

Parse a given translation string and return an array of strings and objects e.g. for a key

```json
"Wunderbar! <NuxtLink>The customer <strong>{{ customer.name }}</strong></NuxtLink> hat den <NuxtLink-2>Kurs</NuxtLink-2> erfolgreich absolviert."
```

Will return

```ts
[
  'Wunderbar! ',
  {
    tag: 'NuxtLink',
    content: [
      'The customer ',
      {
        tag: 'strong',
        content: 'Arthur',
      },
    ],
  },
  ' hat den ',
  {
    tag: 'NuxtLink-2',
    content: 'Kurs',
  },
  ' erfolgreich absolviert.',
];
```

## Comparison with Other Icon Strategies TODO:

| Feature / Approach                               | Translators                                  | Content Writers | Developers          | Other contributors (non-developer) |
| ------------------------------------------------ | -------------------------------------------- | --------------- | ------------------- | ---------------------------------- |
| **Strong convention on the naming**              | ✅                                           | ✅              | ✅                  | ✅ Minimal                         |
| **Several namespace levels**                     | ~                                            | ✅              | ✅                  | `<svg>` (clean)                    |
| **Full Interpolation of Components / HTML tags** | Translators - Readability for non-developers | ✅ Full control | ✅ Flexible via CSS | ✅ CSS variables                   |
