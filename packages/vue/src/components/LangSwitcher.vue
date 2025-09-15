<template>
  <div>
    <span>DE: {{ getFlagEmoji('de') }}</span>
    <span>EN: {{ getFlagEmoji('gb') }}</span>
  </div>
</template>

<script setup lang="ts">
import { getFlagEmoji } from 'i18next-compose';
</script>

<style scoped></style>
