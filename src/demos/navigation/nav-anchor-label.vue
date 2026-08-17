<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "r", label: "第一节", targetId: "g-r" },
  { key: "s", label: "第二节", targetId: "g-s" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" aria-label="文档目录" />
    <div class="content">
      <section id="g-r"><h4>第一节</h4><p>内容。</p></section>
      <section id="g-s"><h4>第二节</h4><p>内容。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
