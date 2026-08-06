<script setup lang="ts">
import { ref } from "vue";
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(true);
</script>

<template>
  <AppAlert v-if="visible" tone="warning" title="账号安全提醒" closable @close="visible = false">
    检测到新的登录设备，请确认是否为本人操作。
    <template #action><a href="#/guide/introduction">查看登录记录</a></template>
  </AppAlert>
</template>
