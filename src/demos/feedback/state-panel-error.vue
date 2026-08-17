<script setup lang="ts">
import { AppStatePanel } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatePanel type="error" title="加载失败" description="网络异常，请重试" action-text="重试" />
</template>
