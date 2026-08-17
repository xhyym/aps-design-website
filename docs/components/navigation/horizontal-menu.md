---
title: 水平导航
component: AppHorizontalMenu
category: navigation
source: packages/ui/src/components/navigation/AppHorizontalMenu.vue
---

# 水平导航（AppHorizontalMenu）

`AppHorizontalMenu` 面向应用的顶部一级导航，内置二级入口浮层、激活态与外部点击关闭能力。

## 1. 用处

- 将有限的一级业务模块放到应用顶部。
- 让含子级的模块以点击浮层呈现，而不挤占页面内容区。
- 路由路径由父级维护，组件通过 `navigate` 返回被选中的完整导航项。

## 2. 代码演示

### 2.1 含二级入口的导航

```vue demo:horizontal-menu-basic title="含二级入口的导航"
<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/dashboard");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "commerce", label: "交易", path: "/orders", icon: "chart", children: [{ key: "orders", label: "交易订单", path: "/orders" }, { key: "refunds", label: "退款售后", path: "/refunds" }] },
  { key: "settings", label: "系统设置", path: "/settings", icon: "settings" },
];
</script>

<template>
  <AppHorizontalMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" />
  <p class="result">当前路径：{{ activePath }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
```

点击一级组打开二级菜单，选择子项后组件会关闭浮层并返回所选项。

### 2.2 子级激活态

```vue demo:horizontal-menu-active title="子级激活态"
<script setup lang="ts">
import { AppHorizontalMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: NavigationItem[] = [
  { key: "products", label: "商品", path: "/products", icon: "grid" },
  { key: "customer", label: "客户", path: "/customers", icon: "users", children: [{ key: "list", label: "客户列表", path: "/customers" }, { key: "tags", label: "客户标签", path: "/customers/tags" }] },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/customers/tags" @navigate="() => undefined" />
</template>
```

`activePath` 命中子项路径时，其一级父项也会保持激活状态，避免用户迷失当前模块。


### 2.3 带图标

```vue demo:nav-horizontal-menu-icons title="带图标"
<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const },
  { key: "user", label: "客户", path: "/user", icon: "users" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/home" />
</template>
```

### 2.4 含子菜单

```vue demo:nav-horizontal-menu-children title="含子菜单"
<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "shop", label: "商城", path: "/shop", icon: "grid" as const, children: [
    { key: "goods", label: "商品", path: "/shop/goods" },
    { key: "sku", label: "规格", path: "/shop/sku" },
  ] },
  { key: "data", label: "数据", path: "/data", icon: "chart" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/shop/goods" />
</template>
```

### 2.5 受控高亮

```vue demo:nav-horizontal-menu-active title="受控高亮"
<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("/order");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
  { key: "user", label: "客户", path: "/user" },
];
</script>

<template>
  <AppHorizontalMenu :items="items" :active-path="active" />
</template>
```

### 2.6 监听跳转

```vue demo:nav-horizontal-menu-navigate title="监听跳转"
<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref("");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
];
</script>

<template>
  <div>
    <AppHorizontalMenu :items="items" active-path="/home" @navigate="(item) => (current = item.path)" />
    <p class="hint">最近跳转：{{ current || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.7 多级子菜单

```vue demo:nav-horizontal-menu-sub title="多级子菜单"
<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "sys", label: "系统", path: "/sys", icon: "settings" as const, children: [
    { key: "role", label: "角色", path: "/sys/role", children: [
      { key: "role-list", label: "角色列表", path: "/sys/role/list" },
      { key: "role-new", label: "新建角色", path: "/sys/role/new" },
    ] },
    { key: "perm", label: "权限", path: "/sys/perm" },
  ] },
  { key: "ops", label: "运营", path: "/ops", icon: "chart" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/sys/role/list" />
</template>
```
## 3. API 使用方式

```vue
<AppHorizontalMenu :items="topNavigation" :active-path="route.path" @navigate="({ path }) => router.push(path)" />
```

请使用与路由一致的 `path`。组件不会自行读取或修改路由，便于接入任意路由框架。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 导航数据，包含 `key`、`label`、`path`、可选 `icon` 与 `children`。 | `NavigationItem[]` | — |
| `activePath` | 当前路由路径，用于高亮对应项或其父项。 | `string` | — |

### 4.2 Slots

`AppHorizontalMenu` 不提供插槽。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `navigate` | 点击可跳转的一级或二级导航时触发。 | `item: NavigationItem` |
