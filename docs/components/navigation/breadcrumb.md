---
title: 面包屑
component: AppBreadcrumb
category: navigation
source: packages/ui/src/components/navigation/AppBreadcrumb.vue
---

# 面包屑（AppBreadcrumb）

`AppBreadcrumb` 展示当前页面在应用信息结构中的路径，并将中间层级交给业务路由处理。

## 1. 用处

- 在详情、配置和多层级管理页面中说明当前位置。
- 为上级层级提供轻量返回路径，而不取代浏览器后退操作。
- 自动将最后一项标记为当前页，其余带 `href` 的项可触发导航。

## 2. 代码演示

### 2.1 拦截导航事件

```vue demo:breadcrumb-basic title="拦截导航事件"
<script setup lang="ts">
import { ref } from "vue";
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const lastPath = ref("尚未跳转");
const items = [{ label: "系统管理", href: "/system" }, { label: "用户管理", href: "/system/users" }, { label: "新建用户" }];
</script>

<template>
  <AppBreadcrumb :items="items" @navigate="lastPath = $event" />
  <p class="result">最近选择：{{ lastPath }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
```

组件会阻止原生链接跳转并触发 `navigate`；在 Vue Router 中可在该事件内调用 `router.push(href)`。

### 2.2 长路径省略

```vue demo:breadcrumb-long title="长路径省略"
<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "数据资产中心", href: "/data" }, { label: "指标管理", href: "/data/metrics" }, { label: "华东区域月度经营指标分析与复盘" }];
</script>

<template>
  <div class="narrow"><AppBreadcrumb :items="items" /></div>
</template>

<style scoped>
.narrow { max-width: 360px; overflow: hidden; padding: 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```

路径空间不足时文字会在自身范围内省略，保持最后一个当前页的层级辨识度。


### 2.3 可点击链接

```vue demo:nav-breadcrumb-links title="可点击链接"
<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "工作台", href: "/workbench" },
  { label: "订单", href: "/orders" },
  { label: "详情" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
```

### 2.4 多级面包屑

```vue demo:nav-breadcrumb-many title="多级面包屑"
<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "商城", href: "/shop" },
  { label: "服饰", href: "/shop/clothes" },
  { label: "男装", href: "/shop/clothes/men" },
  { label: "外套", href: "/shop/clothes/men/coat" },
  { label: "当前商品" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
```

### 2.5 监听跳转

```vue demo:nav-breadcrumb-navigate title="监听跳转"
<script setup lang="ts">
import { ref } from "vue";
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const items = [
  { label: "首页", href: "/home" },
  { label: "列表", href: "/list" },
  { label: "当前" },
];
</script>

<template>
  <div>
    <AppBreadcrumb :items="items" @navigate="(href: string) => (last = href)" />
    <p class="hint">最近点击：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.6 末级无链接

```vue demo:nav-breadcrumb-last title="末级无链接"
<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "系统", href: "/system" },
  { label: "权限", href: "/system/permission" },
  { label: "角色配置" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
```

### 2.7 自定义样式

```vue demo:nav-breadcrumb-styled title="自定义样式"
<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "项目", href: "/project" },
  { label: "迭代", href: "/project/sprint" },
  { label: "看板" },
];
</script>

<template>
  <div class="wrap">
    <AppBreadcrumb :items="items" />
  </div>
</template>

<style scoped>
.wrap { padding: 8px 12px; border-radius: 8px; background: var(--aps-surface-soft); }
</style>
```
## 3. API 使用方式

```vue
<AppBreadcrumb :items="breadcrumbItems" @navigate="(href) => router.push(href)" />
```

数组顺序就是层级顺序。最后一项应代表当前页面，通常不要配置 `href`，避免用户把当前页误认为可跳转目标。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 面包屑项，单项包含 `label` 和可选的 `href`。 | `BreadcrumbItem[]` | — |

### 4.2 Slots

`AppBreadcrumb` 不提供插槽。分隔图标与当前项的强调样式由组件统一输出。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `navigate` | 点击非末级且配置了 `href` 的项目时触发。 | `href: string` |
