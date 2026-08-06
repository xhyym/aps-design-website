<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const errorMessage = ref("");

function unlock(password: string): void {
  errorMessage.value = password === "aps" ? "" : "密码不正确，请重试。";
  if (!errorMessage.value) visible.value = false;
}
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">测试密码校验</AppButton>
  <AppScreenLock v-model="visible" description="输入 aps 可解锁当前演示。" :error-message="errorMessage" @unlock="unlock" />
</template>
