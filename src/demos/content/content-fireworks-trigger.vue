<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
function celebrate(): void {
  show.value = false;
  window.setTimeout(() => { show.value = true; }, 0);
}
</script>

<template>
  <AppButton @click="celebrate">完成发布</AppButton>
  <AppFireworksEffect :show="show" />
</template>
