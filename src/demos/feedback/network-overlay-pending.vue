<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

/** 文档示例不能以常量 true 挂载全局蒙层，否则会阻断用户继续阅读其他组件。 */
function restoreSession(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 1200);
}
</script>

<template>
  <AppButton variant="secondary" @click="restoreSession">模拟网络恢复</AppButton>
  <AppNetworkLoadingOverlay :loading="loading" />
</template>
