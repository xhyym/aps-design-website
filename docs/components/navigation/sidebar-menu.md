---
title: 侧边导航
component: AppSidebarMenu
category: navigation
source: packages/ui/src/components/navigation/AppSidebarMenu.vue
---

# 侧边导航（AppSidebarMenu）

`AppSidebarMenu` 展示管理后台常见的树形侧栏，并在收起状态下以悬浮子菜单保留二级入口。

## 1. 用处

- 承载后台模块及其二级、三级导航。
- 根据 `activePath` 自动高亮当前项和任意深度的父级。
- 收起侧栏后仍可点击有子项的图标展开浮层。

## 2. 代码演示

### 2.1 常规侧边栏

```vue demo:sidebar-menu-basic title="常规侧边栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/users");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "system", label: "系统管理", path: "/system", icon: "settings", children: [{ key: "users", label: "用户管理", path: "/users" }, { key: "roles", label: "角色管理", path: "/roles" }] },
];
</script>

<template>
  <div class="sidebar-shell"><AppSidebarMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" /></div>
</template>

<style scoped>
.sidebar-shell { width: 220px; padding: 8px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
</style>
```

当路由命中子项时，父级会自动展开并保持高亮。

### 2.2 收起后显示子菜单

```vue demo:sidebar-menu-collapsed title="收起后显示子菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu, AppSwitch, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const collapsed = ref(true);
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "system", label: "系统管理", path: "/system", icon: "settings", children: [{ key: "users", label: "用户管理", path: "/users" }, { key: "roles", label: "角色管理", path: "/roles" }] },
];
</script>

<template>
  <AppSwitch v-model="collapsed" label="收起侧边栏" />
  <div class="sidebar-shell"><AppSidebarMenu :items="items" active-path="/users" :collapsed="collapsed" @navigate="() => undefined" /></div>
</template>

<style scoped>
.sidebar-shell { width: fit-content; margin-top: 12px; padding: 8px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
</style>
```

在收起状态点击带子项的图标，组件会打开对应浮层；展开侧栏时浮层状态会自动清理。


### 2.3 带图标

```vue demo:nav-sidebar-menu-icons title="带图标"
<script setup lang="ts">
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const },
  { key: "user", label: "客户", path: "/user", icon: "users" as const },
];
</script>

<template>
  <AppSidebarMenu :items="items" active-path="/home" />
</template>
```

### 2.4 含子菜单

```vue demo:nav-sidebar-menu-children title="子菜单"
<script setup lang="ts">
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "shop", label: "商城", path: "/shop", icon: "grid" as const, children: [
    { key: "g", label: "商品", path: "/shop/goods" },
    { key: "s", label: "规格", path: "/shop/specs" },
  ] },
  { key: "data", label: "数据", path: "/data", icon: "chart" as const },
];
</script>

<template>
  <AppSidebarMenu :items="items" active-path="/shop" />
</template>
```

### 2.5 受控高亮

```vue demo:nav-sidebar-menu-active title="受控高亮"
<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("/order");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
  { key: "set", label: "设置", path: "/set" },
];
</script>

<template>
  <AppSidebarMenu :items="items" :active-path="active" />
</template>
```

### 2.6 收起侧栏

```vue demo:nav-sidebar-menu-collapsed title="折叠态"
<script setup lang="ts">
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const, children: [
    { key: "olist", label: "列表", path: "/order/list" },
    { key: "after", label: "售后", path: "/order/after" },
  ] },
  { key: "set", label: "设置", path: "/set", icon: "settings" as const },
];
</script>

<template>
  <AppSidebarMenu :items="items" active-path="/order" :collapsed="true" />
</template>
```

### 2.7 监听跳转

```vue demo:nav-sidebar-menu-navigate title="监听跳转"
<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
];
</script>

<template>
  <div>
    <AppSidebarMenu :items="items" active-path="/home" @navigate="(item) => (last = item.path)" />
    <p class="hint">最近跳转：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```
## 3. API 使用方式

```vue
<AppSidebarMenu :items="sidebarItems" :active-path="route.path" :collapsed="layoutStore.sidebarCollapsed" @navigate="({ path }) => router.push(path)" />
```

布局层管理 `collapsed`，路由层管理 `activePath`。将这两种状态分离，侧栏组件可以复用于不同应用壳。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 树形导航数据。 | `NavigationItem[]` | — |
| `activePath` | 当前路由路径。 | `string` | — |
| `collapsed` | 是否收起为图标侧栏。 | `boolean` | `false` |

### 4.2 Slots

`AppSidebarMenu` 不提供插槽。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `navigate` | 选择叶子导航项时触发。 | `item: NavigationItem` |
