<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimeSelect v-model="value" start="08:00" end="20:00" min-time="09:00" max-time="18:00" clearable placeholder="可选预约时段" /></template>
