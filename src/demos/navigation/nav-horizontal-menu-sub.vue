<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "sys", label: "系统", path: "/sys", icon: "settings" as const, children: [
    { key: "role", label: "角色", path: "/sys/role", children: [
      { key: "role-list", label: "角色列表", path: "/sys/role/list" },
      { key: "role-new", label: "新建角色", path: "/sys/role/new" },
    ] },
    { key: "perm", label: "权限", path: "/sys/perm" },
  ] },
  { key: "ops", label: "运营", path: "/ops", icon: "chart" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/sys/role/list" />
</template>
