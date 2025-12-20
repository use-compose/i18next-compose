## docs/vue/api.md

---

title: Vue API
titleTemplate: i18next-compose-vue
description: Props and behavior of the RtTranslate component.
outline: [2,3]

---

# Vue API

## `<RtTranslate>`

| Prop              | Type                       | Description                                  |
| ----------------- | -------------------------- | -------------------------------------------- |
| `rt-translate`    | `(key, values?) => string` | i18n translate function                      |
| `i18n-key`        | `string`                   | Translation key                              |
| `values`          | `Record<string, any>`      | Interpolation values                         |
| `components`      | `Record<string, any>`      | Component map (e.g., `{ NuxtLink }`)         |
| `component-props` | `Record<string, any>`      | Props per tag name                           |
| `as`              | `string`                   | Wrapper tag (Vue 2 friendly, default `span`) |

## I18nProvider

## Props

| Prop            | Type                     | Default                | Description                                |
| --------------- | ------------------------ | ---------------------- | ------------------------------------------ |
| `i18nextConfig` | `Createi18nConfigParams` | `i18nextConfigDefault` | Custom configuration for the i18n instance |
