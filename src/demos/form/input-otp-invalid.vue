<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" invalid described-by="otp-error" aria-label="错误验证码" />
    <p id="otp-error" class="demo-error">验证码错误，请重新输入。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
