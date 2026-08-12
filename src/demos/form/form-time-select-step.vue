<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimeSelect v-model="value" :step="15" clearable placeholder="每 15 分钟" /></template>
