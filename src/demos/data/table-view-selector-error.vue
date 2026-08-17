<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const view = ref("default");
const views: TableView[] = [
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
];
const error = ref("视图名称已存在");
</script>

<template>
  <AppTableViewSelector v-model="view" :views="views" :error="error" />
</template>
