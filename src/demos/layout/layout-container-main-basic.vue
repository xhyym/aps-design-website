<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerMain as="section" class="demo-main">主内容区会自动占据纵向容器的剩余空间。</AppContainerMain>
</template>

<style scoped>
.demo-main { width: min(100%, 480px); min-height: 120px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
