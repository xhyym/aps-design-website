<script setup lang="ts">
import { AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "已上线", description: "灰度 10%", timestamp: "08-16 10:00", tone: "green" as const },
  { key: "2", title: "正在验证", description: "等待监控数据", timestamp: "08-16 11:20", tone: "orange" as const },
  { key: "3", title: "计划回滚", description: "异常率上升", timestamp: "08-16 12:40", tone: "red" as const },
];
</script>

<template>
  <AppTimelineCard title="发布状态" :items="items" />
</template>
