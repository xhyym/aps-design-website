<script setup lang="ts">
import { AppChatWindow, type ChatMessage } from "aps-design-pro";
import "aps-design-pro/style.css";

const messages: ChatMessage[] = [
  { id: "1", role: "user", content: "订单多久发货？" },
  { id: "2", role: "assistant", content: "通常 24 小时内发出。" },
];
</script>

<template>
  <AppChatWindow :model-value="true" :messages="messages" />
</template>
