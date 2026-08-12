<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="text-demo-weights">
    <AppText weight="regular">常规字重</AppText>
    <AppText weight="medium">中等字重</AppText>
    <AppText weight="semibold">半粗字重</AppText>
  </div>
</template>

<style scoped>
.text-demo-weights {
  display: flex;
  gap: 14px;
}
</style>
