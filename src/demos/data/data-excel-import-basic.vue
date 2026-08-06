<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ onProgress }) => { onProgress(100); return {}; };
</script>

<template><AppExcelImport v-model="files" :request="request" /></template>
