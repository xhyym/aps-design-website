<script setup lang="ts">
import { ref } from "vue";
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("b1");
const items = [
  { key: "a", label: "概览" },
  { key: "b", label: "订单", children: [
    { key: "b1", label: "列表" },
    { key: "b2", label: "详情" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" :model-value="active" @update:model-value="(k: string) => (active = k)" />
</template>
