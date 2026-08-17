<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const nodes: TreeOption[] = [
  { label: "研发部", value: "rd", children: [{ label: "前端组", value: "fe" }, { label: "后端组", value: "be" }] },
  { label: "市场部", value: "mk", children: [{ label: "品牌组", value: "brand" }] },
];
const expanded = ref<string[]>(["rd"]);
</script>

<template>
  <div>
    <AppTree v-model:expanded-keys="expanded" :nodes="nodes" />
    <p class="hint">展开：{{ expanded.join("、") }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
