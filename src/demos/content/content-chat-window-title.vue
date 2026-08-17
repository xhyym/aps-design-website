<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppChatWindow, type ChatMessage } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const messages = ref<ChatMessage[]>([
  { id: "1", role: "assistant", content: "这里是售后客服入口。" },
]);
</script>

<template>
  <div>
    <AppButton @click="open = true">联系客服</AppButton>
    <AppChatWindow v-model="open" :messages="messages" title="在线客服" placeholder="描述你的问题…" />
  </div>
</template>
