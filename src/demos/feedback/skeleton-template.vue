<script setup lang="ts">
import { AppSkeleton, AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeleton :loading="true">
    <template #template>
      <AppSkeletonItem variant="image" width="100%" height="96px" />
      <AppSkeletonItem variant="text" width="55%" />
    </template>
    <p>课程卡片内容</p>
  </AppSkeleton>
</template>
