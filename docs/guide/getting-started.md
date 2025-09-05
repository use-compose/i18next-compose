---
outline: [2, 3]
order: 1
---

# Getting Started

## Overview

One of the biggest challenge in Engineering is to ensure that everyone is on the same page.
This can relate to the codebase, the documentation, etc. It's often related as to be on the same **boat**.

And cometimes it goes beyond Engineering, and is to share cross-team knowledge and doing processes that involve multiple teams.
Translations are a good example of this. They involve:

- **Developers**: to implement the translation process
- **Translators**: to translate the content
- **Product Owners**: to validate the translations
- **Designers**: to ensure that the translations are correctly displayed
- **Content Writers**: to write the content
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
