<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppChatWindow } from "aps-design-pro";
import "aps-design-pro/style.css";

interface ChatMessage { id: string; role: "user" | "assistant"; content: string; time?: string; }

const open = ref(false);
const messages = ref<ChatMessage[]>([{ id: "welcome", role: "assistant", content: "你好，需要我帮你查找订单吗？", time: "09:30" }]);
function send(content: string): void {
  messages.value.push({ id: `${Date.now()}`, role: "user", content, time: "刚刚" });
}
</script>

<template>
  <AppButton @click="open = true">打开在线客服</AppButton>
  <AppChatWindow v-model="open" :messages="messages" @send="send" />
</template>
