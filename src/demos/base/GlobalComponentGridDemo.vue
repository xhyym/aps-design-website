<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-grid">
    <AppGlobalComponent>
      <section class="global-component-cell">数据概览</section>
      <section class="global-component-cell">快捷操作</section>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-width: 360px;
}

.global-component-cell {
  padding: 14px;
  border: 1px solid var(--aps-border);
  border-radius: 10px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
