---
title: 混合导航
component: AppMixedMenu
category: navigation
source: packages/ui/src/components/navigation/AppMixedMenu.vue
---

# 混合导航（AppMixedMenu）

`AppMixedMenu` 将 `AppHorizontalMenu` 与 `AppSidebarMenu` 组合为一套统一数据源的混合导航布局。

## 1. 用处

- 需要同时展示顶部模块切换与左侧具体功能入口的后台。
- 统一向两个导航区域传入同一份 `NavigationItem[]`，避免高亮逻辑分叉。
- 外层页面只处理一次 `navigate` 事件。

## 2. 代码演示

### 2.1 共享当前路径

```vue demo:mixed-menu-basic title="共享当前路径"
<script setup lang="ts">
import { ref } from "vue";
import { AppMixedMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/orders");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "commerce", label: "交易中心", path: "/orders", icon: "chart", children: [{ key: "orders", label: "交易订单", path: "/orders" }, { key: "refunds", label: "退款售后", path: "/refunds" }] },
];
</script>

<template>
  <AppMixedMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" />
</template>
```

点击任意一处菜单都会更新同一个 `activePath`，顶部与侧边导航的激活状态随之同步。

### 2.2 收起侧栏

```vue demo:mixed-menu-collapsed title="收起侧栏"
<script setup lang="ts">
import { AppMixedMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "members", label: "成员中心", path: "/members", icon: "users", children: [{ key: "list", label: "成员列表", path: "/members" }, { key: "invite", label: "邀请成员", path: "/members/invite" }] },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/members" collapsed @navigate="() => undefined" />
</template>
```

`collapsed` 只作用于内部侧边导航，顶部导航保持完整可用。


### 2.3 收起侧栏

```vue demo:nav-mixed-menu-collapsed title="折叠态"
<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const, children: [
    { key: "olist", label: "订单列表", path: "/order/list" },
    { key: "after", label: "售后", path: "/order/after" },
  ] },
  { key: "set", label: "设置", path: "/set", icon: "settings" as const },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/order" :collapsed="true" />
</template>
```

### 2.4 受控高亮

```vue demo:nav-mixed-menu-active title="受控高亮"
<script setup lang="ts">
import { ref } from "vue";
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("/order");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
  { key: "set", label: "设置", path: "/set" },
];
</script>

<template>
  <AppMixedMenu :items="items" :active-path="active" />
</template>
```

### 2.5 带图标

```vue demo:nav-mixed-menu-icons title="带图标"
<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "dash", label: "仪表盘", path: "/dash", icon: "chart" as const },
  { key: "goods", label: "商品", path: "/goods", icon: "grid" as const },
  { key: "user", label: "客户", path: "/user", icon: "users" as const },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/dash" />
</template>
```

### 2.6 含子菜单

```vue demo:nav-mixed-menu-children title="子菜单"
<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
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
  <AppMixedMenu :items="items" active-path="/shop" />
</template>
```

### 2.7 监听跳转

```vue demo:nav-mixed-menu-navigate title="监听跳转"
<script setup lang="ts">
import { ref } from "vue";
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
];
</script>

<template>
  <div>
    <AppMixedMenu :items="items" active-path="/home" @navigate="(item) => (last = item.path)" />
    <p class="hint">最近跳转：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```
## 3. API 使用方式

```vue
<AppMixedMenu :items="navigationItems" :active-path="route.path" :collapsed="isSidebarCollapsed" @navigate="({ path }) => router.push(path)" />
```

若业务的顶部和侧边导航数据并不相同，应分别使用 `AppHorizontalMenu` 与 `AppSidebarMenu`，不要强行套用混合组件。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 同时提供给顶部和侧边区域的导航数据。 | `NavigationItem[]` | — |
| `activePath` | 当前路由路径。 | `string` | — |
| `collapsed` | 内部侧栏是否收起。 | `boolean` | `false` |

### 4.2 Slots

`AppMixedMenu` 不提供插槽。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `navigate` | 顶部或侧边的叶子项被选择时触发。 | `item: NavigationItem` |
