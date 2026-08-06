<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [{ key: "overview", title: "查看经营概览", icon: "chart" as const }, { key: "export", title: "导出本月报表", description: "暂无导出权限", icon: "download" as const, disabled: true }];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开命令菜单</AppButton>
  <AppFastEnter v-model="visible" :items="items" @select="visible = false" />
</template>
