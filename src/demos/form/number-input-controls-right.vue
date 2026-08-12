<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const pageSize = ref(20);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="pageSize"
      :min="1"
      controls-position="right"
      aria-label="每页条数"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
