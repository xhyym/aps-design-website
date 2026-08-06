<script setup lang="ts">
import { AppButton, AppSpace } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSpace fill wrap size="12px" class="demo-space">
    <AppButton variant="secondary">暂存</AppButton>
    <AppButton>提交审核</AppButton>
  </AppSpace>
</template>

<style scoped>
.demo-space { width: min(100%, 480px); }
</style>
