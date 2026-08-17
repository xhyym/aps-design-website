<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 1000 }, (_, i) => "行 " + (i + 1));
</script>

<template>
  <AppVirtualList :items="items" :item-height="36" :height="300">
    <template #default="{ item }">
      <div class="line">{{ item }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 36px; line-height: 36px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
