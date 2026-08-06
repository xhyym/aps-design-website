<script setup lang="ts">
import { AppButton, AppPageHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageHeader title="成员管理" description="邀请团队成员并配置其可访问的工作区。" class="demo-page-header">
    <template #actions><AppButton>邀请成员</AppButton></template>
  </AppPageHeader>
</template>

<style scoped>
.demo-page-header { width: min(100%, 560px); }
</style>
