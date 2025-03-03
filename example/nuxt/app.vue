<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
const i18n = useI18n();
console.log('📟 - i18n → ', i18n);
</script>
