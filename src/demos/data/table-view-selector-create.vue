<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const view = ref("default");
const views = ref<TableView[]>([
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
]);
const onCreate = (name: string) => {
  views.value.push({ id: "v" + views.value.length, name, kind: "custom", createdAt: Date.now(), updatedAt: Date.now() });
  view.value = "v" + (views.value.length - 1);
};
</script>

<template>
  <AppTableViewSelector v-model="view" :views="views" @create="onCreate" />
</template>
