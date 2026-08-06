<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("overview");
const items = [
  { key: "overview", label: "项目概览" },
  { key: "schedule", label: "交付计划" },
  { key: "members", label: "成员分工" },
];
</script>

<template>
  <div class="anchor-demo">
    <AppAnchor v-model="activeKey" :items="items" :offset="8" />
    <div class="sections">
      <section v-for="item in items" :id="item.key" :key="item.key"><h4>{{ item.label }}</h4><p>这是{{ item.label }}的说明内容。点击左侧锚点会平滑定位到本节。</p></section>
    </div>
  </div>
</template>

<style scoped>
.anchor-demo { display: grid; grid-template-columns: 132px minmax(0, 1fr); gap: 20px; }
.sections { display: grid; gap: 40px; }
.sections section { min-height: 120px; padding: 14px; border-radius: 12px; background: var(--aps-surface-soft); }
.sections h4, .sections p { margin: 0; }.sections p { margin-top: 8px; color: var(--aps-muted); line-height: 1.7; }
</style>
