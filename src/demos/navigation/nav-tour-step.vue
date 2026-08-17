<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const step = ref(0);
const steps = [
  { key: "c1", title: "章节一", description: "受控步骤索引" },
  { key: "c2", title: "章节二", description: "可回退与前进" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" :step-index="step" @update:step-index="(i: number) => (step = i)" />
  </div>
</template>
