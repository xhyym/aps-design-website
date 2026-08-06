---
title: 空状态
component: AppEmptyState
category: feedback
source: packages/ui/src/components/feedback/AppEmptyState.vue
---

# 空状态（AppEmptyState）

`AppEmptyState` 用于说明页面没有可展示的数据，并在合适时引导用户创建内容或调整筛选条件。

## 1. 用处

- 表格、列表和内容区首次进入且没有数据时提供清晰反馈。
- 通过描述解释“为什么为空”，而不是只显示“暂无数据”。
- 用 `actionText` 为创建、清除筛选等下一步提供入口。

网络异常应使用错误状态组件，加载期间应使用骨架屏或加载状态，而不是空状态。

## 2. 代码演示

### 2.1 筛选后无结果

```vue demo:empty-state-basic title="无结果"
<script setup lang="ts">
import { AppEmptyState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppEmptyState title="暂无课程数据" description="更换筛选条件，或稍后刷新页面再试。" />
</template>
```

### 2.2 首次创建引导

```vue demo:empty-state-action title="创建引导"
<script setup lang="ts">
import { AppEmptyState } from "aps-design-pro";
import "aps-design-pro/style.css";

function createCourse(): void {
  console.info("用户准备创建首个课程");
}
</script>

<template>
  <AppEmptyState title="还没有课程" description="创建课程后，可在这里管理销售与学习数据。" icon="grid" action-text="创建课程" @action="createCourse" />
</template>
```

## 3. API 使用方式

空状态由父级数据条件控制；当列表为空且不处于加载态时才显示。

```vue
<AppEmptyState v-if="!loading && !courses.length" action-text="新建课程" @action="openCreateDialog" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` / `description` | 空状态标题与说明。 | `string` | `"暂无数据" / "当前条件下没有可展示的内容。"` |
| `icon` | 语义图标名称。 | `IconName` | `"grid"` |
| `actionText` | 有值时显示操作按钮。 | `string` | `""` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `action` | — | 点击操作按钮时触发。 |
