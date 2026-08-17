---
title: 菜单
component: AppMenu
category: navigation
source: packages/ui/src/components/navigation/AppMenu.vue
---

# 菜单（AppMenu）

`AppMenu` 是通用的层级菜单，负责当前项、展开项与禁用项状态；路由切换由 `select` 事件交给应用处理。

## 1. 用处

- 在侧栏、局部工具区或水平模块导航中展示稳定的菜单层级。
- 可受控地同步当前项，并默认展开当前项的父级。
- `uniqueOpened` 适合空间有限的侧栏，避免多个一级组同时展开。

## 2. 代码演示

### 2.1 垂直层级菜单

```vue demo:menu-basic title="垂直层级菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppMenu, type MenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("overview");
const items: MenuItem[] = [
  { key: "overview", label: "经营概览", icon: "chart" },
  { key: "orders", label: "订单管理", icon: "grid", children: [{ key: "all-orders", label: "全部订单" }, { key: "returns", label: "退款售后" }] },
  { key: "settings", label: "系统设置", icon: "settings" },
];
</script>

<template>
  <AppMenu v-model="activeKey" :items="items" :default-openeds="['orders']" />
  <p class="result">当前选中：{{ activeKey }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
```

父项有 `children` 时只负责展开和收起；叶子项被选择时才会更新 `v-model`。

### 2.2 水平菜单

```vue demo:menu-horizontal title="水平菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppMenu, type MenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("home");
const items: MenuItem[] = [
  { key: "home", label: "首页", icon: "grid" },
  { key: "report", label: "经营报表", icon: "chart" },
  { key: "settings", label: "设置", icon: "settings" },
];
</script>

<template>
  <AppMenu v-model="activeKey" mode="horizontal" :items="items" />
</template>
```

水平模式适合少量同级入口；复杂、多级的主导航建议使用 `AppHorizontalMenu`。


### 2.3 收起模式

```vue demo:nav-menu-collapse title="收起模式"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", icon: "grid" as const },
  { key: "b", label: "订单", icon: "chart" as const, children: [
    { key: "b1", label: "全部订单" },
    { key: "b2", label: "退款" },
  ] },
  { key: "c", label: "设置", icon: "settings" as const },
];
</script>

<template>
  <AppMenu :items="items" default-active="b1" :collapse="true" />
</template>
```

### 2.4 水平模式

```vue demo:nav-menu-horizontal title="水平模式"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "工作台" },
  { key: "b", label: "订单中心", children: [
    { key: "b1", label: "订单列表" },
    { key: "b2", label: "售后" },
  ] },
  { key: "c", label: "报表" },
];
</script>

<template>
  <AppMenu :items="items" mode="horizontal" default-active="a" />
</template>
```

### 2.5 带图标与角标

```vue demo:nav-menu-icons title="带图标与角标"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "消息", icon: "bell" as const, badge: 9 },
  { key: "b", label: "任务", icon: "check" as const, badge: "new" },
  { key: "c", label: "设置", icon: "settings" as const },
];
</script>

<template>
  <AppMenu :items="items" default-active="a" />
</template>
```

### 2.6 单展开

```vue demo:nav-menu-unique title="单展开"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "一级 A", children: [
    { key: "a1", label: "A-1" },
    { key: "a2", label: "A-2" },
  ] },
  { key: "b", label: "一级 B", children: [
    { key: "b1", label: "B-1" },
    { key: "b2", label: "B-2" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" :unique-opened="true" default-active="a1" :default-openeds="['a']" />
</template>
```

### 2.7 默认选中与展开

```vue demo:nav-menu-default title="默认选中与展开"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "内容", children: [
    { key: "a1", label: "文章" },
    { key: "a2", label: "评论" },
  ] },
  { key: "b", label: "系统", children: [
    { key: "b1", label: "用户" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" default-active="a2" :default-openeds="['a', 'b']" />
</template>
```

### 2.8 受控选中

```vue demo:nav-menu-controlled title="受控选中"
<script setup lang="ts">
import { ref } from "vue";
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("b1");
const items = [
  { key: "a", label: "概览" },
  { key: "b", label: "订单", children: [
    { key: "b1", label: "列表" },
    { key: "b2", label: "详情" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" :model-value="active" @update:model-value="(k: string) => (active = k)" />
</template>
```

### 2.9 禁用项

```vue demo:nav-menu-disabled title="禁用项"
<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "可用菜单" },
  { key: "b", label: "维护中（禁用）", disabled: true },
  { key: "c", label: "设置", children: [
    { key: "c1", label: "通用" },
    { key: "c2", label: "禁用子项", disabled: true },
  ] },
];
</script>

<template>
  <AppMenu :items="items" default-active="a" />
</template>
```
## 3. API 使用方式

```vue
<AppMenu v-model="activeMenuKey" :items="menuItems" unique-opened @select="(key) => router.push(menuRoutes[key])" />
```

`MenuItem` 需要稳定的 `key` 与 `label`，可选 `icon`、`badge`、`disabled` 和 `children`。权限过滤应在生成 `menuItems` 前完成。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 受控的当前叶子菜单键。 | `string` | `undefined` |
| `items` | 菜单数据。单项支持 `key`、`label`、`icon`、`badge`、`disabled`、`children`。 | `MenuItem[]` | — |
| `defaultActive` | 非受控使用时的初始选中项。 | `string` | `""` |
| `defaultOpeneds` | 初始展开的父级键集合。 | `string[]` | `[]` |
| `mode` | 菜单方向。 | `"vertical" \| "horizontal"` | `"vertical"` |
| `collapse` | 是否收起纵向菜单。 | `boolean` | `false` |
| `uniqueOpened` | 是否保证同一时间仅展开一个父级。 | `boolean` | `false` |
| `ariaLabel` | 菜单导航的可访问名称。 | `string` | `"菜单"` |

### 4.2 Slots

`AppMenu` 不提供插槽，菜单项由 `items` 统一驱动。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选择叶子菜单时触发。 | `key: string` |
| `select` | 选择叶子菜单时触发，适合执行路由跳转。 | `key: string, item: MenuItem` |
| `open` | 展开父级菜单时触发。 | `key: string, item: MenuItem` |
| `close` | 收起父级菜单时触发。 | `key: string, item: MenuItem` |
