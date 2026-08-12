<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><AppTimeSelect v-model="value" :clearable="false" /></template>
