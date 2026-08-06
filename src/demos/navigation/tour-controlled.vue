<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const stepIndex = ref(0);
const steps = [{ key: "panel", title: "查看筛选条件", description: "先缩小数据范围。", target: "#tour-filter", placement: "right" as const }, { key: "missing", title: "动态目标", description: "目标不存在时会自动显示居中提示。", target: "#not-mounted-yet" }];
</script>

<template>
  <AppButton id="tour-filter" variant="secondary">筛选条件</AppButton>
  <AppButton variant="text" @click="visible = true">启动受控引导</AppButton>
  <AppTour v-model="visible" v-model:step-index="stepIndex" :steps="steps" :mask-closable="true" @finish="stepIndex = 0" />
</template>
