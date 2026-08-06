<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ file, onProgress }) => {
  onProgress(60);
  await new Promise<void>((resolve) => window.setTimeout(resolve, 180));
  onProgress(100);
  return { url: `https://example.com/images/${encodeURIComponent(file.name)}` };
};
</script>

<template><AppUpload v-model="files" accept="image/*" list-type="picture-card" :limit="4" :request="request" upload-text="上传封面" /></template>
