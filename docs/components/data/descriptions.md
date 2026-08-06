---
title: 描述列表
component: AppDescriptions
category: data
source: packages/ui/src/components/data/AppDescriptions.vue
---

# 描述列表（AppDescriptions）

`AppDescriptions` 以标签和值的形式展示订单、课程和成员等详情字段，支持密度、布局、边框及单项覆盖。

## 1. 用处

- 在详情页高效展示稳定的只读字段。
- 通过 `columns` 与 `span` 控制字段密度。
- 在横向、带边框的模式中清晰呈现业务详情。

## 2. 代码演示

### 2.1 默认垂直布局

```vue demo:descriptions-basic title="基础描述"
<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "课程名称", value: "Vue 工程化实战" }, { label: "课程状态", value: "已上架" }, { label: "创建时间", value: "2026-08-06" }];
</script>

<template><AppDescriptions title="课程信息" :items="items" /></template>
```

### 2.2 横向带边框详情

```vue demo:descriptions-border title="带边框详情"
<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "订单号", value: "20260806001" }, { label: "支付金额", value: "¥199" }, { label: "购买人", value: "林同学", span: 2 }];
</script>

<template><AppDescriptions :items="items" direction="horizontal" border :columns="2" /></template>
```

## 3. API 使用方式

当某个字段包含状态标签、链接等富内容时，用 `item-${key}` 插槽替换该字段的值。

```vue
<AppDescriptions :items="items"><template #item-status><AppStatusTag tone="success" label="已上架" /></template></AppDescriptions>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 描述项；支持 `span`、宽度、对齐与 `hidden`。 | `DescriptionItem[]` | 必填 |
| `title` / `columns` / `direction` | 标题、列数和排列方式。 | `string \| number \| "horizontal" \| "vertical"` | `"" / 2 / "vertical"` |
| `border` / `size` | 是否显示边框与内容尺寸。 | `boolean \| ControlSize` | `false / 继承全局配置` |
| `labelWidth` / `labelAlign` / `contentAlign` | 标签宽度与全局对齐。 | `string \| DescriptionAlign` | `"96px" / "left" / "left"` |
| `emptyText` / `ariaLabel` | 空值替代文本与辅助名称。 | `string` | `"—" / "详情字段"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `title` / `extra` | 自定义标题区与右侧扩展操作。 |
| `label-${key}` / `item-${key}` | 自定义某项标签或值，未提供 `key` 时使用索引。 |

### 4.3 Events

该组件不提供自定义事件。
