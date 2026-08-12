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

### 2.3 不同尺寸

`size` 以像素为单位控制图标大小，配合文字时可取与字号接近的值，保证视觉对齐。

```vue demo:svg-icon-sizes title="不同尺寸"
<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-demo-sizes">
    <AppSvgIcon name="calendar" :size="14" label="小尺寸" />
    <AppSvgIcon name="calendar" :size="18" label="默认尺寸" />
    <AppSvgIcon name="calendar" :size="24" label="大尺寸" />
    <AppSvgIcon name="calendar" :size="32" label="超大尺寸" />
  </div>
</template>

<style scoped>
.svg-icon-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-text);
}
</style>
```

### 2.4 颜色语义

图标继承当前文字颜色，通过外层容器的 `color` 表达状态语义，避免孤立地依赖颜色传递关键信息。

```vue demo:svg-icon-colors title="颜色语义"
<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-demo-colors">
    <span class="tone-default"><AppSvgIcon name="check" :size="18" label="成功" /> 完成</span>
    <span class="tone-danger"><AppSvgIcon name="warning" :size="18" label="警告" /> 注意</span>
    <span class="tone-muted"><AppSvgIcon name="bell" :size="18" label="消息" /> 通知</span>
  </div>
</template>

<style scoped>
.svg-icon-demo-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14px;
}
.svg-icon-demo-colors span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tone-default { color: var(--aps-success, #16a34a); }
.tone-danger { color: var(--aps-danger, #dc2626); }
.tone-muted { color: var(--aps-muted, #6b7280); }
</style>
```

### 2.5 带文字的元信息

把图标和文字放在同一行内，让元信息更易读；图标负责视觉锚点，文字负责准确含义。

```vue demo:svg-icon-list title="带文字的元信息"
<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "user", label: "用户" },
  { name: "settings", label: "设置" },
  { name: "bell", label: "通知" },
  { name: "search", label: "搜索" },
] as const;
</script>

<template>
  <div class="svg-icon-demo-list">
    <span v-for="item in items" :key="item.name">
      <AppSvgIcon :name="item.name" :size="18" :label="item.label" />
      {{ item.label }}
    </span>
  </div>
</template>

<style scoped>
.svg-icon-demo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--aps-text);
  font-size: 14px;
}
.svg-icon-demo-list span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
```

### 2.6 图标总览

需要挑选图标时，可直接遍历内置 `IconName` 集合渲染一张总览，方便设计与开发对齐。

```vue demo:svg-icon-grid title="图标总览"
<script setup lang="ts">
import { AppSvgIcon, type IconName } from "aps-design-pro";
import "aps-design-pro/style.css";

const iconNames: IconName[] = [
  "grid", "settings", "users", "shield", "menu", "search", "bell",
  "chevron-down", "plus", "minus", "dots", "arrow-up", "arrow-right",
  "logout", "panel", "close", "user", "refresh", "check", "warning",
  "edit", "trash", "columns", "sort", "sun", "moon", "lock", "eye",
  "arrow-left", "chevron-up", "filter", "fullscreen", "pin", "calendar",
];
</script>

<template>
  <div class="svg-icon-demo-grid">
    <div v-for="name in iconNames" :key="name" class="svg-icon-cell">
      <AppSvgIcon :name="name" :size="20" :label="name" />
      <code>{{ name }}</code>
    </div>
  </div>
</template>

<style scoped>
.svg-icon-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 10px;
}
.svg-icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px;
  border: 1px solid var(--aps-border);
  border-radius: 8px;
  color: var(--aps-text);
  font-size: 12px;
}
.svg-icon-cell code {
  color: var(--aps-muted);
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
