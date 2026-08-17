<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "保存成功", tone: "success", closable: false, repeatCount: 1 },
];
</script>

<template>
  <AppToast :items="items" />
</template>
