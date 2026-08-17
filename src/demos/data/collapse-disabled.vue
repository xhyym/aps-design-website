<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["ok"]);
const items = [
  { key: "ok", title: "可用面板", content: "该面板可以正常展开与收起。" },
  { key: "no", title: "已锁定面板", content: "该面板不允许展开。", disabled: true },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items" />
</template>
