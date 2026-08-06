<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function requestReport(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 800);
}
</script>

<template>
  <AppButton @click="requestReport">请求经营报表</AppButton>
  <AppNetworkLoadingOverlay :loading="loading" />
</template>
