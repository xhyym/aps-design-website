<script setup lang="ts">
import { ref } from "vue";
import { AppIcon, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const password = ref("");
</script>

<template>
  <div class="input-demo-field">
    <AppInput
      v-model="password"
      type="password"
      show-password
      autocomplete="current-password"
      placeholder="输入登录密码"
      aria-label="登录密码"
    >
      <template #prefix><AppIcon name="lock" :size="16" /></template>
    </AppInput>
  </div>
</template>

<style scoped>
.input-demo-field {
  width: min(100%, 360px);
}
</style>
