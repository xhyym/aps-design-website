<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("rgba(0, 113, 227, 0.7)");
</script>

<template><AppColorPicker v-model="color" show-alpha format="rgb" :presets="['#0071e3', '#1d1d1f', '#f5f5f7']" clearable aria-label="遮罩颜色" /></template>
