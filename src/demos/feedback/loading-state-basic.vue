<script setup lang="ts">
import { AppLoadingState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLoadingState title="正在加载课程列表" description="正在同步你的筛选条件。" :rows="4" />
</template>
