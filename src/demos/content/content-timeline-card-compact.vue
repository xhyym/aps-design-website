<script setup lang="ts">
import { AppTimelineCard, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "已同步 CRM", timestamp: "08:30", state: "success" },
  { key: "2", title: "待同步分析数据", timestamp: "等待执行", state: "warning" },
];
</script>

<template><AppTimelineCard title="同步记录" :items="items" /></template>
