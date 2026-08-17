<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
const unlocking = ref(false);
const onUnlock = () => {
  unlocking.value = true;
  setTimeout(() => {
    unlocking.value = false;
    locked.value = false;
  }, 1500);
};
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定</AppButton>
    <AppScreenLock v-model="locked" :is-unlocking="unlocking" @unlock="onUnlock" />
  </div>
</template>
