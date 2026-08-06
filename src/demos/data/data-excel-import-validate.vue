<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadBeforeUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ onProgress }) => { onProgress(100); return {}; };
const beforeUpload: UploadBeforeUpload = (file) => file.size < 2 * 1024 * 1024;
</script>

<template><AppExcelImport v-model="files" :request="request" :before-upload="beforeUpload" /></template>
