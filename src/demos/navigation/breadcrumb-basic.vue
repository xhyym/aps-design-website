<script setup lang="ts">
import { ref } from "vue";
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const lastPath = ref("尚未跳转");
const items = [{ label: "系统管理", href: "/system" }, { label: "用户管理", href: "/system/users" }, { label: "新建用户" }];
</script>

<template>
  <AppBreadcrumb :items="items" @navigate="lastPath = $event" />
  <p class="result">最近选择：{{ lastPath }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
