<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer, type TransferOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options: TransferOption[] = [
  { key: "p1", label: "北京", description: "华北" },
  { key: "p2", label: "上海", description: "华东" },
  { key: "p3", label: "广州", description: "华南" },
  { key: "p4", label: "成都", description: "西南" },
];

function filterByRegion(keyword: string, option: TransferOption): boolean {
  return option.label.includes(keyword) || (option.description ?? "").includes(keyword);
}
</script>

<template><AppTransfer v-model="values" :options="options" filterable :filter-method="filterByRegion" :titles="['城市', '已选城市']" aria-label="城市筛选" /></template>
