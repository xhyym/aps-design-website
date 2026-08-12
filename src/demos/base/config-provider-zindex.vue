<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider :z-index="3000">
    <AppButton>浮层层级基准提升至 3000</AppButton>
  </AppConfigProvider>
</template>
