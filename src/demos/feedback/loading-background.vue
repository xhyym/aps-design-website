<script setup lang="ts">
import { AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppLoading :loading="true" background="rgba(255, 255, 255, 0.92)" text="内容刷新中" />
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; padding: 16px; position: relative; }
</style>
