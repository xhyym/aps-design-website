<script setup lang="ts">
import { AppException } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppException code="404" @action="console.info('用户返回工作台')" />
</template>
