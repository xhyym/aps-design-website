<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="bottom-preview">
    <p v-for="index in 8" :key="index">填写信息 {{ index }}：底部操作区始终留在可触达的位置。</p>
    <AppAffix position="bottom" :offset="8">
      <div class="submit-bar"><span>已保存草稿</span><AppButton size="small">提交审批</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.bottom-preview { height: 220px; overflow: auto; padding: 0 12px; border: 1px solid var(--aps-line-soft); border-radius: 12px; color: var(--aps-muted); line-height: 1.8; }
.submit-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
