<script setup lang="ts">
import { ref } from "vue";
import { AppButtonMore, type DropdownItem } from "aps-design-pro";

const isOpen = ref(false);
const actions: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "download" },
];
</script>

<template>
  <AppButtonMore v-model="isOpen" :items="actions" @select="isOpen = false" />
</template>
