---
title: 栅格列
component: AppCol
category: layout
source: packages/ui/src/components/layout/AppCol.vue
---

# 栅格列（AppCol）

`AppCol` 是 24 栅格系统的列单元，通过 `span`、`offset` 和响应式断点在 `AppRow` 中定义内容宽度。

## 1. 用处

- 将同一组字段或卡片在桌面端并排、在窄屏设备上纵向堆叠。
- 用 `offset` 在 24 栅格内实现对称留白，而不是手写百分比外边距。
- 通过断点对象同时定义宽度与偏移，满足复杂的自适应表单。

每个断点只会覆盖被明确传入的配置；未声明的断点会回退到默认 `span` 与 `offset`。

## 2. 代码演示

### 2.1 响应式列宽

```vue demo:layout-col-responsive title="响应式栅格"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="16" class="demo-row">
    <AppCol :xs="24" :sm="12" :lg="8"><div>响应列 A</div></AppCol>
    <AppCol :xs="24" :sm="12" :lg="8"><div>响应列 B</div></AppCol>
    <AppCol :xs="24" :sm="24" :lg="8"><div>响应列 C</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 14px; border-radius: 8px; background: var(--aps-blue-soft); color: var(--aps-blue); text-align: center; }
</style>
```

### 2.2 偏移列

```vue demo:layout-col-offset title="列偏移"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="16" class="demo-row">
    <AppCol :span="8" :offset="4"><div>居中 8 列</div></AppCol>
    <AppCol :span="6" :offset="2"><div>偏移 2 列</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 14px; border-radius: 8px; background: var(--aps-surface-soft); color: var(--aps-muted); text-align: center; }
</style>
```

## 3. API 使用方式

```vue
<AppRow :gutter="16">
  <AppCol :xs="24" :md="{ span: 12, offset: 6 }"><AppCard>居中内容</AppCard></AppCol>
</AppRow>
```

数字响应式配置只设置 `span` 且 `offset` 为 0；若断点同时需要偏移，传入 `{ span, offset }` 对象。`span` 会限制在 1 至 24，`offset` 会限制在 0 至 23。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tag` | 最外层语义标签。 | `"div" \| "section" \| "article" \| "aside"` | `"div"` |
| `span` | 默认列宽，取 24 栅格中的份数。 | `number` | `24` |
| `offset` | 默认左侧偏移栅格数。 | `number` | `0` |
| `xs` | 小于 768px 的列配置。 | `number \| AppColResponsiveConfig` | `undefined` |
| `sm` | 768px 及以上的列配置。 | `number \| AppColResponsiveConfig` | `undefined` |
| `md` | 992px 及以上的列配置。 | `number \| AppColResponsiveConfig` | `undefined` |
| `lg` | 1200px 及以上的列配置。 | `number \| AppColResponsiveConfig` | `undefined` |
| `xl` | 1920px 及以上的列配置。 | `number \| AppColResponsiveConfig` | `undefined` |

`AppColResponsiveConfig` 结构为 `{ span?: number; offset?: number }`。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 当前列中的业务内容。 |
