<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppInputOTP v-model="small" size="small" aria-label="小尺寸验证码" />
    <AppInputOTP v-model="medium" aria-label="默认尺寸验证码" />
    <AppInputOTP v-model="large" size="large" aria-label="大尺寸验证码" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
}
</style>
