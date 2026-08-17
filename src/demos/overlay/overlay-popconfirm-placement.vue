<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="确认操作" placement="top">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">上方弹出</AppButton>
    </template>
  </AppPopconfirm>
</template>
