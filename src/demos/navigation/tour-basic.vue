<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [{ key: "search", title: "从这里开始搜索", description: "快速查找订单、客户和页面。", target: "#tour-search", placement: "bottom" as const }, { key: "create", title: "新建业务", description: "在这里创建订单或客户。", target: "#tour-create", placement: "bottom" as const }];
</script>

<template>
  <div class="tour-actions"><AppButton id="tour-search" variant="secondary">搜索</AppButton><AppButton id="tour-create">新建订单</AppButton><AppButton variant="text" @click="visible = true">开始引导</AppButton></div>
  <AppTour v-model="visible" :steps="steps" />
</template>

<style scoped>
.tour-actions { display: flex; flex-wrap: wrap; gap: 8px; }
</style>
