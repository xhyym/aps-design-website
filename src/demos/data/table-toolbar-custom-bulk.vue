<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";

const count = ref(2);
</script>

<template>
  <AppTableToolbar :selected-count="count">
    <AppButton size="small">新建任务</AppButton>
    <template #bulk>
      <AppButton size="small" @click="count = 0">清除</AppButton>
      <AppButton size="small">标记完成</AppButton>
      <AppButton size="small" tone="danger">移除</AppButton>
    </template>
  </AppTableToolbar>
</template>
