<script setup lang="ts">
import { AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "t1", title: "创建项目", description: "初始化仓库与配置", timestamp: "08-10 09:00" },
  { key: "t2", title: "提交代码", description: "完成首版功能", timestamp: "08-11 14:30" },
];
</script>

<template>
  <AppTimelineCard title="项目进展" description="最近两周的关键节点" :items="items" />
</template>
