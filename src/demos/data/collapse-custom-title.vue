<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["a"]);
const items = [
  { key: "a", title: "账户安全", content: "管理登录密码与二次验证。" },
  { key: "b", title: "通知偏好", content: "设置消息提醒方式。" },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items">
    <template #title="{ item }">
      <span>{{ item.title }}</span>
      <AppTag size="small" tone="green" style="margin-left: 8px">推荐</AppTag>
    </template>
  </AppCollapse>
</template>
