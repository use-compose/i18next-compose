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

<script setup>
// TODO: Causes issues in lint - fix this with proper ESLint / Prettier config
import { useI18n } from './composables/use-i18n';
import { getFlagEmoji } from 'core';
const { i18n, cT } = useI18n('home');
// eslint-disable-next-line no-console
console.log('📟 - i18n → ', i18n);
</script>
