<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "top", label: "顶部对齐" },
  { key: "center", label: "居中对齐" },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="对齐菜单" placement="bottom-start">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">bottom-start</AppButton>
    </template>
  </AppDropdown>
</template>
