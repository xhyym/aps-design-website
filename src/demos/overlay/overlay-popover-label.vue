<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="帮助信息" content-role="dialog">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">帮助</AppButton>
    </template>
    <template #default>
      <p>以对话框角色呈现的气泡内容，便于屏幕阅读器识别。</p>
    </template>
  </AppPopover>
</template>
