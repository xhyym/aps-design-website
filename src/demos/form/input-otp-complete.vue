<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
const status = ref("等待输入完整验证码");

function onComplete(value: string): void {
  status.value = `验证码已输入完成：${value}`;
}
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" @complete="onComplete" aria-label="完整验证码" />
    <span class="demo-status">{{ status }}</span>
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
}
.demo-status {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
