<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", targetId: "sec-a" },
  { key: "b", label: "配置", targetId: "sec-b" },
  { key: "c", label: "高级", targetId: "sec-c" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :offset="80" />
    <div class="content">
      <section id="sec-a"><h4>概览</h4><p v-for="i in 4" :key="i">概览内容 {{ i }}。</p></section>
      <section id="sec-b"><h4>配置</h4><p v-for="i in 4" :key="i">配置内容 {{ i }}。</p></section>
      <section id="sec-c"><h4>高级</h4><p v-for="i in 4" :key="i">高级内容 {{ i }}。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
.content section { scroll-margin-top: 80px; margin-bottom: 24px; }
</style>
