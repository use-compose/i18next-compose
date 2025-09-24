<template>
  <div>DisplayTranslations - {{ cT('welcome') }}</div>
  <!-- <div>Current Language: {{ language }}</div> -->
  <div>
    <Translate
      :c-translate="cT"
      i18n-key="componentInterpolationExample"
      :components="{ ColoredLabel: { color: labelColor, label: 'Blue Label' } }"
    />
    <input type="color" v-model="labelColor" />
  </div>
</template>

<script setup lang="ts">
import Translate from '@/components/translate/Translate.vue';
import { useI18n } from '@/composables/context';
import { ref } from 'vue';

const { cT, language } = useI18n('home');
const labelColor = ref('#f00');
</script>

<style scoped></style>
