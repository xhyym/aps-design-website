<script setup lang="ts">
import { ref } from "vue";
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const stuck = ref(false);
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">滚动后状态会从「释放」切换为「已固定」。</p>
    <AppAffix :offset="12" @stuck-change="(s: boolean) => (stuck = s)">
      <div class="bar"><span>状态：{{ stuck ? "已固定" : "已释放" }}</span><AppButton size="small">保存</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
