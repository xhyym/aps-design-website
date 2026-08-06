<script setup lang="ts">
import { AppButton, AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerFooter bordered class="demo-footer">
    <span>草稿已保存</span>
    <AppButton size="small">提交</AppButton>
  </AppContainerFooter>
</template>

<style scoped>
.demo-footer { width: min(100%, 480px); justify-content: flex-end; }
.demo-footer span { margin-right: auto; color: var(--aps-muted); font-size: 13px; }
</style>
