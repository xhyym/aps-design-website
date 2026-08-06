<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const selectedKeys = ref<string[]>(["overview"]);
const nodes: TreeOption[] = [{ label: "工作区", value: "workspace", children: [{ label: "概览", value: "overview" }, { label: "成员", value: "members" }] }, { label: "系统设置", value: "settings" }];
</script>

<template><AppTree v-model:selected-keys="selectedKeys" :nodes="nodes" default-expand-all /></template>
