<template>
  <div>
    <span
      >DE: <span @click="lang('de')">{{ getFlagEmoji('de') }}</span></span
    >
    <span
      >EN: <span @click="lang('gb')">{{ getFlagEmoji('gb') }}</span></span
    >
    <p v-if="props.label">{{ props.label }}</p>
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
const { lang } = useI18n('home');
</script>

<style scoped></style>
