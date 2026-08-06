<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppChatWindow } from "aps-design-pro";
import "aps-design-pro/style.css";

interface ChatMessage { id: string; role: "user" | "assistant"; content: string; time?: string; }

const open = ref(false);
const loading = ref(false);
const messages = ref<ChatMessage[]>([{ id: "guide", role: "assistant", content: "请输入想了解的组件名称。" }]);
function send(content: string): void {
  messages.value.push({ id: `${Date.now()}`, role: "user", content });
  loading.value = true;
  window.setTimeout(() => {
    messages.value.push({ id: `${Date.now()}-reply`, role: "assistant", content: "已为你整理相关文档。" });
    loading.value = false;
  }, 700);
}
</script>

<template>
  <AppButton variant="secondary" @click="open = true">询问组件助手</AppButton>
  <AppChatWindow v-model="open" :messages="messages" :loading="loading" title="组件助手" @send="send" />
</template>
