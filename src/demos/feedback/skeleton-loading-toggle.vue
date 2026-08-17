<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSkeleton } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(true);
</script>

<template>
  <div>
    <AppButton size="small" @click="loading = !loading">{{ loading ? "显示内容" : "显示骨架" }}</AppButton>
    <AppSkeleton :loading="loading" :rows="3">
      <p>真实内容：这里是加载完成后展示的页面数据。</p>
    </AppSkeleton>
  </div>
</template>
