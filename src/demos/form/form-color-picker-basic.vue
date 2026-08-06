<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template><AppColorPicker v-model="color" aria-label="品牌颜色" /></template>
