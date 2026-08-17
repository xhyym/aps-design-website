<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppWatermark text="内部资料" :opacity="0.2">
    <div class="box">敏感数据展示区</div>
  </AppWatermark>
</template>

<style scoped>
.box { height: 200px; display: flex; align-items: center; justify-content: center; border: 1px dashed var(--aps-border); }
</style>
