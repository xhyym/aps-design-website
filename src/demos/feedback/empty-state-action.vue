<script setup lang="ts">
import { AppEmptyState } from "aps-design-pro";
import "aps-design-pro/style.css";

function createCourse(): void {
  console.info("用户准备创建首个课程");
}
</script>

<template>
  <AppEmptyState title="还没有课程" description="创建课程后，可在这里管理销售与学习数据。" icon="grid" action-text="创建课程" @action="createCourse" />
</template>
