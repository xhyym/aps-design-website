<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";
const value = ref("rgba(0, 113, 227, 0.6)");
</script>
<template><AppColorPickerPanel v-model="value" format="rgb" show-alpha :predefine="['#0071e3', '#1d1d1f']" aria-label="透明颜色面板" /></template>
