<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "import", title: "批量导入", description: "从 Excel 导入数据", icon: "download" as const },
  { key: "export", title: "批量导出", description: "导出当前筛选结果", icon: "chart" as const },
  { key: "users", title: "邀请成员", description: "发送邀请链接", icon: "users" as const },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">更多操作</AppButton>
    <AppCommandPalette v-model="open" :items="items" />
  </div>
</template>
