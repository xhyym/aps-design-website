<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "成员管理", description: "邀请、停用和分配角色", path: "/members", icon: "users" as const },
  { title: "组织设置", description: "维护组织资料与安全策略", path: "/settings", icon: "settings" as const },
  { title: "操作日志", description: "查看成员操作记录", path: "/logs", icon: "clock" as const },
];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">搜索后台功能</AppButton>
  <AppGlobalSearch v-model="visible" :items="items" @select="visible = false" />
</template>
