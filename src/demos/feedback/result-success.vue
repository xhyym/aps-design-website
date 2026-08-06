<script setup lang="ts">
import { AppResult } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResult status="success" title="课程发布成功" description="学员现在可以在商城中购买该课程。" action-text="查看课程" @action="console.info('查看已发布课程')" />
</template>
