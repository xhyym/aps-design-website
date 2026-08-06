<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("10:00");
</script>

<template><AppTimePanel v-model="value" aria-label="时间面板" /></template>
