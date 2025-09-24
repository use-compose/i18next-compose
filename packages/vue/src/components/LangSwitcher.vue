<template>
  <div>
    <span
      >DE: <span @click="lang('de')">{{ getFlagEmoji('de') }}</span></span
    >
    <span
      >EN: <span @click="lang('gb')">{{ getFlagEmoji('gb') }}</span></span
    >
    <p v-if="props.label">{{ props.label }}</p>
    <p>Current Language: {{ language }}</p>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';
import { getFlagEmoji } from 'i18next-compose';

const props = defineProps<{
  label?: string;
}>();
const { lang, language } = useI18n('home');

async function changeLng(lng: string) {
  console.log('📟 - lng → ', lng);
  console.log("useI18n('home')", useI18n('home'));
  if (!lang) {
    return;
  }
  await lang(lng);
}
</script>

<style scoped></style>
