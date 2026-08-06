<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCard, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">打开自定义遮罩</AppButton>
  <AppOverlay v-model="visible"><AppCard padding="large">应用正在同步，请稍候。</AppCard></AppOverlay>
</template>
