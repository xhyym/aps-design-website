<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSkeleton } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(true);
</script>

<template>
  <AppButton variant="text" size="small" @click="loading = !loading">切换加载状态</AppButton>
  <AppSkeleton :loading="loading" avatar title :rows="3">
    <strong>Vue 工程化实战</strong>
    <p>从项目规范到部署交付，建立可复用的开发流程。</p>
  </AppSkeleton>
</template>
