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


### 2.3 发布评论

```vue demo:content-comment-widget-submit title="发布评论"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "c1", author: "王小明", content: "组件文档写得很详细！", time: "2026-08-10 09:20" },
]);
const onSubmit = (comment: CommentItem) => {
  comments.value = [...comments.value, comment];
};
</script>

<template>
  <AppCommentWidget v-model="comments" @submit="onSubmit" />
</template>
```

### 2.4 受控列表

```vue demo:content-comment-widget-controlled title="受控列表"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "1", author: "李雷", content: "接口设计清晰，值得学习。", time: "2026-08-12 14:05" },
  { id: "2", author: "韩梅梅", content: "示例丰富，直接可用。", time: "2026-08-12 15:40" },
]);
const onUpdate = (list: CommentItem[]) => {
  comments.value = list;
};
</script>

<template>
  <AppCommentWidget v-model="comments" @update:model-value="onUpdate" />
</template>
```

### 2.5 自定义占位

```vue demo:content-comment-widget-placeholder title="自定义占位"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([]);
</script>

<template>
  <AppCommentWidget v-model="comments" placeholder="来说点什么吧…" />
</template>
```

### 2.6 多条评论

```vue demo:content-comment-widget-list title="多条评论"
<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "a", author: "张三", content: "第一条评论", time: "昨天 10:00" },
  { id: "b", author: "李四", content: "第二条评论", time: "昨天 11:30" },
  { id: "c", author: "王五", content: "第三条评论", time: "今天 08:12" },
]);
</script>

<template>
  <AppCommentWidget v-model="comments" />
</template>
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
