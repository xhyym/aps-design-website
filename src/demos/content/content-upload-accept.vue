<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppUpload v-model="files" accept=".png,.jpg,.jpeg" upload-text="选择图片" />
</template>
