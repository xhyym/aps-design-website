<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfigProvider } from "aps-design-pro";

const locked = ref(true);
</script>

<template>
  <AppConfigProvider :disabled="locked">
    <AppButton>主操作</AppButton>
    <AppConfigProvider :disabled="false" size="large">
      <AppButton variant="secondary">始终可操作的查看入口</AppButton>
    </AppConfigProvider>
  </AppConfigProvider>
</template>
