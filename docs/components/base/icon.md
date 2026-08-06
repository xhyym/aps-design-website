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
