<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const lessonCount = ref(12);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="lessonCount"
      :min="1"
      :max="60"
      :step="1"
      aria-label="课程课时数"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
