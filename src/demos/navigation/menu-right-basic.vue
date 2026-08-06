<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [{ key: "rename", label: "重命名", icon: "edit" as const }, { key: "copy", label: "复制链接" }, { key: "delete", label: "删除页面", icon: "trash" as const, danger: true, divided: true }];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="页面操作" @select="selected = $event">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">更多操作</AppButton></template>
  </AppMenuRight>
  <small v-if="selected">已选择：{{ selected }}</small>
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
