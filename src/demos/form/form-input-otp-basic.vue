<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <AppInputOTP v-model="code" aria-label="手机验证码" />
</template>
