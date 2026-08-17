<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定工作区</AppButton>
    <AppScreenLock v-model="locked" user-name="张伟" />
  </div>
</template>
