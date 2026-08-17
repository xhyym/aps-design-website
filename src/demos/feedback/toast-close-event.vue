<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "更新下载完成", tone: "success", closable: true, repeatCount: 1, actionText: "立即安装" },
];
const onAction = (id: string) => {
  console.log("action on", id);
};
</script>

<template>
  <AppToast :items="items" @action="onAction" />
</template>
