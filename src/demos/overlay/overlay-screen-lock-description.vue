<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定</AppButton>
    <AppScreenLock v-model="locked" description="为保护数据安全，请重新验证身份" />
  </div>
</template>
