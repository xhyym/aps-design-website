<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 2000 }, (_, i) => "记录 " + (i + 1));
</script>

<template>
  <AppVirtualList :items="items" :item-height="40" :height="280" :overscan="8">
    <template #default="{ item }">
      <div class="line">{{ item }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 40px; line-height: 40px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
