<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref(false);
</script>

<template><AppCheckTag v-model="selected" tone="green">仅显示有库存</AppCheckTag></template>
