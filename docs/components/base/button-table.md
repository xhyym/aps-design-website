---
title: 表格按钮
component: AppButtonTable
category: base
source: packages/ui/src/components/base/AppButtonTable.vue
---

# 表格按钮（AppButtonTable）

`AppButtonTable` 是表格行内操作的轻量编排器：默认插槽放高频动作，`moreItems` 放低频动作。它保持操作区右对齐与统一间距，避免各列手写不同的按钮排列规则。

## 1. 用处

`AppButtonTable` 用于表格一行中的业务操作编排：高频操作直接展示，低频或危险操作放入更多菜单。它只负责操作区布局和菜单事件转发，不处理行数据、权限校验或二次确认。

## 2. 代码演示

### 2.1 行内操作与溢出菜单

```vue demo:button-table-basic title="行内操作"
<script setup lang="ts">
import { AppButton, AppButtonTable, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreActions: DropdownItem[] = [
  { key: "create-copy", label: "创建副本", icon: "plus" },
  { key: "archive", label: "归档", icon: "panel" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleMoreAction(key: string): void {
  console.info("已选择表格行操作", key);
}
</script>

<template>
  <AppButtonTable :more-items="moreActions" more-label="资源操作" @select="handleMoreAction">
    <AppButton size="small" variant="text">查看</AppButton>
    <AppButton size="small" variant="text">编辑</AppButton>
  </AppButtonTable>
</template>
```

“查看、编辑”这类高频动作直接显示；低频或破坏性操作放入更多菜单。组件不会限制默认插槽数量，但表格行内一般应控制在 1–2 个高频入口。

### 2.2 仅展示高频行内操作

当一行操作不需要下拉菜单时，可以只使用默认插槽，操作区仍会保持统一的右对齐和间距：

```vue demo:button-table-inline title="直接操作"
<script setup lang="ts">
import { AppButton, AppButtonTable } from "aps-design-pro";
import "aps-design-pro/style.css";

/** 示例仅展示直接操作区，真实业务事件由页面处理。 */
function openOrderDetail(): void {
  console.info("已触发表格行内的查看订单操作");
}
</script>

<template>
  <AppButtonTable>
    <AppButton size="small" variant="text" @click="openOrderDetail">查看详情</AppButton>
    <AppButton size="small" variant="text">打印</AppButton>
  </AppButtonTable>
</template>
```

### 2.3 业务处理建议

`select` 返回的是稳定的菜单项 `key`。将权限判断、确认对话框和接口调用放在外部事件函数中，避免把业务逻辑写入列定义的展示层。

## 3. API 使用方式

在表格列的插槽中使用该组件：默认插槽放可见动作；传入 `moreItems` 后自动补充更多菜单。菜单的最终执行由 `@select` 统一分发。

```vue
<AppButtonTable :more-items="rowActions" @select="(actionKey) => handleRowAction(row, actionKey)">
  <AppButton size="small" variant="text" @click="openDetail(row)">查看</AppButton>
</AppButtonTable>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `moreItems` | 传入非空数组时渲染更多操作菜单。 | `DropdownItem[]` | `undefined` |
| `moreLabel` | 更多菜单的按钮文本与辅助名称。 | `string` | 由 `AppButtonMore` 使用 `"更多操作"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 直接展示的行内操作，通常放 `AppButton size="small" variant="text"`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `select` | `(key: string)` | 选择更多菜单中的项目时触发。 |

`AppButtonTable` 是 `AppTableActions` 的基础组件入口；它不负责表格列定义、行数据、权限或删除确认。
