<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
const log = ref("");
const onUnlock = (password: string) => {
  log.value = "收到密码长度 " + password.length;
  locked.value = false;
};
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定工作区</AppButton>
    <AppScreenLock v-model="locked" @unlock="onUnlock" />
    <p class="hint">{{ log || "未解锁" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
