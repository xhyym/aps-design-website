---
title: 容器头部
component: AppContainerHeader
category: layout
source: packages/ui/src/components/layout/AppContainerHeader.vue
---

# 容器头部（AppContainerHeader）

`AppContainerHeader` 为容器顶部提供统一高度、横向内边距和垂直居中的内容基线。

## 1. 用处

- 用于页面内工作区的标题、筛选摘要或工具栏，而不是文档标题。
- 以不同 `size` 匹配紧凑工具条和较正式的页面头部。
- 用 `bordered` 明确分隔头部和可滚动主体。

## 2. 代码演示

### 2.1 头部边界

```vue demo:layout-container-header-basic title="基础头部"
<script setup lang="ts">
import { AppContainerHeader, AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-shell">
    <AppContainerHeader bordered>成员管理</AppContainerHeader>
    <AppDivider />
    <AppContainerHeader padding="compact">紧凑工具栏</AppContainerHeader>
  </div>
</template>

<style scoped>
.demo-shell { width: min(100%, 480px); border: 1px solid var(--aps-line-soft); }
.demo-shell :deep(.app-divider) { margin: 0; }
</style>
```

### 2.2 高度与内边距

```vue demo:layout-container-header-size title="尺寸档位"
<script setup lang="ts">
import { AppContainerHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-stack">
    <AppContainerHeader size="small">小尺寸头部</AppContainerHeader>
    <AppContainerHeader size="large" padding="spacious">宽松尺寸头部</AppContainerHeader>
  </div>
</template>

<style scoped>
.demo-stack { display: grid; width: min(100%, 480px); gap: 10px; }
.demo-stack :deep(.app-container-header) { border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```

## 3. API 使用方式

```vue
<AppContainerHeader size="default" padding="default" bordered>
  <AppSpace justify="between" fill>
    <strong>客户列表</strong>
    <AppButton size="small">新增客户</AppButton>
  </AppSpace>
</AppContainerHeader>
```

该组件为 Flex 容器，多个直接子项会横向排列；需要把标题与操作推向两侧时可在槽位内配合 `AppSpace`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 最小高度档位。 | `"small" \| "default" \| "large"` | `"default"` |
| `padding` | 水平内边距档位。 | `"none" \| "compact" \| "default" \| "spacious"` | `"default"` |
| `bordered` | 是否显示底部分隔线。 | `boolean` | `false` |
| `ariaLabel` | 头部区域的可访问名称。 | `string` | `"容器头部"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 标题、筛选摘要或工具栏内容。 |
