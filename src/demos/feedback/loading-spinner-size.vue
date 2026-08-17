<script setup lang="ts">
import { AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppLoading :loading="true" :spinner-size="40" text="大尺寸加载图标" />
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; padding: 16px; position: relative; }
</style>
