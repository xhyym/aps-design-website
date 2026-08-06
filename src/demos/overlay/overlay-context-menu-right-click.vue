<script setup lang="ts">
import { ref } from "vue";
import { AppContextMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "rename", label: "重命名文件夹", icon: "edit" as const },
  { key: "move", label: "移动到", icon: "arrow-right" as const },
];
</script>

<template>
  <AppContextMenu v-model="visible" :items="items" menu-label="文件夹操作" trigger-mode="contextmenu" @select="visible = false">
    <template #trigger>
      <button type="button">在这里右键打开菜单</button>
    </template>
  </AppContextMenu>
</template>
