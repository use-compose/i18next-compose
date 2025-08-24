<template>
  <div>
    <div>
      <p>FR: {{ getFlagEmoji('fr') }}</p>
      <p>DE: {{ getFlagEmoji('de') }}</p>
      <p>{{ cT('welcome') }}</p>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
// TODO: Causes issues in lint - fix this with proper ESLint / Prettier config
import { useI18nLocal } from './composables/use-i18n';
import { getFlagEmoji } from 'i18next-compose';
import type { ComposeContext } from 'i18next-compose';
const { i18n, cT } = useI18nLocal('home');
// if (import.meta.client) {
// eslint-disable-next-line no-console
// console.log('📟 - SSR - skipping i18n setup');
// const nuxtApp = useNuxtApp();
// const i18nContext = nuxtApp.$i18nContext as ComposeContext;
// console.log('📟 - i18nContext → ', i18nContext);
// const { useI18n } = i18nContext;
// console.log('📟 - useI18n → ', useI18n);
// const cT = useI18n('home').cT;
// console.log('📟 - useI18n → ', useI18n.useI18n('home'));
// const { cT } = useI18n.useI18n('home');
// eslint-disable-next-line no-console
// console.log('📟 - i18n → ', useI18n);
// }

// const { useI18n } = use18n;
// console.log('📟 - useI18n → ', useI18n);
</script>
