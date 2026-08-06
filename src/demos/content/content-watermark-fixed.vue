<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>此页面使用固定水印，滚动时水印仍覆盖在视口上方。</p>
  <AppWatermark text="内部资料 · 禁止外传" />
</template>
