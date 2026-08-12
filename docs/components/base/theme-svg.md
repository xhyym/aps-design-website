---
title: 主题 SVG 图标
component: AppThemeSvg
category: base
source: packages/ui/src/components/base/AppThemeSvg.vue
---

# 主题 SVG 图标（AppThemeSvg）

`AppThemeSvg` 是 `AppSvgIcon` 的兼容别名，Props 会原样转交给 `AppSvgIcon`。它不维护另一套图标资源，也没有额外主题计算逻辑。

## 1. 用处

`AppThemeSvg` 是 `AppSvgIcon` 的兼容别名，用于平滑迁移已有业务代码。它不维护额外图标资源，也不额外计算主题；新页面优先使用 `AppSvgIcon` 保持命名一致。

## 2. 代码演示

### 2.1 兼容已有业务代码

```vue demo:theme-svg-basic title="兼容图标入口"
<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
</script>

<template>
  <AppThemeSvg name="settings" :size="18" label="偏好设置" />
</template>
```

新代码优先使用 [AppSvgIcon](./svg-icon.md)，以免同一类图标在项目中出现两种命名。只有迁移旧页面或对外兼容既有 API 时使用 `AppThemeSvg`。

### 2.2 与现有元信息并排使用

旧模块迁移时可以保留 `AppThemeSvg` 的导入和 Props 写法，渲染效果与 `AppSvgIcon` 一致：

```vue demo:theme-svg-metadata title="兼容元信息"
<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="theme-svg-demo">
    <span><AppThemeSvg name="bell" :size="16" label="消息提醒" /> 消息提醒</span>
    <span><AppThemeSvg name="settings" :size="20" label="偏好设置" /> 偏好设置</span>
  </div>
</template>

<style scoped>
.theme-svg-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--aps-muted);
  font-size: 14px;
}

.theme-svg-demo span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
```

### 2.3 不同尺寸

`size` 同样以像素为单位，迁移旧代码时可直接沿用原来的尺寸写法。

```vue demo:theme-svg-sizes title="不同尺寸"
<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
</script>

<template>
  <div class="theme-svg-demo-sizes">
    <AppThemeSvg name="settings" :size="16" label="小" />
    <AppThemeSvg name="settings" :size="22" label="中" />
    <AppThemeSvg name="settings" :size="30" label="大" />
  </div>
</template>

<style scoped>
.theme-svg-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-text);
}
</style>
```

### 2.4 带文字的元信息

与 `AppSvgIcon` 写法一致，适合在迁移阶段保留旧导入名而不改变渲染效果。

```vue demo:theme-svg-list title="带文字的元信息"
<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "bell", label: "消息" },
  { name: "user", label: "用户" },
  { name: "calendar", label: "日历" },
] as const;
</script>

<template>
  <div class="theme-svg-demo-list">
    <span v-for="item in items" :key="item.name">
      <AppThemeSvg :name="item.name" :size="18" :label="item.label" />
      {{ item.label }}
    </span>
  </div>
</template>

<style scoped>
.theme-svg-demo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14px;
  color: var(--aps-text);
}
.theme-svg-demo-list span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
```

### 2.5 在状态文案中使用

旧模块迁移时把图标嵌入状态提示，渲染结果与新组件完全一致。

```vue demo:theme-svg-context title="在状态文案中使用"
<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="theme-svg-demo-context">
    <span><AppThemeSvg name="bell" :size="16" label="消息提醒" /> 您有 3 条新消息</span>
    <span><AppThemeSvg name="settings" :size="16" label="偏好设置" /> 偏好设置已更新</span>
  </div>
</template>

<style scoped>
.theme-svg-demo-context {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--aps-muted);
  font-size: 14px;
}
.theme-svg-demo-context span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
```

## 3. API 使用方式

调用方式与 `AppSvgIcon` 完全相同。只在保留旧 API 或分阶段迁移时使用；不要在同一个新模块中混用两个命名。

```vue
<AppThemeSvg name="settings" :size="18" label="偏好设置" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 必填，转交给 `AppSvgIcon` 的内置图标名称。 | `IconName` | — |
| `size` | 转交给 `AppSvgIcon` 的图标尺寸。 | `number` | `18` |
| `label` | 转交给 `AppSvgIcon` 的辅助说明。 | `string` | `""` |

### 4.2 Slots

该组件没有插槽。

### 4.3 Events

该组件没有自定义事件。
