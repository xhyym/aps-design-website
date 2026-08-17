<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: DropdownItem[] = [
  { key: "profile", label: "个人中心" },
  { key: "settings", label: "账号设置" },
];
</script>

<template>
  <div>
    <AppDropdown v-model="open" :items="items" menu-label="用户菜单" @select="(k: string) => (picked = k)">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">用户菜单</AppButton>
      </template>
    </AppDropdown>
    <p class="hint">已选：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
