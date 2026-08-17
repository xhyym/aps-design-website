<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const beforeUpload = (file: File) => {
  if (file.size > 1024 * 1024) {
    console.warn("文件不能超过 1MB");
    return false;
  }
  return true;
};
</script>

<template>
  <AppUpload v-model="files" :before-upload="beforeUpload" upload-text="上传（限 1MB）" />
</template>
