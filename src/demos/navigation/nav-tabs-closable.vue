<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref([
  { key: "a", label: "文档", closable: true },
  { key: "b", label: "表格", closable: true },
  { key: "c", label: "图表", closable: true },
]);
</script>

<template>
  <AppTabs :items="items" model-value="a" @close="(key: string) => (items = items.filter((t) => t.key !== key))" />
</template>
