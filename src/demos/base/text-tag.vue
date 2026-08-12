<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="text-demo-tag">
    <AppText tag="strong">加粗载体</AppText>
    <AppText tag="em">强调载体</AppText>
    <AppText tag="div">独立块级文字</AppText>
  </div>
</template>

<style scoped>
.text-demo-tag {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
