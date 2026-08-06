<script setup lang="ts">
import { AppTimeline, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "需求评审", timestamp: "06-02", state: "success" },
  { key: "2", title: "设计验收", timestamp: "06-08", state: "success" },
  { key: "3", title: "灰度发布", timestamp: "06-14", state: "processing" },
];
</script>

<template><AppTimeline :items="items" mode="alternate" timestamp-placement="top" /></template>
