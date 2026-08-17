<script setup lang="ts">
import { AppButton, AppDescriptions, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "status", label: "状态", value: "正常" },
  { key: "owner", label: "负责人", value: "李雷" },
];
</script>

<template>
  <AppDescriptions title="实例信息" :items="items">
    <template #item-status>
      <AppTag tone="green">运行中</AppTag>
    </template>
    <template #extra>
      <AppButton size="small" variant="text">编辑</AppButton>
    </template>
  </AppDescriptions>
</template>
