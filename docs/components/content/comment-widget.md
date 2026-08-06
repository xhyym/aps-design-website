---
title: 评论组件
component: AppCommentWidget
category: content
source: packages/ui/src/components/content/AppCommentWidget.vue
---

# 评论组件（AppCommentWidget）

`AppCommentWidget` 渲染评论列表和输入区，并以受控数组的方式把新评论交回业务层。

## 1. 用处

- 用于工单、文章、订单协作记录中的简单评论。
- 组件不会请求、持久化或删除评论；提交后由 `v-model` 更新列表。
- 若需要评论回复、提及、权限或审核，应由业务层在此基础上扩展数据模型。

## 2. 代码演示

### 2.1 预置讨论记录

```vue demo:content-comment-widget-basic title="预置讨论记录"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CommentItem { id: string; author: string; content: string; time: string; }

const comments = ref<CommentItem[]>([
  { id: "1", author: "林知远", content: "这个排期我已经确认，可以继续推进。", time: "10 分钟前" },
]);
</script>

<template><AppCommentWidget v-model="comments" /></template>
```

### 2.2 空状态与业务占位文案

```vue demo:content-comment-widget-empty title="空状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CommentItem { id: string; author: string; content: string; time: string; }

const comments = ref<CommentItem[]>([]);
</script>

<template><AppCommentWidget v-model="comments" placeholder="补充一次交付说明…" /></template>
```

## 3. API 使用方式

绑定 `v-model` 后，组件会在本地创建 `author: "当前用户"`、`time: "刚刚"` 的新项并触发 `submit`。生产场景通常应在收到 `submit` 后调用服务端，再以服务端返回的作者、时间和 ID 覆盖该项。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 评论列表。 | `CommentItem[]` | — |
| `placeholder` | 评论输入框的占位文案。 | `string` | `"写下你的评论…"` |

`CommentItem`：`{ id: string; author: string; content: string; time: string }`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 发布成功后给出新列表。 | `(value: CommentItem[])` |
| `submit` | 创建新评论后触发。 | `(comment: CommentItem)` |
