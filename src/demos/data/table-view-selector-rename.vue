<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const view = ref("default");
const views = ref<TableView[]>([
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
  { id: "mine", name: "我的筛选", kind: "custom", createdAt: Date.now(), updatedAt: Date.now() },
]);
const onRename = (id: string, name: string) => {
  const t = views.value.find((x) => x.id === id);
  if (t) t.name = name;
};
const onRemove = (id: string) => {
  views.value = views.value.filter((x) => x.id !== id);
  if (view.value === id) view.value = "default";
};
</script>

<template>
  <AppTableViewSelector v-model="view" :views="views" @rename="onRename" @remove="onRemove" />
</template>
