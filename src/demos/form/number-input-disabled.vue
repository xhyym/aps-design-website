<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(42);
const frozen = ref(7);
</script>

<template>
  <div class="number-demo-stack">
    <AppNumberInput v-model="locked" disabled aria-label="禁用数值" />
    <AppNumberInput v-model="frozen" readonly aria-label="只读数值" />
  </div>
</template>

<style scoped>
.number-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 240px);
}
</style>
