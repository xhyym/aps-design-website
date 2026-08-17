<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "a", title: "创建项目" },
  { key: "b", title: "邀请成员" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">打开快捷入口</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>
