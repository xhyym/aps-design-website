---
title: 富文本编辑器
component: AppRichTextEditor
category: content
source: packages/ui/src/components/content/AppRichTextEditor.vue
---

# 富文本编辑器（AppRichTextEditor）

`AppRichTextEditor` 提供加粗、斜体和无序列表的轻量编辑能力，并在组件边界清洗 HTML。

## 1. 用处

- 用于周报、评论补充说明或简单的知识内容编辑。
- 组件仅保留文本和有限标签，不支持图片、链接、表格或自定义样式。
- 不应将它作为不受信任 HTML 的最终安全边界；服务端仍要按业务安全策略处理内容。

## 2. 代码演示

### 2.1 编辑业务周报

```vue demo:content-rich-text-editor-basic title="编辑业务周报"
<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("<p>本周完成了 <strong>权限中心</strong> 的交付验收。</p>");
</script>

<template><AppRichTextEditor v-model="content" placeholder="输入周报内容…" /></template>
```

### 2.2 归档内容只读展示

```vue demo:content-rich-text-editor-disabled title="只读内容"
<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("<p><strong>审批说明：</strong>该记录已归档，不允许继续编辑。</p>");
</script>

<template><AppRichTextEditor v-model="content" disabled :min-height="120" /></template>
```

## 3. API 使用方式

通过 `v-model` 接收已清洗的 HTML 字符串。粘贴时组件仅插入纯文本；工具栏命令依赖浏览器的原生编辑命令，因此应把复杂排版交给专业编辑器或后端内容系统。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 编辑器 HTML 内容。 | `string` | — |
| `placeholder` | 空内容时显示的提示。 | `string` | `"请输入内容…"` |
| `disabled` | 是否只读并禁用工具栏。 | `boolean` | `false` |
| `minHeight` | 内容编辑区的最小高度，单位 px。 | `number` | `180` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 内容输入或格式变化后触发。 | `(value: string)` |
