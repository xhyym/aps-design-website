<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref<string[]>([]);
const items = [
  { key: "one", title: "第一项", content: "受控模式下由页面维护展开状态。" },
  { key: "two", title: "第二项", content: "可配合按钮统一展开或收起。" },
];
</script>

<template>
  <div>
    <div class="bar">
      <AppButton size="small" @click="open = ['one', 'two']">全部展开</AppButton>
      <AppButton size="small" @click="open = []">全部收起</AppButton>
    </div>
    <AppCollapse v-model="open" :items="items" />
  </div>
</template>

<style scoped>
.bar { display: flex; gap: 8px; margin-bottom: 12px; }
</style>
