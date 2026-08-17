<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "top", label: "置顶", icon: "arrow-up" as const },
  { key: "move", label: "移动", icon: "drag" as const },
  { key: "sep", label: "删除", icon: "trash" as const, divided: true, danger: true },
];
</script>

<template>
  <AppButton @click="visible = true">打开菜单</AppButton>
  <AppMenuRight v-model="visible" :items="items" label="列表操作" />
</template>
