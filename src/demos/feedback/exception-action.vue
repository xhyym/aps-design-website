<script setup lang="ts">
import { AppException } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppException code="404" description="你要找的页面不存在" @action="console.log('back home')" />
</template>
