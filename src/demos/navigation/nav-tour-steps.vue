<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "s1", title: "创建订单", description: "从顶部入口新建订单", target: "#tour-create", padding: 8 },
  { key: "s2", title: "筛选列表", description: "使用左侧筛选快速定位", target: "#tour-filter", padding: 8 },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <div id="tour-create" class="box">创建订单区域</div>
    <div id="tour-filter" class="box">筛选区域</div>
    <AppTour v-model="visible" :steps="steps" />
  </div>
</template>

<style scoped>
.box { margin-top: 12px; padding: 16px; border: 1px solid var(--aps-line-soft); border-radius: 10px; color: var(--aps-muted); }
</style>
