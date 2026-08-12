<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="text-demo-types">
    <AppText type="default">默认文字</AppText>
    <AppText type="primary">主要文字</AppText>
    <AppText type="success">成功文字</AppText>
    <AppText type="warning">警告文字</AppText>
    <AppText type="info">信息文字</AppText>
    <AppText type="danger">危险文字</AppText>
  </div>
</template>

<style scoped>
.text-demo-types {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
</style>
