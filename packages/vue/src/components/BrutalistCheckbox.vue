<template>
  <div class="brutalist-checkbox">
    <input type="checkbox" :value="checked" @change="updateModelValue" class="checkbox-input" />
    <span class="checkbox-box"></span>
    <span class="checkbox-label"><slot /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'BrutalistCheckbox',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const checked = ref(props.modelValue ?? false);
    watch(
      () => props.modelValue,
      (newVal) => {
        checked.value = newVal ?? false;
      },
    );
    function updateModelValue(event: Event) {
      const target = event.target as HTMLInputElement;
      checked.value = target.checked;
    }
    watch(checked, (newVal) => {
      emit('update:modelValue', newVal);
    });

    return {
      checked,
      updateModelValue,
    };
  },
});
</script>

<style>
.brutalist-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  user-select: none;
}

.checkbox-input {
  display: none;
}

.checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid black;
  background: white;
  position: relative;
}

.checkbox-input:checked + .checkbox-box::after {
  content: 'X';
  font-weight: bold;
  color: black;
  position: absolute;
  top: -2px;
  left: 3px;
}

.checkbox-label {
  padding: 2px 4px;
  border: 2px solid black;
  background: #f5f5f5;
}
</style>
