<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "share", label: "分享", icon: "copy" as const },
  { key: "reset", label: "重置密码", icon: "refresh" as const },
  { key: "del", label: "注销账号", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppButton @click="visible = true">打开菜单</AppButton>
  <AppMenuRight v-model="visible" :items="items" label="账号操作" />
</template>
