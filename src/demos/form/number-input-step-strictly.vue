<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const quantity = ref(0);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="quantity"
      :min="0"
      :step="5"
      step-strictly
      aria-label="步进数量"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
