<script setup lang="ts">
import { AppTimeline, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "created", title: "订单已创建", timestamp: "09:20", state: "success" },
  { key: "review", title: "财务审核中", description: "预计 30 分钟内完成。", timestamp: "09:32", state: "processing" },
  { key: "delivery", title: "等待发货", timestamp: "—" },
];
</script>

<template><AppTimeline :items="items" current-key="review" pending /></template>
