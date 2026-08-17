<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const view = ref("default");
const views: TableView[] = [
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
  { id: "v1", name: "我的视图", kind: "custom", createdAt: Date.now(), updatedAt: Date.now() },
];
</script>

<template>
  <AppTableViewSelector v-model="view" :views="views" loading />
</template>
