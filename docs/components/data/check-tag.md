---
title: 可选标签
component: AppCheckTag
category: data
source: packages/ui/src/components/data/AppCheckTag.vue
---

# 可选标签（AppCheckTag）

`AppCheckTag` 以紧凑的标签形态管理单个布尔筛选或状态，适合不需要表单布局的快捷选择。

## 1. 用处

- 管理列表中的快捷筛选条件。
- 在多个轻量条件之间保留明确的已选状态。
- 用 `v-model` 直接同步业务布尔值。

## 2. 代码演示

### 2.1 基础选择

```vue demo:check-tag-basic title="基础选择"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref(true);
</script>

<template><AppCheckTag v-model="selected" label="已上架" /></template>
```

### 2.2 作为筛选条件

```vue demo:check-tag-filter title="筛选条件"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref(false);
</script>

<template><AppCheckTag v-model="selected" tone="green">仅显示有库存</AppCheckTag></template>
```

## 3. API 使用方式

将选中状态连接到筛选参数；变化后由页面决定刷新本地列表还是重新请求数据。

```vue
<AppCheckTag v-model="query.onlyPublished" @change="loadCourses">已上架</AppCheckTag>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中状态，配合 `v-model` 使用。 | `boolean` | 必填 |
| `label` | 无默认插槽时显示的标签文字。 | `string` | `""` |
| `tone` | 选中后的语义色调。 | `"blue" \| "green" \| "orange" \| "red" \| "neutral"` | `"blue"` |
| `size` / `disabled` | 尺寸与禁用状态。 | `ControlSize \| boolean` | 继承全局配置 |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义标签文字。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: boolean)` | 点击切换后触发。 |
