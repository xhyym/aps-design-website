<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("all");
const viewOptions = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "active" },
  { label: "已归档", value: "archived" },
];
</script>

<template>
  <AppSegmented v-model="activeView" :options="viewOptions" aria-label="课程状态筛选" />
</template>
