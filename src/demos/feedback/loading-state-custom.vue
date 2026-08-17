<script setup lang="ts">
import { AppLoadingState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLoadingState title="拉取报表中" description="数据量较大，请耐心等待…" :rows="4" />
</template>
