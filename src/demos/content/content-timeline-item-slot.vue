<script setup lang="ts">
import { AppTimeline, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "d1", title: "订单 #1001", description: "待支付", timestamp: "09:40", tone: "orange" as const },
  { key: "d2", title: "订单 #1002", description: "已发货", timestamp: "10:02", tone: "green" as const },
];
</script>

<template>
  <AppTimeline :items="items">
    <template #item="{ item }">
      <div class="row">
        <strong>{{ item.title }}</strong>
        <AppTag size="small" :tone="item.tone">{{ item.description }}</AppTag>
      </div>
    </template>
  </AppTimeline>
</template>

<style scoped>
.row { display: flex; gap: 8px; align-items: center; }
</style>
