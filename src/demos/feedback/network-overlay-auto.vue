<script setup lang="ts">
import { AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <p>首次进入页面时展示网络加载层。</p>
    <AppNetworkLoadingOverlay :loading="true" />
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; padding: 16px; position: relative; }
</style>
