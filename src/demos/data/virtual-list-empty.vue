<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: string[] = [];
</script>

<template>
  <AppVirtualList :items="items" :item-height="36" :height="200" empty-text="暂无数据" />
</template>
