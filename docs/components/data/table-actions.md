---
title: 表格行操作
component: AppTableActions
category: data
source: packages/ui/src/components/data/AppTableActions.vue
---

# 表格行操作（AppTableActions）

`AppTableActions` 用统一间距组合行内主操作，并把低频操作收纳到更多菜单中。

## 1. 用处

- 放在表格的 `actions` 插槽中，保持编辑、查看等行操作的视觉节奏一致。
- 高频操作直接作为默认插槽内容；低频或破坏性操作交给 `moreItems`。
- 组件不会替业务执行操作，只抛出所选菜单项的键。

## 2. 代码演示

### 2.1 主操作加更多菜单

```vue demo:table-actions-basic title="课程操作"
<script setup lang="ts">
import { AppButton, AppTableActions, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreItems: DropdownItem[] = [
  { key: "duplicate", label: "复制课程" },
  { key: "archive", label: "归档" },
];
</script>

<template><AppTableActions :more-items="moreItems" more-label="更多课程操作"><AppButton size="small" variant="text">编辑</AppButton><AppButton size="small" variant="text">查看</AppButton></AppTableActions></template>
```

### 2.2 业务主按钮

```vue demo:table-actions-more title="客户操作"
<script setup lang="ts">
import { AppButton, AppTableActions, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreItems: DropdownItem[] = [
  { key: "disable", label: "暂停服务" },
  { key: "delete", label: "删除" },
];
</script>

<template><AppTableActions :more-items="moreItems"><AppButton size="small">续费</AppButton><AppButton size="small" variant="secondary">联系客户</AppButton></AppTableActions></template>
```

## 3. API 使用方式

在 `AppDataTable` 的 `actions` 插槽内使用，并以稳定的菜单键分派业务行为。

```vue
<template #actions="{ row }">
  <AppTableActions :more-items="moreItems" @select="(key) => handleRowAction(key, row)">
    <AppButton size="small" variant="text" @click="editRow(row)">编辑</AppButton>
  </AppTableActions>
</template>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `moreItems` | 更多菜单项；为空时不显示更多按钮。 | `DropdownItem[]` | — |
| `moreLabel` | 更多按钮的无障碍名称。 | `string` | — |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 直接展示的主操作按钮或链接。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `select` | `(key: string)` | 点击更多菜单项时返回该项键。 |
