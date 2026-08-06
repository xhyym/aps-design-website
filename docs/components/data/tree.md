---
title: 树
component: AppTree
category: data
source: packages/ui/src/components/data/AppTree.vue
---

# 树（AppTree）

`AppTree` 展示层级节点，并支持受控展开、选择、勾选、筛选、懒加载和虚拟滚动。

## 1. 用处

- 用于权限、目录、组织结构和层级资源选择。
- 每个节点必须具有在其同级中稳定的 `value`；懒加载时由 `loadData` 返回子节点。
- 选中、展开、勾选三个状态独立维护，业务不应只靠样式反推权限结果。

## 2. 代码演示

### 2.1 受控选择导航节点

```vue demo:data-tree-basic title="节点选择"
<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const selectedKeys = ref<string[]>(["overview"]);
const nodes: TreeOption[] = [{ label: "工作区", value: "workspace", children: [{ label: "概览", value: "overview" }, { label: "成员", value: "members" }] }, { label: "系统设置", value: "settings" }];
</script>

<template><AppTree v-model:selected-keys="selectedKeys" :nodes="nodes" default-expand-all /></template>
```

### 2.2 父子联动勾选

```vue demo:data-tree-checkable title="权限勾选"
<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const checkedKeys = ref<string[]>(["read"]);
const nodes: TreeOption[] = [{ label: "订单权限", value: "orders", children: [{ label: "查看订单", value: "read" }, { label: "编辑订单", value: "write" }, { label: "导出订单", value: "export" }] }];
</script>

<template><AppTree v-model:checked-keys="checkedKeys" :nodes="nodes" checkable check-on-click-node default-expand-all /></template>
```

## 3. API 使用方式

使用 `v-model:expanded-keys`、`v-model:selected-keys`、`v-model:checked-keys` 接收树状态。开启 `lazy` 时配合 `loadData(context)` 返回节点子级，组件会传入路径与取消信号。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `nodes` | 树节点数组。 | `TreeOption[]` | — |
| `expandedKeys` / `selectedKeys` / `checkedKeys` | 受控展开、选择、勾选值。 | `string[]` | `undefined` |
| `selectable` / `multiple` / `checkable` | 是否可选、多选、勾选。 | `boolean` | `true` / `false` / `false` |
| `checkStrictly` / `checkOnClickNode` | 勾选联动与点击行勾选策略。 | `boolean` | `false` / `false` |
| `accordion` / `defaultExpandAll` / `showLine` | 展开与连接线显示策略。 | `boolean` | `false` |
| `filterable` / `disabled` / `loading` | 搜索、禁用、加载状态。 | `boolean` | `false` |
| `lazy` / `loadData` | 按需加载子节点。 | `boolean` / `TreeLoadRequest` | `false` / `undefined` |
| `virtual` / `virtualHeight` / `virtualItemHeight` / `virtualOverscan` | 虚拟渲染配置。 | `boolean` / `number` | `false` / `440` / `42` / `6` |
| `emptyText` / `ariaLabel` | 空状态和区域标签。 | `string` | 内置文案 |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持三个 `update:*Keys` 事件，以及 `select`、`check`、`node-click`、`node-expand`、`node-collapse`、`load`、`load-error`。实例暴露 `filter()`、`getCheckedNodes()` 等树操作方法。
