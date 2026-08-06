<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu, AppSwitch, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const collapsed = ref(true);
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "system", label: "系统管理", path: "/system", icon: "settings", children: [{ key: "users", label: "用户管理", path: "/users" }, { key: "roles", label: "角色管理", path: "/roles" }] },
];
</script>

<template>
  <AppSwitch v-model="collapsed" label="收起侧边栏" />
  <div class="sidebar-shell"><AppSidebarMenu :items="items" active-path="/users" :collapsed="collapsed" @navigate="() => undefined" /></div>
</template>

<style scoped>
.sidebar-shell { width: fit-content; margin-top: 12px; padding: 8px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
</style>
