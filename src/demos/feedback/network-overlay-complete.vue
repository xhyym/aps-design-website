<script setup lang="ts">
import { AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <p>请求完成后的正常内容，无遮罩。</p>
    <AppNetworkLoadingOverlay :loading="false" />
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; padding: 16px; position: relative; }
</style>
