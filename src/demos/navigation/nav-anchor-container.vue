<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
const items = [
  { key: "x", label: "基础", targetId: "p-x" },
  { key: "y", label: "进阶", targetId: "p-y" },
];
</script>

<template>
  <div ref="box" class="scroll-box">
    <div class="inner">
      <AppAnchor :items="items" :scroll-container="box" />
      <div class="content">
        <section id="p-x"><h4>基础</h4><p v-for="i in 6" :key="i">基础段落 {{ i }}。</p></section>
        <section id="p-y"><h4>进阶</h4><p v-for="i in 6" :key="i">进阶段落 {{ i }}。</p></section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-box { height: 260px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; }
.inner { display: flex; gap: 20px; }
.content { flex: 1; color: var(--aps-muted); }
.content section { scroll-margin-top: 12px; margin-bottom: 20px; }
</style>
