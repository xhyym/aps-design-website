<script setup lang="ts">
import { AppButton, AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", title: "发布 v0.2", timestamp: "08-12" },
  { key: "b", title: "发布 v0.3", timestamp: "08-15" },
];
</script>

<template>
  <AppTimelineCard title="版本记录" :items="items">
    <template #actions>
      <AppButton size="small" variant="text">查看全部</AppButton>
    </template>
  </AppTimelineCard>
</template>
