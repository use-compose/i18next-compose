<template>
  <slot />
</template>

<script lang="ts" setup>
import { changeLanguage, i18nFormatter } from 'i18next-compose';
import type { i18nFormatterHelper } from 'i18next-compose';
import { i18nKey } from '~/config/i18n';

const { $i18nApp } = useNuxtApp();

let i18nFormatterValue = i18nFormatter($i18nApp);

async function changeLocale(lng: string) {
  await changeLanguage($i18nApp, lng);
}

const { translationHelper, globalNSHelper } = i18nFormatterValue;

provide(i18nKey, { i18nApp: $i18nApp, translationHelper, globalNSHelper, changeLocale });

onMounted(() => {
  console.log('mounted');
});

const toggle = () => {
  console.log('🖇️ ~ toggle ~ $i18nApp → ', $i18nApp);

  console.log('toggle');
};
</script>
