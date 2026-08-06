<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";
const value = ref("#0071e3");
</script>
<template><AppColorPickerPanel v-model="value" aria-label="颜色面板" /></template>
