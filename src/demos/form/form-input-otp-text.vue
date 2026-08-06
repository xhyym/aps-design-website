<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const recoveryCode = ref("");
</script>

<template>
  <AppInputOTP v-model="recoveryCode" :length="8" input-mode="text" aria-label="恢复代码" />
</template>
