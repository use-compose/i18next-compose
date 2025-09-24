<template>
  <header>
    <LangSwitcher />

    <div class="wrapper">
      <h1>Hello World</h1>
    </div>
  </header>
  <BrutalistCheckbox v-model="check" label="This is a Brutalist Checkbox" />
  <main><DisplayTranslations /> <ColoredLabel color="#f00" label="Red Label" /></main>
</template>

<script setup lang="ts">
import BrutalistCheckbox from '@/components/BrutalistCheckbox.vue';
import ColoredLabel from '@/components/ColoredLabel.vue';
import DisplayTranslations from '@/components/DisplayTranslations.vue';
import LangSwitcher from '@/components/LangSwitcher.vue';
import { useI18n } from '@/composables';
import { ref } from 'vue';

const { cT } = useI18n('home');
console.log('📟 - cT → ', cT);
const check = ref(false);
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
