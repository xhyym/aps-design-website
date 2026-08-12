<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";

const description = "本课程覆盖 Vue 3 工程化、状态管理、权限模型和大型项目协作流程，适合有一定基础的开发者系统性提升。";
</script>

<template>
  <div class="text-demo-clamp">
    <AppText :line-clamp="2" :title="description">{{ description }}</AppText>
  </div>
</template>

<style scoped>
.text-demo-clamp {
  max-width: 260px;
}
</style>
