---
title: 全局搜索
component: AppGlobalSearch
category: navigation
source: packages/ui/src/components/navigation/AppGlobalSearch.vue
---

# 全局搜索（AppGlobalSearch）

`AppGlobalSearch` 提供面向应用功能与页面的全局检索浮层，负责过滤和选择，不负责路由跳转。

## 1. 用处

- 为管理后台提供跨模块的快捷访问入口。
- 按标题与描述即时过滤本地导航数据。
- 与快捷键或顶部搜索按钮组合，把选择结果交回业务应用执行跳转。

## 2. 代码演示

### 2.1 打开并接收选择

```vue demo:global-search-basic title="打开并接收选择"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [
  { title: "订单中心", description: "处理待发货订单", path: "/orders", icon: "chart" as const },
  { title: "商品管理", description: "维护商品资料", path: "/products", icon: "grid" as const },
];
</script>

<template>
  <AppButton @click="visible = true">打开全局搜索</AppButton>
  <small v-if="selected">已选择：{{ selected }}</small>
  <AppGlobalSearch v-model="visible" :items="items" @select="selected = $event.title" />
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
```

点击结果会触发 `select` 并清空当前查询词。父级应根据结果中的 `path` 调用自己的路由方法。

### 2.2 多个后台入口

```vue demo:global-search-filter title="多个后台入口"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "成员管理", description: "邀请、停用和分配角色", path: "/members", icon: "users" as const },
  { title: "组织设置", description: "维护组织资料与安全策略", path: "/settings", icon: "settings" as const },
  { title: "操作日志", description: "查看成员操作记录", path: "/logs", icon: "clock" as const },
];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">搜索后台功能</AppButton>
  <AppGlobalSearch v-model="visible" :items="items" @select="visible = false" />
</template>
```

输入“成员”“设置”或描述中的词均可过滤。数据量很大时应先在应用侧做索引或服务端检索后再传入结果。

## 3. API 使用方式

```vue
<AppGlobalSearch v-model="isSearchOpen" :items="searchItems" @select="({ path }) => router.push(path)" />
```

组件只在 `modelValue` 为 `true` 时渲染到 `body`。推荐由页面统一维护快捷键（如 `⌘K` / `Ctrl+K`）并切换该值，避免每个模块重复注册全局键盘监听。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示搜索浮层。 | `boolean` | — |
| `items` | 可搜索的页面项，每项包含 `title`、`description`、`path` 和 `icon`。 | `GlobalSearchItem[]` | — |

### 4.2 Slots

`AppGlobalSearch` 不提供插槽，统一输出搜索输入、结果列表和空状态。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 点击遮罩或按 `Esc` 请求关闭时触发。 | `value: boolean` |
| `select` | 选择某个搜索结果时触发。 | `item: GlobalSearchItem` |
