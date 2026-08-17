<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "即将超时，请尽快提交", tone: "warning", closable: true, repeatCount: 1 },
];
</script>

<template>
  <AppToast :items="items" />
</template>
