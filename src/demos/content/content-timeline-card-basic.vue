<script setup lang="ts">
import { AppButton, AppTimelineCard, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "提交工单", timestamp: "今天 09:10", state: "success" },
  { key: "2", title: "工程师处理中", timestamp: "今天 09:24", state: "processing" },
];
</script>

<template>
  <AppTimelineCard title="服务进度" description="工单 #APS-2026-0826" :items="items">
    <template #actions><AppButton size="small" variant="text">查看详情</AppButton></template>
  </AppTimelineCard>
</template>
