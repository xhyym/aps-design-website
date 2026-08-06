<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "publish", title: "发布课程", description: "当前课程尚未完成审核", icon: "arrow-right" as const, disabled: true },
  { key: "draft", title: "保存草稿", description: "保留当前编辑内容", icon: "panel" as const },
];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">查看可用操作</AppButton>
  <AppCommandPalette v-model="visible" :items="items" placeholder="搜索课程操作" @select="visible = false" />
</template>
