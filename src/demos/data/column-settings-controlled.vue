<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ name: true, region: true, owner: true });
const options = [
  { key: "name", label: "名称" },
  { key: "region", label: "区域" },
  { key: "owner", label: "负责人" },
];
</script>

<template>
  <div>
    <AppColumnSettings v-model="visible" :options="options" />
    <p class="hint">
      可见列：
      <template v-for="(v, k) in visible" :key="k"><AppTag v-if="v" size="small">{{ k }}</AppTag></template>
    </p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 10px; display: flex; gap: 6px; }
</style>
