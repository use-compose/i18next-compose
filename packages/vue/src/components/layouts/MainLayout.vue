<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';

const { lang } = useI18n('home');
// eslint-disable-next-line no-console
console.log('language in layout', lang);
</script>

<style scoped></style>
