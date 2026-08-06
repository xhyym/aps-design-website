<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const coursePrice = ref(199);

function formatCurrency(value: number): string {
  return `¥ ${value.toFixed(2)}`;
}

function parseCurrency(value: string): number {
  return Number(value.replace(/[^\d.]/g, ""));
}
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="coursePrice"
      :min="0"
      :step="10"
      :precision="2"
      controls-position="right"
      :formatter="formatCurrency"
      :parser="parseCurrency"
      aria-label="课程售价"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
