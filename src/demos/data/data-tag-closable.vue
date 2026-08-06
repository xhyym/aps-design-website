<script setup lang="ts">
import { ref } from "vue";
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(true);
</script>

<template><AppTag v-if="visible" label="可移除筛选" tone="blue" closable @close="visible = false" /></template>
