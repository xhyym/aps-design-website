<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">多层浮层叠加时，用 zIndex 控制固钉的覆盖关系。</p>
    <AppAffix :offset="12" :z-index="100">
      <div class="bar"><strong>高优先级操作</strong><AppButton size="small">提交</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
