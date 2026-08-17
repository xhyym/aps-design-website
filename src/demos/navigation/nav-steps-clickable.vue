<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "填写信息" },
  { key: "2", title: "确认提交" },
  { key: "3", title: "完成" },
];
</script>

<template>
  <AppSteps :items="items" :clickable="true" />
</template>
