---
outline: [2, 3]
order: 1
---

# Features

From SVG files to Vue Components that you own.

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

## Comparison with Other Icon Strategies

| Feature / Approach                               | Translators                                  | Content Writers | Developers          | Other contributors (non-developer) |
| ------------------------------------------------ | -------------------------------------------- | --------------- | ------------------- | ---------------------------------- |
| **Strong convention on the naming**              | ✅                                           | ✅              | ✅                  | ✅ Minimal                         |
| **Several namespace levels**                     | ~                                            | ✅              | ✅                  | `<svg>` (clean)                    |
| **Full Interpolation of Components / HTML tags** | Translators - Readability for non-developers | ✅ Full control | ✅ Flexible via CSS | ✅ CSS variables                   |

## Example

:::code-group

```xml [user-badge.svg]
<svg fill="#000" stroke="#fff" stroke-width="2">
  <path d="..." />
</svg>
```

:::

**will generate:**

:::code-group

```vue [UserBadgeIcon.vue]
<template>
  <svg
    :fill="var(--icon-fill, #000)"
    :stroke="var(--icon-stroke, #fff)"
    :stroke-width="var(--icon-stroke-width, 2)"
  >
    <path d="..." />
  </svg>
</template>
```

:::

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.
