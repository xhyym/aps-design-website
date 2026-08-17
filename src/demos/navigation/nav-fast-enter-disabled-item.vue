<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "ok", title: "可用操作", icon: "check" as const },
  { key: "no", title: "维护中（禁用）", icon: "warning" as const, disabled: true },
];
</script>

<template>
  <div>
    <p class="hint">被禁用的命令不可点击。</p>
    <AppButton @click="visible = true">打开</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
