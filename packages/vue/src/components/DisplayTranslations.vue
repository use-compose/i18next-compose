<template>
  <div>DisplayTranslations - {{ cT('welcome') }}</div>
  <div>DisplayTranslations - {{ JSON.stringify(cT('componentInterpolationExample')) }}</div>
  <div>DisplayTranslations - {{ cT('interpolationExample') }}</div>
  <!-- <div>Current Language: {{ language }}</div> -->
  <div>
    <Translate
      :c-translate="cT"
      i18n-key="componentInterpolationExample"
      :components="{
        ColoredLabel: { color: labelColor, label: 'Blue Label' },
        'ColoredLabel-1': { color: labelColor, label: 'Red Label' },
      }"
    />
    <hr />
    <!-- <Translate2
      :c-translate="cT"
      i18n-key="componentInterpolationExample"
      :components="{
        ColoredLabel: { color: labelColor, label: 'Blue Label' },
        'ColoredLabel-1': { color: labelColor, label: 'Red wcxscxLabel' },
      }"
    /> -->
    <input type="color" v-model="labelColor" />
  </div>
</template>

<script setup lang="ts">
import Translate from '@/components/translate/Translate';
import { useI18n } from '@/composables/context';
import { ref } from 'vue';

const { cT } = useI18n('home');
const labelColor = ref('#f00');
</script>
