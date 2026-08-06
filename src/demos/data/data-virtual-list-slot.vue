<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 200 }, (_, index) => ({ id: index + 1, name: `成员 ${index + 1}`, role: index % 2 ? "编辑者" : "查看者" }));
</script>

<template><AppVirtualList :items="items" :item-height="48" :height="240" :item-key="(item) => item.id"><template #default="{ item }"><strong>{{ item.name }}</strong><span>{{ item.role }}</span></template></AppVirtualList></template>
