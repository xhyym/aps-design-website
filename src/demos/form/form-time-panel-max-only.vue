<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimePanel v-model="value" max="18:00" aria-label="可选时间" /></template>
