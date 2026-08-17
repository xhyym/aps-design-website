<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppExcelImport v-model="files" multiple />
</template>
