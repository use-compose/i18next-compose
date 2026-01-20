---
title: Getting Started (React)
titleTemplate: i18next-compose-react
description: Install and use the React renderer with the RtTranslate component.
outline: [2, 3]
---

# React Integration

~![NPM Package Version](https://img.shields.io/npm/v/i18next-compose-react?color=519ea9)~
<span

React integration for i18next-compose and [components interpolation](/react/components-interpolation).

## Installation

::: code-group

```bash [npm]
npm install i18next-compose-vue
```

```bash [yarn]
yarn add i18next-compose-vue
```

```bash [pnpm]
pnpm add i18next-compose-vue
```

:::

## Usage

### `<I18nProvider>`

The `I18nProvider` is a **Vue wrapper component** that:

- Initializes an i18next instance with the given config.
- Exposes the i18n context via Vue’s `provide`/`inject`.
- Wraps your app (or part of it) in a `Suspense` boundary, ensuring translations are ready before render.

---

```vue
<script setup lang="ts">
import I18nProvider from '@/components/I18nProvider.vue';
import RtTranslate from 'i18next-compose-vue';

const components = { LangSwitcher };
</script>

<template>
  <I18nProvider>
    <div>
      <RtTranslate i18n-key="home.welcome" :components="components" />
    </div>
  </I18nProvider>
</template>
```

#### Provided Context

Internally, the component:

- Calls `useI18nContext()` from `@/composables/context`.
- Runs `initContext(config)`.
- Provides the i18n context under the `i18nKey` symbol.

This makes reactive translation helpers available to child components.

#### Render Behavior

The provider wraps children in a `<Suspense>` block:

```vue
<Suspense>
  <div class="i18n-provider">
    <slot />
  </div>
</Suspense>
```
