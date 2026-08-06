<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items: DropdownItem[] = [
  { key: "all", label: "全部课程" },
  { key: "published", label: "已发布课程" },
  { key: "draft", label: "草稿课程" },
];
</script>

<template>
  <AppDropdown v-model="visible" :items="items" menu-label="课程视图" :hide-on-click="false">
    <template #trigger="{ toggle }"><AppButton @click="toggle">课程视图</AppButton></template>
  </AppDropdown>
</template>
