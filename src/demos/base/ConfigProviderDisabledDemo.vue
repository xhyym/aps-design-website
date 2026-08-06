<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfigProvider } from "aps-design-pro";

const isReadonly = ref(true);
</script>

<template>
  <AppConfigProvider :disabled="isReadonly">
    <AppButton>保存</AppButton>

    <AppConfigProvider :disabled="false" size="small">
      <AppButton variant="secondary">查看变更记录</AppButton>
    </AppConfigProvider>
  </AppConfigProvider>
</template>
