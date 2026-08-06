---
title: 消息框
component: AppMessageBox
category: overlay
source: packages/ui/src/components/overlay/AppMessageBox.vue
---

# 消息框（AppMessageBox）

`AppMessageBox` 把确认、提醒和短文本输入统一成一个轻量流程，适合由页面动作直接唤起。

## 1. 用处

`mode="alert"` 用于单向告知，`confirm` 用于确认，`prompt` 用于在确认前收集一段短文本。输入校验通过 `inputValidator` 返回错误信息完成。

## 2. 代码演示

### 2.1 确认消息

```vue demo:overlay-message-box-confirm title="确认消息"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">提交审核</AppButton>
  <AppMessageBox v-model="visible" title="提交课程审核" message="提交后课程将进入审核队列，编辑入口会暂时锁定。" @confirm="visible = false" />
</template>
```

### 2.2 带校验的输入消息

```vue demo:overlay-message-box-prompt title="输入消息"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const value = ref("");
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">修改课程名称</AppButton>
  <AppMessageBox v-model="visible" v-model:input-value="value" mode="prompt" title="修改课程名称" message="名称会同步显示在课程列表和详情页。" input-placeholder="例如：Vue 3 实战" :input-validator="(text) => text.trim() ? undefined : '课程名称不能为空'" @confirm="visible = false" />
</template>
```

## 3. API 使用方式

`confirm` 事件携带最终输入值。`prompt` 模式请绑定 `v-model:input-value`，校验函数返回字符串时会阻止提交并在输入框下显示错误。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 消息框是否打开。 | `boolean` | 必填 |
| `mode` | 消息模式。 | `"alert" \| "confirm" \| "prompt"` | `confirm` |
| `title` / `message` | 标题与消息文本。 | `string` | 必填 |
| `inputValue` | prompt 模式的输入值。 | `string` | `""` |
| `inputPlaceholder` | 输入占位文案。 | `string` | `请输入内容` |
| `inputValidator` | 输入校验函数；返回字符串表示错误。 | `(value: string) => string \| void` | `undefined` |
| `confirmText` / `cancelText` | 操作按钮文字。 | `string` | 自动确认 / `取消` |
| `danger` | 是否使用危险确认样式。 | `boolean` | `false` |
| `isSubmitting` | 是否正在提交。 | `boolean` | `false` |
| `closeOnOverlay` | 点击遮罩是否关闭。 | `boolean` | `true` |

### 4.2 Slots

无对外插槽；主体与按钮根据 `mode` 生成。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 打开状态变化。 |
| `update:inputValue` | `string` | prompt 输入变化。 |
| `confirm` | `string` | 确认时返回输入值。 |
| `cancel` | — | 取消或关闭时触发。 |
