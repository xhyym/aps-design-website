<script setup lang="ts">
import { AppPageContent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageContent as="section" class="demo-content">
    <strong>内容区域</strong>
    <p>默认内边距适合直接承载页面中的一段业务内容。</p>
  </AppPageContent>
</template>

<style scoped>
.demo-content { width: min(100%, 480px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
.demo-content p { margin: 8px 0 0; color: var(--aps-muted); }
</style>
