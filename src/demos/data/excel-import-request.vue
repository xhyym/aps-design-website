<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request = async ({ file }: { file: File }) => {
  console.log("upload", file.name);
  await new Promise((r) => setTimeout(r, 1000));
  return { url: "/mock/" + file.name };
};
</script>

<template>
  <AppExcelImport v-model="files" :request="request" />
</template>
