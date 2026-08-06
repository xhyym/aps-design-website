---
title: 徽标
component: AppBadge
category: base
source: packages/ui/src/components/base/AppBadge.vue
---

# 徽标（AppBadge）

`AppBadge` 用于将未读数量、待处理数量或“有更新”状态附着在一个明确的业务入口上。它只负责状态提示，不处理点击、跳转或数据请求；这些行为应由被包裹的组件承担。

## 1. 用处

- 在消息中心、订单列表、审批入口等位置提示待处理数量。
- 在通知、服务状态或菜单入口上使用状态点提示“有更新”。
- 为头像、图标按钮或普通按钮补充轻量提醒，而不改变原入口的交互行为。

不要用徽标替代错误原因、审批结论或风险说明；需要用户理解具体原因时，应使用 `AppAlert`、`AppStatePanel` 或列表中的状态文字。

## 2. 代码演示

### 2.1 数量徽标

```vue demo:badge-count title="数量徽标"
<script setup lang="ts">
import { AppBadge, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBadge :value="8" aria-label="待处理订单 8 条">
    <AppButton variant="secondary">待处理订单</AppButton>
  </AppBadge>
</template>
```

说明：`value` 是要展示的业务数量；`AppButton` 仍然是实际可点击入口。未传入内容插槽时，徽标自身仍能显示，但通常建议附着在可识别的业务对象上。

### 2.2 数量上限与颜色

```vue demo:badge-limit title="数量上限与颜色"
<script setup lang="ts">
import { AppBadge, AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBadge :value="128" :max="99" tone="blue" aria-label="通知中心未读消息超过 99 条">
    <AppIconButton icon="bell" label="查看通知中心" variant="secondary" />
  </AppBadge>
</template>
```

说明：当数值大于 `max` 时，显示文本会自动收敛为 `99+`。`tone` 只表达轻量提醒的视觉语义，不应作为错误、风险或审核结果的唯一判断依据。

### 2.3 仅提示有更新

```vue demo:badge-dot title="仅提示有更新"
<script setup lang="ts">
import { AppBadge, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBadge dot tone="green" aria-label="交付服务有新的状态更新">
    <AppButton variant="secondary">交付服务</AppButton>
  </AppBadge>
</template>
```

说明：`dot` 为 `true` 时不展示 `value`，只显示状态点。适合只能确认“是否有更新”、但没有可靠数量的场景。

### 2.4 控制零值、隐藏与位置

```vue
<script setup lang="ts">
import { ref } from "vue";
import { AppAvatar, AppBadge } from "aps-design-pro";
import "aps-design-pro/style.css";

const unreadCount = ref(0);
const isBadgeHidden = ref(false);
</script>

<template>
  <AppBadge
    :value="unreadCount"
    :show-zero="false"
    :hidden="isBadgeHidden"
    :offset="[2, -1]"
    aria-label="林知远的未读消息"
  >
    <AppAvatar name="林知远" size="large" />
  </AppBadge>
</template>
```

说明：

- `show-zero="false"` 时，数量为 `0` 不显示徽标。
- `hidden` 可临时隐藏徽标，但不会移除默认插槽中的头像或按钮。
- `offset` 使用 `[x, y]` 调整徽标相对右上角的位置，单位为 `px`；仅在包裹内容时生效。

## 3. API 使用方式

```vue
<AppBadge :value="unreadCount" :max="99" tone="red">
  <AppButton variant="secondary" @click="openInbox">收件箱</AppButton>
</AppBadge>
```

- 将 `value` 绑定到业务数据中的未读数或待处理数。
- 将需要点击的入口放入默认插槽；例如 `AppButton`、`AppIconButton`、`AppAvatar` 或导航项。
- 若数值来自异步请求，应由父级页面在请求成功后更新 `value`；`AppBadge` 不发起请求，也不维护业务数量。
- 徽标的状态元素带有 `role="status"` 与 `aria-live="polite"`。使用 `ariaLabel` 时，应提供完整业务语义，例如“通知中心未读消息 8 条”，而不是只写“8”。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 徽标展示内容；数值大于 `max` 时显示为 `max+`。 | `string \| number` | `""` |
| `max` | 数值徽标的最大展示值；内部会取不小于 `1` 的整数。 | `number` | `99` |
| `tone` | 徽标色调。 | `"blue" \| "red" \| "green" \| "orange" \| "neutral"` | `"red"` |
| `dot` | 是否只展示状态点；开启后不展示 `value`。 | `boolean` | `false` |
| `hidden` | 是否隐藏徽标；不会影响默认插槽内容。 | `boolean` | `false` |
| `showZero` | `value` 为数值 `0` 时是否展示徽标。 | `boolean` | `true` |
| `offset` | 相对右上角的偏移量 `[x, y]`，单位为 `px`。 | `[number, number]` | `undefined` |
| `ariaLabel` | 状态元素供屏幕阅读器读取的文本；未传入时，状态点读取“有新消息”，数值读取实际展示值。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 被徽标附着的业务入口或内容，例如按钮、图标按钮、头像、导航项。 |

### 4.3 Events

`AppBadge` 不提供自定义事件。点击、键盘操作等事件应绑定在默认插槽中的实际交互组件上。
