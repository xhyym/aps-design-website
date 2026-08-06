<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const confirming = ref(false);

function submit(): void {
  confirming.value = true;
  window.setTimeout(() => {
    confirming.value = false;
    visible.value = false;
  }, 800);
}
</script>

<template>
  <AppPopconfirm v-model="visible" title="发布新版本？" description="版本发布后会立即出现在下载页。" :is-confirming="confirming" @confirm="submit">
    <template #trigger="{ toggle }"><AppButton @click="toggle">发布版本</AppButton></template>
  </AppPopconfirm>
</template>
