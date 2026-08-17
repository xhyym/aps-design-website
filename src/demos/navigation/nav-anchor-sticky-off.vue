<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "m", label: "模块一", targetId: "d-m" },
  { key: "n", label: "模块二", targetId: "d-n" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :sticky="false" />
    <div class="content">
      <section id="d-m"><h4>模块一</h4><p v-for="i in 4" :key="i">内容 {{ i }}。</p></section>
      <section id="d-n"><h4>模块二</h4><p v-for="i in 4" :key="i">内容 {{ i }}。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
