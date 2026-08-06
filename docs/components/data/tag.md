---
title: 标签
component: AppTag
category: data
source: packages/ui/src/components/data/AppTag.vue
---

# 标签（AppTag）

`AppTag` 用可配置色调、形态和关闭行为展示分类或筛选条件。

## 1. 用处

- 展示技术栈、内容分类、筛选项或可移除条件。
- `closable` 只触发 `close`，父级负责删除实际筛选值。

## 2. 代码演示

### 2.1 颜色与形态

```vue demo:data-tag-basic title="颜色与形态"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><div class="tag-row"><AppTag label="Vue 3" tone="blue" /><AppTag label="已发布" tone="green" variant="outline" /><AppTag label="草稿" tone="orange" variant="solid" /></div></template>

<style scoped>.tag-row { display: flex; flex-wrap: wrap; gap: 8px; }</style>
```

### 2.2 可移除筛选项

```vue demo:data-tag-closable title="可移除标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(true);
</script>

<template><AppTag v-if="visible" label="可移除筛选" tone="blue" closable @close="visible = false" /></template>
```

## 3. API 使用方式

简单文本可用 `label`，需要富内容时使用默认插槽。关闭后更新外部数组或查询条件，组件不会自行隐藏。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 标签文字。 | `string` | `""` |
| `tone` | 色调。 | `TagTone` | `"neutral"` |
| `variant` | 填充形式。 | `"soft" \| "outline" \| "solid"` | `"soft"` |
| `size` | 控件尺寸。 | `ControlSize` | `"default"` |
| `closable` / `disabled` | 是否显示关闭按钮、是否禁用。 | `boolean` | `false` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义标签内容。 |

### 4.3 Events

| 事件 | 说明 |
| --- | --- |
| `close` | 点击关闭按钮。 |
