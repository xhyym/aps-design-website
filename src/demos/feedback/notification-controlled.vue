<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification, type NotificationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: NotificationItem[] = [
  { id: "n1", title: "新订单", description: "您有一笔新订单待处理", time: "10:20" },
  { id: "n2", title: "系统消息", description: "服务器将于今晚维护", time: "09:00", read: true },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开通知</AppButton>
    <AppNotification v-model="open" :items="items" />
  </div>
</template>
