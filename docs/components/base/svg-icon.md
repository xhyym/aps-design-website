---
title: SVG 图标
component: AppSvgIcon
category: base
source: packages/ui/src/components/base/AppSvgIcon.vue
---

# SVG 图标（AppSvgIcon）

`AppSvgIcon` 是 `AppIcon` 的行内包装组件，提供统一的垂直对齐和可选 `aria-label`。适用于内容区的图标与文字组合。

## 1. 用处

`AppSvgIcon` 是面向内容区的行内图标包装组件。它在 `AppIcon` 之上补充了统一的行内对齐和可选辅助说明，适合元信息、状态文字、描述列表等非交互性内容。

## 2. 代码演示

### 2.1 行内提示图标

```vue demo:svg-icon-basic title="行内元信息"
<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <span>
    <AppSvgIcon name="calendar" :size="16" label="发布时间" />
    2026-08-06 发布
  </span>
</template>
```

它内部仍使用同一套 `IconName` 图标。`label` 会写到包装元素的 `aria-label`；当旁边已有完整文字时，通常不需要额外传入。

### 2.2 多项元信息

多个元信息并排展示时，使用同一尺寸的图标和稳定的行内间距：

```vue demo:svg-icon-meta title="多项元信息"
<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-meta">
    <span><AppSvgIcon name="clock" :size="15" /> 预计 10 分钟完成</span>
    <span><AppSvgIcon name="users" :size="15" /> 8 位协作者</span>
  </div>
</template>

<style scoped>
.svg-icon-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--aps-muted);
  font-size: 14px;
}

.svg-icon-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
</style>
```

## 3. API 使用方式

传入 `name` 和需要的像素尺寸即可。旁边已经有完整文案时，通常不用设置 `label`；当图标本身需要被单独读取时，再传入简短的业务说明。

```vue
<AppSvgIcon name="calendar" :size="16" label="发布时间" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 必填，内置图标名称。 | `IconName` | — |
| `size` | 图标尺寸，单位为像素。 | `number` | `18` |
| `label` | 包装元素的辅助说明。 | `string` | `""` |

### 4.2 Slots

`AppSvgIcon` 没有插槽。

### 4.3 Events

`AppSvgIcon` 没有自定义事件。需要可点击图标时使用 `AppIconButton`。
