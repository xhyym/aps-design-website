<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><div class="tag-row"><AppTag label="Vue 3" tone="blue" /><AppTag label="已发布" tone="green" variant="outline" /><AppTag label="草稿" tone="orange" variant="solid" /></div></template>

<style scoped>.tag-row { display: flex; flex-wrap: wrap; gap: 8px; }</style>
