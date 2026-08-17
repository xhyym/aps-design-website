<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification, type NotificationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: NotificationItem[] = [
  { id: "m1", title: "站内信", description: "你有新的消息", time: "08:40" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">消息中心</AppButton>
    <AppNotification v-model="open" :items="items" title="消息" />
  </div>
</template>
