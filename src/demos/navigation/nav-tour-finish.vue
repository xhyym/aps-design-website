<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const done = ref(false);
const steps = [
  { key: "f1", title: "引导完成", description: "完成后触发回调" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" @finish="() => (done = true)" />
    <p class="hint">已完成：{{ done ? "是" : "否" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
