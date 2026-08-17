<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const nodes: TreeOption[] = [
  { label: "华东", value: "east", children: [{ label: "上海", value: "sh" }, { label: "杭州", value: "hz" }] },
  { label: "华南", value: "south", children: [{ label: "深圳", value: "sz" }] },
];
const selected = ref<string[]>([]);
</script>

<template>
  <div>
    <AppTree v-model:selected-keys="selected" :nodes="nodes" selectable default-expand-all />
    <p class="hint">已选：{{ selected.join("、") || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
