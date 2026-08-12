<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-layout">
    <AppGlobalComponent>
      <article class="layout-cell">内容卡片一</article>
      <article class="layout-cell">内容卡片二</article>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-width: 360px;
}
.layout-cell {
  padding: 14px;
  border: 1px solid var(--aps-border);
  border-radius: 10px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
