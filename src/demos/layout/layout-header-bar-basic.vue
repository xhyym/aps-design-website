<script setup lang="ts">
import { AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="数据工作台" subtitle="实时掌握业务进展" class="demo-header" />
</template>

<style scoped>
.demo-header { width: min(100%, 560px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
