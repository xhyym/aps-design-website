---
title: 头像
component: AppAvatar
category: base
source: packages/ui/src/components/base/AppAvatar.vue
---

# 头像（AppAvatar）

`AppAvatar` 用于稳定展示用户、成员或实体的身份入口。它内置图片失败回退、姓名缩写和图标回退，不需要业务层为了加载异常再维护一套条件渲染。

## 1. 用处

- 在成员列表、评论、审批流等位置展示人物身份。
- 有图片时优先展示图片；无图片或图片加载失败时，回退为插槽、`icon`、`initials` 或 `name`。
- 用统一的尺寸与形状保证列表、卡片和顶部栏中的头像节奏一致。

## 2. 代码演示

### 2.1 姓名与缩写回退

```vue demo:avatar-fallback title="姓名与缩写回退"
<script setup lang="ts">
import { AppAvatar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-list">
    <AppAvatar name="林知远" size="large" aria-label="林知远的头像" />
    <AppAvatar initials="周" size="large" shape="square" aria-label="周同学的头像" />
  </div>
</template>

<style scoped>
.avatar-demo-list {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
```

未传入 `src` 时，组件会优先显示 `initials`，否则依据 `name` 生成回退文本。图片请求失败后也会使用同一套回退逻辑，并触发 `error`。`alt` 用于图片替代文本；若需要覆盖整个头像的辅助说明，使用 `ariaLabel`。

### 2.2 业务定制的回退内容

默认插槽只在没有可用图片时出现，适合放置业务自己的占位图标或缩写规则：

```vue demo:avatar-slot title="自定义回退内容"
<script setup lang="ts">
import { AppAvatar, AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppAvatar shape="square" :size="40" aria-label="课程空间">
    <AppIcon name="panel" :size="20" />
  </AppAvatar>
</template>
```

不要把头像作为纯装饰容器来塞入复杂按钮或菜单；可点击行为应放在头像外层的链接或按钮上。

## 3. API 使用方式

优先传入稳定的 `src`，并同时提供 `alt` 或 `ariaLabel`。图片不存在时，组件会按“默认插槽 → `icon` → `initials` → `name`”的顺序回退。列表中建议固定 `size` 和 `shape`，避免头像尺寸随数据变化造成布局跳动。

```vue
<AppAvatar
  :src="member.avatarUrl"
  :src-set="member.avatarSet"
  :name="member.name"
  :alt="`${member.name}的头像`"
  size="small"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 图片地址；有值时优先加载图片。 | `string` | `""` |
| `srcSet` | 响应式图片候选集，会传给原生 `img[srcset]`。 | `string` | `""` |
| `sizes` | 响应式图片尺寸描述，会传给原生 `img[sizes]`。 | `string` | `""` |
| `alt` | 图片替代文本；未设置 `ariaLabel` 时也参与生成默认说明。 | `string` | `""` |
| `ariaLabel` | 覆盖头像的辅助说明。 | `string` | `""` |
| `name` | 回退名称；单个名称取末两位，多词名称取各词首字母。 | `string` | `""` |
| `initials` | 显式指定回退文本，优先级高于 `name`。 | `string` | `""` |
| `icon` | 无图片时展示的内置图标；优先级低于默认插槽。 | `IconName` | `undefined` |
| `size` | 头像尺寸。数值会向下限制为不小于 `20px` 的整数。 | `"small" \| "default" \| "large" \| number` | `"default"` |
| `shape` | 外观形状。 | `"circle" \| "square"` | `"circle"` |
| `fit` | 图片填充模式，对应 CSS `object-fit`。 | `"cover" \| "contain" \| "fill" \| "none" \| "scale-down"` | `"cover"` |

### 4.2 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `load` | `(event: Event)` | 图片加载成功后触发。 |
| `error` | `(event: Event)` | 图片加载失败后触发；组件随后显示回退内容。 |

### 4.3 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义回退内容，仅在无可用图片时渲染。 |
