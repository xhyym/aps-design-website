<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref("o1");
const items = [
  { key: "o1", label: "概览", targetId: "e-o1" },
  { key: "o2", label: "详情", targetId: "e-o2" },
  { key: "o3", label: "日志", targetId: "e-o3" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :offset="12" :model-value="current" @update:model-value="(k: string) => (current = k)" />
    <div class="content">
      <section id="e-o1"><h4>概览</h4><p v-for="i in 3" :key="i">概览 {{ i }}。</p></section>
      <section id="e-o2"><h4>详情</h4><p v-for="i in 3" :key="i">详情 {{ i }}。</p></section>
      <section id="e-o3"><h4>日志</h4><p v-for="i in 3" :key="i">日志 {{ i }}。</p></section>
      <p>当前目录项：{{ current }}</p>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
