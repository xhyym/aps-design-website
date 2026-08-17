<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "m1", title: "可跳过", description: "点击遮罩即可跳过引导" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" :mask-closable="true" />
  </div>
</template>
