<script setup lang="ts">
import { AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-copy">
    <p>最新动态</p>
    <AppDivider label="今天" position="left" border-style="dashed" :margin="18" />
    <p>已完成移动端验收。</p>
  </div>
</template>

<style scoped>
.demo-copy { width: min(100%, 480px); color: var(--aps-ink); }
.demo-copy p { margin: 0; }
</style>
