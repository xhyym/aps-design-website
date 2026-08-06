<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ file, onProgress }) => {
  onProgress(30);
  await new Promise<void>((resolve) => window.setTimeout(resolve, 220));
  onProgress(100);
  return { url: `https://example.com/files/${encodeURIComponent(file.name)}` };
};
</script>

<template><AppUpload v-model="files" accept=".pdf,.doc,.docx" :request="request" upload-text="上传交付文档" /></template>
