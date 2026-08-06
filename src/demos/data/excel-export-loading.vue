<script setup lang="ts">
import { ref } from "vue";
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);
function createExport(): void { loading.value = true; window.setTimeout(() => { loading.value = false; }, 800); }
</script>

<template><AppExcelExport :loading="loading" @export="createExport" /></template>
