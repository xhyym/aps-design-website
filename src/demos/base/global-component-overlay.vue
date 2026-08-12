<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-overlay">
    <AppGlobalComponent>
      <section class="overlay-cell">浮层挂载区 A</section>
      <section class="overlay-cell">浮层挂载区 B</section>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-overlay {
  display: flex;
  gap: 10px;
}
.overlay-cell {
  padding: 12px 16px;
  border: 1px solid var(--aps-border);
  border-radius: 8px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
