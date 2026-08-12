<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledCode = ref("123456");
const readonlyCode = ref("654321");
</script>

<template>
  <div class="demo-stack">
    <AppInputOTP v-model="disabledCode" disabled aria-label="禁用验证码" />
    <AppInputOTP v-model="readonlyCode" readonly aria-label="只读验证码" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
}
</style>
