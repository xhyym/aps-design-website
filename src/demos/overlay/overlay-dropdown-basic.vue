<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items: DropdownItem[] = [
  { key: "profile", label: "个人资料", icon: "user" },
  { key: "settings", label: "偏好设置", icon: "settings" },
  { key: "logout", label: "退出登录", icon: "logout", danger: true, divided: true },
];
</script>

<template>
  <AppDropdown v-model="visible" :items="items" menu-label="账户菜单" @select="visible = false">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">林知远</AppButton></template>
  </AppDropdown>
</template>
