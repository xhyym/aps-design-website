<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppChatWindow, type ChatMessage } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const messages = ref<ChatMessage[]>([
  { id: "m1", role: "assistant", content: "你好，我是智能助手，有什么可以帮你？" },
]);
const onSend = (content: string) => {
  messages.value.push({ id: "u" + Date.now(), role: "user", content });
  setTimeout(() => {
    messages.value.push({ id: "a" + Date.now(), role: "assistant", content: "收到：" + content });
  }, 600);
};
</script>

<template>
  <div>
    <AppButton @click="open = true">打开助手</AppButton>
    <AppChatWindow v-model="open" v-model:messages="messages" @send="onSend" />
  </div>
</template>
