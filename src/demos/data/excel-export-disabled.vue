<script setup lang="ts">
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppExcelExport filename="月度报表.xlsx" />
    <AppExcelExport filename="未就绪.xlsx" disabled />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
