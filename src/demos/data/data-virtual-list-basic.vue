<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 600 }, (_, index) => `第 ${index + 1} 条系统消息`);
</script>

<template><AppVirtualList :items="items" :item-height="40" :height="240" /></template>
