<script setup lang="ts">
import { AppButton, AppSpace } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSpace direction="vertical" size="large" align="start">
    <span>将相关操作纵向排列</span>
    <AppSpace size="small"><AppButton size="small">保存</AppButton><AppButton size="small" variant="secondary">取消</AppButton></AppSpace>
  </AppSpace>
</template>
