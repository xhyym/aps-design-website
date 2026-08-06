<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimePanel v-model="value" min="09:00" max="18:00" :step="30" :show-footer="false" aria-label="可选工作时间" /></template>
