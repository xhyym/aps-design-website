<script setup lang="ts">
import { AppButton, AppTableActions } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTableActions>
    <AppButton size="small" variant="text">编辑</AppButton>
    <AppButton size="small" variant="text" tone="danger">删除</AppButton>
  </AppTableActions>
</template>
