<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "已提交", status: "success" as const },
  { key: "2", title: "审核中", status: "process" as const },
  { key: "3", title: "被驳回", status: "error" as const },
  { key: "4", title: "重新提交", status: "wait" as const },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
