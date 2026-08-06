<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "课程名称", value: "Vue 工程化实战" }, { label: "课程状态", value: "已上架" }, { label: "创建时间", value: "2026-08-06" }];
</script>

<template><AppDescriptions title="课程信息" :items="items" /></template>
