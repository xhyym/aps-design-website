<script setup lang="ts">
import { AppDataTable, AppPageContent, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

const rows = [{ name: "设计评审", owner: "周宁" }, { name: "接口联调", owner: "陈晓" }];
const columns: DataTableColumn<(typeof rows)[number]>[] = [{ key: "name", label: "任务" }, { key: "owner", label: "负责人" }];
</script>

<template>
  <AppPageContent :padded="false" class="demo-content">
    <AppDataTable :rows="rows" :columns="columns" row-key="name" />
  </AppPageContent>
</template>

<style scoped>
.demo-content { width: min(100%, 480px); overflow: hidden; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
