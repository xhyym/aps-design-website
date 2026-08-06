<script setup lang="ts">
import { AppMixedMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "members", label: "成员中心", path: "/members", icon: "users", children: [{ key: "list", label: "成员列表", path: "/members" }, { key: "invite", label: "邀请成员", path: "/members/invite" }] },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/members" collapsed @navigate="() => undefined" />
</template>
