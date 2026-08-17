<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "系统", href: "/system" },
  { label: "权限", href: "/system/permission" },
  { label: "角色配置" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
