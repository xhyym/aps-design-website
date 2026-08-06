<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "guide", label: "接入指南", children: [{ key: "install", label: "安装依赖" }, { key: "import", label: "按需引入" }] },
  { key: "disabled", label: "暂未开放", disabled: true },
];
</script>

<template>
  <div class="anchor-demo">
    <AppAnchor :items="items" :sticky="false" />
    <div class="sections">
      <section id="guide"><h4>接入指南</h4><p>用于理解整体接入顺序。</p></section>
      <section id="install"><h4>安装依赖</h4><p>先安装组件库与对应样式。</p></section>
      <section id="import"><h4>按需引入</h4><p>在页面内按业务需要引入组件。</p></section>
    </div>
  </div>
</template>

<style scoped>
.anchor-demo { display: grid; grid-template-columns: 132px minmax(0, 1fr); gap: 20px; }.sections { display: grid; gap: 28px; }.sections section { min-height: 90px; padding: 14px; border-radius: 12px; background: var(--aps-surface-soft); }.sections h4, .sections p { margin: 0; }.sections p { margin-top: 8px; color: var(--aps-muted); }
</style>
