<script setup lang="ts">
import { ref } from "vue";
import { AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "d1", title: "新建工单", description: "为当前客户创建售后工单" },
  { key: "d2", title: "发送通知", description: "通过站内信提醒相关成员" },
];
</script>

<template>
  <div>
    <p class="hint">带说明文字的入口便于用户理解用途。</p>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
