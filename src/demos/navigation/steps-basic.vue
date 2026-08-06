<script setup lang="ts">
import { ref } from "vue";
import { AppSteps, type StepItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeStep = ref(1);
const items: StepItem[] = [{ key: "create", title: "创建订单" }, { key: "pay", title: "支付确认" }, { key: "complete", title: "完成交付" }];
</script>

<template>
  <AppSteps v-model="activeStep" :items="items" clickable />
  <p class="result">当前步骤：{{ items[activeStep]?.title }}</p>
</template>

<style scoped>
.result { margin: 16px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
