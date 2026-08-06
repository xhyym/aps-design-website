<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/users");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "system", label: "系统管理", path: "/system", icon: "settings", children: [{ key: "users", label: "用户管理", path: "/users" }, { key: "roles", label: "角色管理", path: "/roles" }] },
];
</script>

<template>
  <div class="sidebar-shell"><AppSidebarMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" /></div>
</template>

<style scoped>
.sidebar-shell { width: 220px; padding: 8px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
</style>
