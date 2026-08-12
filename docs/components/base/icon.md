---
title: 图标
component: AppIcon
category: base
source: packages/ui/src/components/base/AppIcon.vue
---

# 图标（AppIcon）

`AppIcon` 提供组件库内置的线性 SVG 图标。图标使用 `currentColor`，颜色由外层文字色或组件状态决定，不需要单独传入颜色值。

## 1. 用处

`AppIcon` 提供统一的内置线性图标，适合辅助说明状态、栏目或文字。图标颜色继承 `currentColor`，应与附近文字一起表达含义；单独承担点击动作时改用 `AppIconButton`。

## 2. 代码演示

### 2.1 用于非交互性提示

```vue demo:icon-status title="状态提示图标"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p class="sync-status">
    <AppIcon name="check" :size="16" />
    最近一次同步已完成
  </p>
</template>

<style scoped>
.sync-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: var(--aps-muted);
  font-size: 14px;
}

.sync-status :deep(svg) {
  color: var(--aps-green);
}
</style>
```

`AppIcon` 本身带有 `aria-hidden="true"`，适合文字已表达含义时的辅助视觉元素。图标单独作为可点击入口时，应使用带有 `label` 的 [AppIconButton](./icon-button.md)。

### 2.2 功能入口中的图标与文字

将图标与文字放在一起时，图标仅作为视觉辅助，文字仍是可识别的业务名称：

```vue demo:icon-gallery title="功能入口"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const featureIcons = [
  { name: "calendar", label: "排期" },
  { name: "users", label: "成员" },
  { name: "chart", label: "数据" },
  { name: "settings", label: "设置" },
] as const;
</script>

<template>
  <ul class="icon-gallery" aria-label="工作台功能入口示例">
    <li v-for="item in featureIcons" :key="item.name">
      <AppIcon :name="item.name" :size="18" />
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<style scoped>
.icon-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin: 0;
  padding: 0;
  color: var(--aps-muted);
  font-size: 14px;
  list-style: none;
}

.icon-gallery li {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
</style>
```

### 2.3 基础图标

常用内置图标通过 `name` 指定，`size` 控制像素尺寸，颜色继承就近文字色。

```vue demo:icon-basic title="基础图标"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const names = ["grid", "users", "settings", "search", "bell", "check", "calendar", "chart"] as const;
</script>

<template>
  <div class="icon-demo-basic">
    <AppIcon v-for="name in names" :key="name" :name="name" :size="20" />
  </div>
</template>

<style scoped>
.icon-demo-basic {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  color: var(--aps-ink);
}
</style>
```

### 2.4 尺寸

`size` 为 SVG 的宽高像素值，同一图标可在不同场景放大或缩小。

```vue demo:icon-sizes title="尺寸"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-sizes">
    <AppIcon name="settings" :size="16" />
    <AppIcon name="settings" :size="24" />
    <AppIcon name="settings" :size="32" />
    <AppIcon name="settings" :size="48" />
  </div>
</template>

<style scoped>
.icon-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-ink);
}
</style>
```

### 2.5 颜色

图标使用 `currentColor`，颜色由外层文字色决定；用包裹元素的 `color` 即可表达语义。

```vue demo:icon-color title="颜色"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "check", color: "var(--aps-green, #2da44e)" },
  { name: "warning", color: "var(--aps-orange, #bc4c00)" },
  { name: "trash", color: "var(--aps-red, #e5484d)" },
  { name: "bell", color: "var(--aps-blue, #0a6cdf)" },
] as const;
</script>

<template>
  <div class="icon-demo-color">
    <span v-for="item in items" :key="item.name" :style="{ color: item.color }">
      <AppIcon :name="item.name" :size="22" />
    </span>
  </div>
</template>

<style scoped>
.icon-demo-color {
  display: flex;
  gap: 16px;
}
</style>
```

### 2.6 与文字混排

图标只作视觉辅助，文字仍是可识别的业务含义；可访问性依赖旁边的文字而非图标本身。

```vue demo:icon-with-text title="与文字混排"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-text">
    <p class="icon-demo-text__row"><AppIcon name="check" :size="16" /> 配置已保存</p>
    <p class="icon-demo-text__row"><AppIcon name="warning" :size="16" /> 有 2 项待处理</p>
    <p class="icon-demo-text__row"><AppIcon name="refresh" :size="16" /> 正在同步</p>
  </div>
</template>

<style scoped>
.icon-demo-text {
  display: grid;
  gap: 10px;
}

.icon-demo-text__row {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: var(--aps-muted);
  font-size: 14px;
}
</style>
```

### 2.7 用于按钮

需要图标承载操作含义时，优先使用 `AppButton` 的 `leadingIcon` / `trailingIcon`，或直接用 `AppIconButton`。

```vue demo:icon-in-button title="用于按钮"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-button">
    <AppButton leading-icon="plus">新建</AppButton>
    <AppButton variant="secondary" leading-icon="download">导出</AppButton>
    <AppButton variant="ghost" leading-icon="refresh">刷新</AppButton>
  </div>
</template>

<style scoped>
.icon-demo-button {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
```

### 2.8 全部图标

内置 `IconName` 为受约束的联合类型，以下为当前全部可用图标，可直接复制到 `name` 中使用。

```vue demo:icon-grid title="全部内置图标"
<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const iconNames = [
  "grid", "settings", "users", "shield", "menu", "search", "bell",
  "chevron-down", "chevron-left", "chevron-right", "chevron-up",
  "plus", "minus", "dots", "arrow-up", "arrow-right", "arrow-left",
  "logout", "panel", "close", "user", "refresh", "check", "warning", "edit", "trash",
  "columns", "sort", "sun", "moon", "lock", "eye", "eye-off", "filter",
  "fullscreen", "fullscreen-exit", "pin", "calendar", "clock", "chart",
  "play", "pause", "volume", "volume-off", "drag", "download", "print",
  "zoom-in", "zoom-out", "copy",
] as const;
</script>

<template>
  <ul class="icon-demo-grid" aria-label="全部内置图标">
    <li v-for="name in iconNames" :key="name">
      <AppIcon :name="name" :size="20" />
      <code>{{ name }}</code>
    </li>
  </ul>
</template>

<style scoped>
.icon-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.icon-demo-grid li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 10px;
  color: var(--aps-ink);
}

.icon-demo-grid code {
  font-size: 11px;
  color: var(--aps-faint);
}
</style>
```

## 3. API 使用方式

使用 `name` 指定内置图标，`size` 使用像素值控制宽高。组件带有 `aria-hidden="true"`，因此必须在旁边提供文字，或用带 `label` 的图标按钮承载可操作含义。

```vue
<span class="status-text">
  <AppIcon name="warning" :size="16" />
  有 2 项配置待处理
</span>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 必填，内置图标名称。 | `IconName` | — |
| `size` | SVG 的宽高，单位为像素。 | `number` | `18` |

### 4.2 Slots

`AppIcon` 没有插槽。

### 4.3 Events

`AppIcon` 没有自定义事件。

## 图标名称参考

内置 `IconName` 包含以下图标：

```text
grid settings users shield menu search bell
chevron-down chevron-left chevron-right chevron-up
plus minus dots arrow-up arrow-right arrow-left
logout panel close user refresh check warning edit trash
columns sort sun moon lock eye eye-off filter
fullscreen fullscreen-exit pin calendar clock chart
play pause volume volume-off drag download print
zoom-in zoom-out copy
```

图标名称是受 TypeScript 约束的联合类型。若业务需要品牌图标、文件类型图标或复杂插画，应使用自己的 SVG 资源，而不是扩展该基础图标组件。
