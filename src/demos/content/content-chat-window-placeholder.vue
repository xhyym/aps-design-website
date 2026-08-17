<script setup lang="ts">
import { AppChatWindow, type ChatMessage } from "aps-design-pro";
import "aps-design-pro/style.css";

const messages: ChatMessage[] = [];
</script>

<template>
  <AppChatWindow :model-value="true" :messages="messages" placeholder="输入问题，例如：如何退款？" />
</template>
