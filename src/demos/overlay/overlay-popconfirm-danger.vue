<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="删除记录" description="删除后不可恢复" confirm-text="删除" danger>
    <template #trigger="{ toggle }">
      <AppButton tone="danger" @click="toggle">删除</AppButton>
    </template>
  </AppPopconfirm>
</template>
