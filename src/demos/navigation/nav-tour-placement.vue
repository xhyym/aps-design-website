<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "p1", title: "右侧提示", description: "引导框出现在目标右侧", target: "#tour-right" as const, placement: "right" as const },
  { key: "p2", title: "下方提示", description: "引导框出现在目标下方", target: "#tour-bottom" as const, placement: "bottom" as const },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <div id="tour-right" class="box">目标元素 A</div>
    <div id="tour-bottom" class="box">目标元素 B</div>
    <AppTour v-model="visible" :steps="steps" />
  </div>
</template>

<style scoped>
.box { margin-top: 12px; padding: 16px; border: 1px solid var(--aps-line-soft); border-radius: 10px; color: var(--aps-muted); }
</style>
