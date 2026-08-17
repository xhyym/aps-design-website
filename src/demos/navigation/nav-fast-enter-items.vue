<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "new", title: "新建订单", icon: "plus" as const },
  { key: "import", title: "批量导入", icon: "download" as const },
  { key: "export", title: "导出报表", icon: "chart" as const },
];
</script>

<template>
  <div>
    <p class="hint">点击「快捷入口」触发器查看带图标的命令列表。</p>
    <AppButton @click="visible = true">打开快捷入口</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
