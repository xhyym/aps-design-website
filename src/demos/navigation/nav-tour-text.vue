<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "t1", title: "第一步", description: "自定义按钮文案" },
  { key: "t2", title: "第二步", description: "最后一步显示完成" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" next-text="继续" previous-text="返回" finish-text="我知道了" skip-text="暂不引导" />
  </div>
</template>
