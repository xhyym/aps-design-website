<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "创建", description: "填写基础信息" },
  { key: "2", title: "配置", description: "设置规则与权限" },
  { key: "3", title: "发布", description: "上线到生产环境" },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
