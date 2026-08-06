---
title: 更多按钮
component: AppButtonMore
category: base
source: packages/ui/src/components/base/AppButtonMore.vue
---

# 更多按钮（AppButtonMore）

`AppButtonMore` 把低频、辅助或危险操作收敛到下拉菜单，避免一整排按钮挤占表格工具栏和卡片操作区。它在未使用 `v-model` 时自行管理展开状态；使用 `v-model` 后完全由父级控制。

## 1. 用处

更多按钮用于收纳低频、辅助或危险操作，让工具栏保留主要任务。它可以自行管理菜单开合，也可以由父级通过 `v-model` 在路由切换、抽屉关闭时统一收起。

## 2. 代码演示

### 2.1 最小可用的更多操作

```vue demo:button-more-basic title="低频操作"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "duplicate", label: "创建副本", icon: "plus" },
  { key: "archive", label: "归档", icon: "panel" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择课程操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="课程操作" @select="handleAction" />
</template>
```

菜单项的 `key` 是唯一回传值，业务层根据它执行权限判断、确认弹窗或接口请求。`danger` 只改变菜单项的视觉语义，不会自动执行二次确认。

### 2.2 受控展开状态

当页面需要在抽屉关闭、路由切换或权限变化时主动收起菜单，使用 `v-model`：

```vue demo:button-more-controlled title="受控展开"
<script setup lang="ts">
import { ref } from "vue";
import { AppButtonMore, type DropdownItem } from "aps-design-pro";

const isOpen = ref(false);
const actions: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "download" },
];
</script>

<template>
  <AppButtonMore v-model="isOpen" :items="actions" @select="isOpen = false" />
</template>
```

传入 `modelValue` 后，组件不会再修改内部状态，只会通过 `update:modelValue` 请求父级更新。不要同时依赖内部状态与父级状态。

## 3. API 使用方式

给 `items` 传入稳定的菜单项数组，并在 `select` 事件中根据 `key` 分发业务动作。需要外部控制开合时绑定 `v-model`，不要同时维护一份内部开合状态。

```vue
<AppButtonMore
  v-model="menuOpen"
  :items="actions"
  label="订单操作"
  @select="handleOrderAction"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 菜单是否展开。未传入时使用内部状态；传入后启用受控模式。 | `boolean` | `undefined` |
| `items` | 下拉菜单项。 | `DropdownItem[]` | — |
| `label` | 触发按钮文本，也是菜单辅助名称。 | `string` | `"更多操作"` |
| `size` | 触发按钮尺寸。 | `"small" \| "default" \| "large"` | `"default"` |

### 4.2 `DropdownItem`

| 字段 | 说明 |
| --- | --- |
| `key` | 必填，选中后通过 `select` 回传。 |
| `label` | 必填，菜单显示文本。 |
| `icon` | 可选的内置图标。 |
| `disabled` | 禁用该菜单项。 |
| `danger` | 使用危险操作的视觉语义。 |
| `divided` | 在该项顶部添加分隔线。 |

### 4.3 Slots

该组件没有业务内容插槽；若需要完全自定义触发器或菜单内容，直接使用 `AppDropdown`。

### 4.4 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean)` | 菜单请求改变展开状态时触发。 |
| `select` | `(key: string)` | 选择未禁用菜单项时触发。 |
