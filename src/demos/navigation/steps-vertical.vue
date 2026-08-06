<script setup lang="ts">
import { AppSteps, type StepItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: StepItem[] = [
  { key: "account", title: "账户信息", description: "已完成" },
  { key: "permission", title: "配置权限", description: "请分配管理员角色" },
  { key: "finish", title: "完成开通", status: "wait" },
];
</script>

<template>
  <AppSteps :items="items" :model-value="1" direction="vertical" />
</template>
