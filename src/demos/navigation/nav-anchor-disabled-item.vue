<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "p", label: "可用章节", targetId: "f-p" },
  { key: "q", label: "暂未开放", targetId: "f-q", disabled: true },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" />
    <div class="content">
      <section id="f-p"><h4>可用章节</h4><p>可点击跳转。</p></section>
      <section id="f-q"><h4>暂未开放</h4><p>目录项被禁用，无法跳转。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
