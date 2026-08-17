<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Item { id: number; name: string; }
const items: Item[] = Array.from({ length: 800 }, (_, i) => ({ id: i + 1, name: "条目 " + (i + 1) }));
const itemKey = (item: Item) => item.id;
</script>

<template>
  <AppVirtualList :items="items" :item-height="32" :height="200" :item-key="itemKey">
    <template #default="{ item }">
      <div class="line">{{ item.name }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 32px; line-height: 32px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
