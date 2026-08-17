<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref(0);
const items = [
  { key: "1", title: "第一步" },
  { key: "2", title: "第二步" },
  { key: "3", title: "第三步" },
];
</script>

<template>
  <div>
    <AppSteps :items="items" :model-value="current" @update:model-value="(i: number) => (current = i)" />
    <AppButton size="small" class="mt" @click="current = (current + 1) % items.length">下一步</AppButton>
  </div>
</template>

<style scoped>
.mt { margin-top: 12px; }
</style>
