<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-refresh show-more>
    <template #before>
      <AppButton size="small">左侧操作</AppButton>
    </template>
    <template #after>
      <AppButton size="small">右侧操作</AppButton>
    </template>
  </AppTableOperationBar>
</template>
