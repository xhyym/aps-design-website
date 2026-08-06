<script setup lang="ts">
import { ref } from "vue";
import { AppContextMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "edit", label: "编辑课程", icon: "edit" as const },
  { key: "copy", label: "复制链接" },
  { key: "delete", label: "删除课程", icon: "trash" as const, danger: true, divided: true },
];
</script>

<template>
  <AppContextMenu v-model="visible" :items="items" menu-label="课程操作" @select="visible = false">
    <template #trigger="{ toggle }">
      <button type="button" @click="toggle">打开课程菜单</button>
    </template>
  </AppContextMenu>
</template>
