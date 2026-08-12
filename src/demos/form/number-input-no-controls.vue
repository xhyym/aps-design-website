<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const weight = ref(50);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput v-model="weight" :min="0" :max="100" :controls="false" aria-label="排序权重" />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
