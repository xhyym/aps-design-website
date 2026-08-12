<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref(1);
const medium = ref(1);
const large = ref(1);
</script>

<template>
  <div class="number-demo-stack">
    <AppNumberInput v-model="small" size="small" :min="0" aria-label="小尺寸数量" />
    <AppNumberInput v-model="medium" :min="0" aria-label="默认尺寸数量" />
    <AppNumberInput v-model="large" size="large" :min="0" aria-label="大尺寸数量" />
  </div>
</template>

<style scoped>
.number-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 240px);
}
</style>
