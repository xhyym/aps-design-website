<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeViewId = ref("default");
const views = ref<TableView[]>([{ id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 }]);

function createView(name: string): void {
  const timestamp = Date.now();
  const id = `view-${timestamp}`;
  views.value.push({ id, name, kind: "custom", createdAt: timestamp, updatedAt: timestamp });
  activeViewId.value = id;
}

function renameView(viewId: string, name: string): void {
  const target = views.value.find((view) => view.id === viewId);
  if (target) target.name = name;
}

function removeView(viewId: string): void {
  views.value = views.value.filter((view) => view.id !== viewId);
  if (activeViewId.value === viewId) activeViewId.value = "default";
}
</script>

<template><AppTableViewSelector v-model="activeViewId" :views="views" @create="createView" @rename="renameView" @remove="removeView" /></template>
