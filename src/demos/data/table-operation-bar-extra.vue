<script setup lang="ts">
import { ref } from "vue";
import { AppExcelExport, AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const isFullscreen = ref(false);
</script>

<template><AppTableOperationBar v-model:fullscreen="isFullscreen" show-print show-fullscreen show-refresh show-more><template #export><AppExcelExport title="导出订单" /></template></AppTableOperationBar></template>
