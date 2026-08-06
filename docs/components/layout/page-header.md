---
title: 页面标题
component: AppPageHeader
category: layout
source: packages/ui/src/components/layout/AppPageHeader.vue
---

# 页面标题（AppPageHeader）

`AppPageHeader` 用于页面或大型内容区开头的标题、说明与右侧主要操作，和 `AppHeaderBar` 的应用级标题栏用途不同。

## 1. 用处

- 在详情页、列表页开头说明当前页面的目标与范围。
- 使用描述文本补充面向业务人员的上下文，而不是把说明分散在工具提示中。
- 通过 `actions` 插槽放置创建、保存等页面级主要操作。

## 2. 代码演示

### 2.1 标题与说明

```vue demo:layout-page-header-basic title="基础页面标题"
<script setup lang="ts">
import { AppPageHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageHeader title="订单管理" description="查看订单状态、发货进度与售后处理情况。" class="demo-page-header" />
</template>

<style scoped>
.demo-page-header { width: min(100%, 560px); }
</style>
```

### 2.2 页面级操作

```vue demo:layout-page-header-actions title="操作插槽"
<script setup lang="ts">
import { AppButton, AppPageHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageHeader title="成员管理" description="邀请团队成员并配置其可访问的工作区。" class="demo-page-header">
    <template #actions><AppButton>邀请成员</AppButton></template>
  </AppPageHeader>
</template>

<style scoped>
.demo-page-header { width: min(100%, 560px); }
</style>
```

## 3. API 使用方式

```vue
<AppPageHeader title="应用设置" description="管理成员、通知方式和安全策略。">
  <template #actions><AppButton>保存设置</AppButton></template>
</AppPageHeader>
```

标题为必填项。小屏幕下操作区会自然换行到标题下方，业务代码无需单独编写断点。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 页面主标题。 | `string` | — |
| `description` | 标题下方的说明文本。 | `string` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 标题右侧的页面级操作。 |
