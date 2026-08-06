---
title: 聊天窗口
component: AppChatWindow
category: content
source: packages/ui/src/components/content/AppChatWindow.vue
---

# 聊天窗口（AppChatWindow）

`AppChatWindow` 提供固定在视口右下角的消息窗口，消息数据与回复逻辑始终由业务层控制。

## 1. 用处

- 适用于在线客服、页面助手和轻量咨询入口。
- 用 `v-model` 控制打开状态，用 `messages` 渲染已确认的会话记录。
- 收到 `send` 后由父级发起请求并回写消息，不在组件内伪造回复或保存聊天记录。

## 2. 代码演示

### 2.1 打开客服并接收发送事件

```vue demo:content-chat-window-basic title="在线客服"
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
```

### 2.2 服务端回复中的加载态

```vue demo:content-chat-window-loading title="回复加载态"
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
```

## 3. API 使用方式

`ChatMessage` 的 `role` 只接受 `"user"` 或 `"assistant"`。在 `loading` 期间输入框会禁用，避免同一轮请求被重复提交。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示窗口。 | `boolean` | — |
| `messages` | 消息列表。 | `ChatMessage[]` | — |
| `title` | 窗口标题。 | `string` | `"助手对话"` |
| `placeholder` | 输入框占位文案。 | `string` | `"输入消息…"` |
| `loading` | 是否正在等待回复；开启后禁止发送。 | `boolean` | `false` |

`ChatMessage`：`{ id: string; role: "user" | "assistant"; content: string; time?: string }`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 点击关闭按钮后触发。 | `(value: boolean)` |
| `send` | 用户提交非空消息后触发。 | `(content: string)` |
