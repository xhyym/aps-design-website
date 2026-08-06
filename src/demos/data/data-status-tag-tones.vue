<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><div class="tag-row"><AppStatusTag tone="success" label="已完成" /><AppStatusTag tone="warning" label="待处理" /><AppStatusTag tone="danger" label="已失败" /></div></template>

<style scoped>.tag-row { display: flex; gap: 8px; }</style>
