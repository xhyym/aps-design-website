<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);
const start = () => {
  loading.value = true;
  setTimeout(() => { loading.value = false; }, 2000);
};
</script>

<template>
  <div>
    <AppButton @click="start">模拟网络请求</AppButton>
    <div class="box">
      <p>页面内容区</p>
      <AppNetworkLoadingOverlay :loading="loading" />
    </div>
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; margin-top: 10px; padding: 16px; position: relative; }
</style>
