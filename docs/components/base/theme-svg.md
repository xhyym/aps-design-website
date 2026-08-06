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
