---
title: 按钮组
component: AppButtonGroup
category: base
source: packages/ui/src/components/base/AppButtonGroup.vue
---

# 按钮组（AppButtonGroup）

`AppButtonGroup` 用于表达一组同级且相互关联的 `AppButton`。它只负责组合边框、方向与分组语义，不替代业务中的选中状态或点击逻辑。

## 1. 用处

按钮组用于表达同一任务下的并列操作，例如批量处理、视图切换或导入流程。只有动作属于同一层级时才拼接按钮；主操作和危险操作应保持清晰的视觉区分。

## 2. 代码演示

### 2.1 紧凑的相邻操作

```vue demo:button-group-basic title="相邻操作"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="课程批量操作">
    <AppButton variant="secondary">导出</AppButton>
    <AppButton variant="secondary">归档</AppButton>
    <AppButton variant="secondary">删除</AppButton>
  </AppButtonGroup>
</template>
```

`attached` 默认为 `true`，相邻的 `AppButton` 会共用边框。它适合少量、同层级且可并列理解的操作；保存、删除这类风险不同的动作通常不应强制拼成一组。

### 2.2 垂直排列或保留间距

```vue demo:button-group-vertical title="纵向流程"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup direction="vertical" :attached="false" aria-label="导入流程">
    <AppButton variant="secondary">下载模板</AppButton>
    <AppButton variant="secondary">选择文件</AppButton>
  </AppButtonGroup>
</template>
```

`attached="false"` 保留组件间 `8px` 间距。拼接规则只针对 `AppButton` 的根样式；其他类型的内容可放进插槽，但不会自动获得相连按钮的圆角处理。

## 3. API 使用方式

使用 `direction` 决定排列方向，使用 `attached` 决定按钮是否共享边框。按钮本身的 `variant`、`size` 和事件仍由子级 `AppButton` 负责。

```vue
<AppButtonGroup direction="horizontal" :attached="false" aria-label="导出格式">
  <AppButton variant="secondary" size="small">CSV</AppButton>
  <AppButton variant="secondary" size="small">Excel</AppButton>
</AppButtonGroup>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` | 按钮组主轴方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `attached` | 是否消除相邻 `AppButton` 的间距并拼接边框。 | `boolean` | `true` |
| `ariaLabel` | `role="group"` 的辅助说明。 | `string` | `"按钮组"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 建议放置同一层级的 `AppButton`。 |

### 4.3 Events

按钮组本身不提供自定义事件；事件绑定在各个按钮上。
