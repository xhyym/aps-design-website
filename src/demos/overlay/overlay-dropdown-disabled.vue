<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "a", label: "正常操作" },
  { key: "b", label: "暂不可用", disabled: true },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="操作菜单">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">操作菜单</AppButton>
    </template>
  </AppDropdown>
</template>
