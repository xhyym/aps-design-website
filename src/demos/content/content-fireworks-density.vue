<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
function celebrate(): void {
  show.value = !show.value;
}
</script>

<template>
  <AppButton variant="secondary" @click="celebrate">切换庆祝效果</AppButton>
  <AppFireworksEffect :show="show" :count="48" />
</template>
