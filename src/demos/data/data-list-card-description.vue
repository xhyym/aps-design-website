<script setup lang="ts">
import { AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "name", label: "项目名称", value: "APS 设计系统" },
  { key: "version", label: "当前版本", value: "0.3.1" },
  { key: "status", label: "状态", value: "已发布" },
];
</script>

<template>
  <AppDataListCard title="项目概览" description="用于对内对外展示的项目基础信息" :items="items" />
</template>
