<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton tone="danger" @click="open = true">注销账号</AppButton>
    <AppMessageBox v-model="open" mode="confirm" title="确认注销" message="注销后所有数据将被清除，且不可恢复" confirm-text="注销" danger />
  </div>
</template>
