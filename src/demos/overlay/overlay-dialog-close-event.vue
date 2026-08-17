<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
</script>

<template>
  <div>
    <AppButton @click="open = true">打开对话框</AppButton>
    <AppDialog v-model="open" title="提示" @close="log = '已触发关闭事件'">
      <p>通过右上角、遮罩或 Esc 关闭都会触发 close 事件。</p>
    </AppDialog>
    <p class="hint">{{ log || "对话框尚未关闭" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
