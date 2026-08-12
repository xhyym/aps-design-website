<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const stock = ref(5);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="stock"
      :min="0"
      :value-on-clear="0"
      aria-label="库存数量"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
