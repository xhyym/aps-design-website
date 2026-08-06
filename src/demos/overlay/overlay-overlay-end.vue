<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCard, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">展示底部遮罩</AppButton>
  <AppOverlay v-model="visible" align="end" layer="drawer"><AppCard padding="large">这是对齐到末端的全屏工作层。</AppCard></AppOverlay>
</template>
