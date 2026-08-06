---
title: 分隔线
component: AppDivider
category: layout
source: packages/ui/src/components/layout/AppDivider.vue
---

# 分隔线（AppDivider）

`AppDivider` 在内容分组之间提供语义化的水平或垂直边界，并可在水平分隔线上承载短标签。

## 1. 用处

- 分开同一页面中连续但属于不同时间、状态或主题的信息。
- 用短标签标记“今天”“更多设置”等上下文切换点。
- 在紧凑操作组中使用垂直分隔线，而不是用字符模拟分隔符。

标签应当足够短；复杂说明请直接使用标题或说明文字，避免让分隔线承担内容层级。

## 2. 代码演示

### 2.1 带标签的水平分隔线

```vue demo:layout-divider-label title="标签与线型"
<script setup lang="ts">
import { AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-copy">
    <p>最新动态</p>
    <AppDivider label="今天" position="left" border-style="dashed" :margin="18" />
    <p>已完成移动端验收。</p>
  </div>
</template>

<style scoped>
.demo-copy { width: min(100%, 480px); color: var(--aps-ink); }
.demo-copy p { margin: 0; }
</style>
```

### 2.2 操作间的垂直分隔

```vue demo:layout-divider-vertical title="垂直分隔线"
<script setup lang="ts">
import { AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-actions">
    <span>已保存</span>
    <AppDivider direction="vertical" border-style="dotted" />
    <button type="button">查看历史</button>
  </div>
</template>

<style scoped>
.demo-actions { display: inline-flex; align-items: center; gap: 12px; color: var(--aps-muted); }
.demo-actions button { padding: 0; border: 0; background: transparent; color: var(--aps-blue); font: inherit; }
</style>
```

## 3. API 使用方式

```vue
<AppDivider orientation="horizontal" content-position="right" border-style="solid">
  高级选项
</AppDivider>
```

`orientation` 与 `direction`、`contentPosition` 与 `position` 是兼容别名；同时传入时，前者优先。垂直模式不会渲染标签内容。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` / `orientation` | 分隔线方向，`orientation` 优先。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `position` / `contentPosition` | 水平标签的位置，`contentPosition` 优先。 | `"left" \| "center" \| "right"` | `"center"` |
| `borderStyle` | 边线样式。 | `"solid" \| "dashed" \| "dotted"` | `"solid"` |
| `label` | 无默认插槽时显示的标签。 | `string` | `""` |
| `margin` | 分隔线上下边距，单位为像素。 | `number` | `undefined` |
| `ariaLabel` | 无标签时的可访问名称。 | `string` | `"分隔线"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 覆盖 `label` 的水平分隔线标签内容。 |
