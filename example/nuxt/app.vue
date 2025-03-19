<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
// TODO: Causes issues in lint - fix this with proper ESLint / Prettier config
import { useI18n } from './composables/use-i18n';

const i18n = useI18n();
// eslint-disable-next-line no-console
console.log('📟 - i18n → ', i18n);
</script>
