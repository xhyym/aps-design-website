<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppWatermark text="仅限内部使用 · 禁止外传">
    <div class="box">员工信息表</div>
  </AppWatermark>
</template>

<style scoped>
.box { height: 200px; display: flex; align-items: center; justify-content: center; border: 1px dashed var(--aps-border); }
</style>
