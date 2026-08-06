---
title: 快捷入口
component: AppFastEnter
category: navigation
source: packages/ui/src/components/navigation/AppFastEnter.vue
---

# 快捷入口（AppFastEnter）

`AppFastEnter` 是 `AppCommandPalette` 的导航语义封装，用于从应用任意位置快速搜索并执行入口操作。

## 1. 用处

- 将常用创建、搜索、跳转操作集中到快捷命令面板。
- 适合配合应用层的 `⌘K` / `Ctrl+K` 快捷键控制显示状态。
- 禁用项仍可展示，但不会进入可键盘选择的命令集合。

## 2. 代码演示

### 2.1 执行快捷操作

```vue demo:fast-enter-basic title="执行快捷操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [{ key: "create", title: "新建订单", description: "创建一笔新的交易订单", icon: "plus" as const }, { key: "search", title: "搜索订单", description: "按订单号或客户查找", icon: "search" as const }];
</script>

<template>
  <AppButton @click="visible = true">打开快捷入口</AppButton>
  <small v-if="selected">已执行：{{ selected }}</small>
  <AppFastEnter v-model="visible" :items="items" @select="selected = $event.title" />
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
```

选中项会经由 `select` 回传，面板会自动关闭。页面应根据 `item.key` 执行实际路由或业务操作。

### 2.2 禁用不可执行操作

```vue demo:fast-enter-disabled title="禁用不可执行操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [{ key: "overview", title: "查看经营概览", icon: "chart" as const }, { key: "export", title: "导出本月报表", description: "暂无导出权限", icon: "download" as const, disabled: true }];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开命令菜单</AppButton>
  <AppFastEnter v-model="visible" :items="items" @select="visible = false" />
</template>
```

权限和可用性应由应用生成数据时判断，不能只依赖视觉上的禁用态作为权限保护。

## 3. API 使用方式

```vue
<AppFastEnter v-model="isCommandOpen" :items="quickActions" @select="handleQuickAction" />
```

`items` 使用 `CommandPaletteItem[]`：每项包含 `key`、`title`，可选 `description`、`icon` 和 `disabled`。该组件不绑定特定快捷键。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示快捷入口浮层。 | `boolean` | — |
| `items` | 快捷操作数据。 | `CommandPaletteItem[]` | — |

### 4.2 Slots

`AppFastEnter` 不提供插槽。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 请求打开或关闭面板时触发。 | `value: boolean` |
| `select` | 选择可用命令时触发。 | `item: CommandPaletteItem` |
