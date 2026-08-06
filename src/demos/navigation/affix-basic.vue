<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="page-flow">
    <p>向下滚动文档区域，操作条会在距离顶部 12px 时保持可见。</p>
    <AppAffix :offset="12">
      <div class="action-bar"><strong>订单操作</strong><AppButton size="small">新建订单</AppButton></div>
    </AppAffix>
    <p v-for="index in 10" :key="index">订单列表的第 {{ index }} 段辅助说明。</p>
  </div>
</template>

<style scoped>
.page-flow { color: var(--aps-muted); line-height: 1.7; }
.action-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
