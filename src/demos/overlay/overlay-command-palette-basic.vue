<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "course", title: "新建课程", description: "进入课程创建流程", icon: "plus" as const },
  { key: "orders", title: "查看订单", description: "打开交易订单列表", icon: "panel" as const },
];
</script>

<template>
  <AppButton @click="visible = true">打开命令面板</AppButton>
  <AppCommandPalette v-model="visible" :items="items" @select="visible = false" />
</template>
