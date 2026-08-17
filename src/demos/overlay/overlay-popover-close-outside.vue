<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="保持打开" :close-on-outside="false">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">不会自动关闭</AppButton>
    </template>
    <template #default="{ close }">
      <p>点击外部不会关闭，需显式操作。</p>
      <AppButton size="small" @click="close">手动关闭</AppButton>
    </template>
  </AppPopover>
</template>
