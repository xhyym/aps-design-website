<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeViewId = ref("default");
const views = ref<TableView[]>([
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
  { id: "finance", name: "财务核对", kind: "custom", createdAt: 1, updatedAt: 1 },
]);
</script>

<template><AppTableViewSelector v-model="activeViewId" :views="views" /></template>
