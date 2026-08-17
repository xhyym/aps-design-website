<script setup lang="ts">
import { AppTimeline, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "m1", title: "发布成功", description: "v0.3.1 已生效", timestamp: "10:30", tone: "green" as const },
  { key: "m2", title: "收到反馈", description: "共 12 条", timestamp: "11:00", tone: "blue" as const },
];
</script>

<template>
  <AppTimeline :items="items">
    <template #marker="{ item }">
      <AppTag size="small" :tone="item.tone">{{ item.key === "m1" ? "✓" : "i" }}</AppTag>
    </template>
  </AppTimeline>
</template>
