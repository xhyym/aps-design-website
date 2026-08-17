<script setup lang="ts">
import { AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>上方内容</p>
  <AppDivider label="自定义边距" :margin="32" />
  <p>下方内容</p>
</template>
