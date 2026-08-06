<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">锁定工作区</AppButton>
  <AppScreenLock v-model="visible" user-name="林知远" @unlock="visible = false" />
</template>
