<script setup lang="ts">
import { ref } from "vue";
import { AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items = [
  { key: "a", label: "查看", icon: "eye" as const },
  { key: "b", label: "编辑", icon: "edit" as const },
];
</script>

<template>
  <AppMenuRight v-model="open" :items="items" label="操作" />
</template>
