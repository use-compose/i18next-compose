---
title: Translation Interpolation
titleTemplate: i18next-compose-vue
description: Using the RtTranslate component to render complex translations with components and values.
outline: [2, 3]
---

# Components Interpolation

Support for rendering Vue components and HTML tags with custom props and attributes inside translation strings focusing on human-readable approach.

## 3. Using a single component to interpolate and handle complex translation values containing Vue components

This component would accept the following props:

- The current translations functions (`rtTranslate` or `rtGlobalT`for example) in a given context (reactive)
- The translation key
- The potential params/values inside the translations (reactive)
- The list of components to interpolate, as an object where we will pass the props - as they could be dynamic, they won't be part of the translation string

```vue
<RtTranslate
  :rt-translate="rtTranslate"
  i18n-key="interpolate_with_complex_translation"
  :components="{
    NuxtLink: { to: toCourseList },
    SelfClosingComponent: { prop1: 'prop1', prop2: 'prop2' },
    NuxtLink-2: { to: 'blablabla' },
  }"
/>
```

By specifying `NuxtLink` through different names (`NuxtLink1` and `NuxtLink-2`) we ensure to not overlap any existing properties.

## 2. Using a parsing function to correctly render the translation value based on the eixstence of Vue components

Starting from this translation
`Hallo und <NuxtLink>Wilkommen zurück</NuxtLink>! Viel Spaß <NuxtLink-2>mit unserer <SelfClosingComponent />App</NuxtLink-2><library-component> sie uns </library-component/> wissen`

The idea is to get something as such:

```javascript
[
  'Hallo und ',
  {
    tag: 'NuxtLink',
    content: 'Wilkommen zurück',
  },
  '! Viel Spaß ',
  {
    tag: 'NuxtLink-2',
    // this would need to be recursively parsed
    content: 'mit unserer <SelfClosingComponent />App',
  },
];
```

To make it easier to work with afterwards

Example:

1. Initial code:

```html
<template>
  <!-- using a render function, this extra div could potentially be avoided -->
  <div>
    Hallo und <NuxtLink :to="link1">Wilkommen zurück</NuxtLink>! Viel Spaß
    <NuxtLink-2 :to="link2">mit unserer <SelfClosingComponent :prop="nameOfProp" /> App</NuxtLink-2>
    <library-component> sie uns </library-component> wissen
  </div>
</template>
```

2. Translation string:
   `"Hallo und <NuxtLink>Wilkommen zurück</NuxtLink>! Viel Spaß <NuxtLink-2>mit unserer <SelfClosingComponent />App</NuxtLink-2><library-component> sie uns </library-component/> wissen"`

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
