<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("a");
const items = [
  { key: "a", label: "编辑中" },
  { key: "b", label: "已锁定" },
];
const onBeforeLeave = (next: string) => next !== "b";
</script>

<template>
  <AppTabs :items="items" :model-value="active" :before-leave="onBeforeLeave" @update:model-value="(k: string) => (active = k)" />
</template>
