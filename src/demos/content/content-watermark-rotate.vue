<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppWatermark text="机密" :rotate="30">
    <div class="box">内容区域</div>
  </AppWatermark>
</template>

<style scoped>
.box { height: 200px; display: flex; align-items: center; justify-content: center; border: 1px dashed var(--aps-border); }
</style>
