<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "edit", label: "编辑", icon: "edit" as const },
  { key: "copy", label: "复制", icon: "copy" as const },
  { key: "del", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="行操作">
    <template #trigger="{ toggle }">
      <AppButton size="small" @click="toggle">更多操作</AppButton>
    </template>
  </AppMenuRight>
</template>
