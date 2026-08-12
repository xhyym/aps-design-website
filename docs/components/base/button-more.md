---
title: 更多按钮
component: AppButtonMore
category: base
source: packages/ui/src/components/base/AppButtonMore.vue
---

# 更多按钮（AppButtonMore）

`AppButtonMore` 把低频、辅助、危险操作收进下拉抽屉，给工具栏留出主任务。组件不发起请求——展开态由页面控制。

## 1. 用处

- 把低频或危险操作收进抽屉，给工具栏留出主任务；可自管理展开，也可受控。
- 菜单项的 `key` 是唯一回传值，业务层据此分发动作。

## 2. 代码演示

### 2.1 下拉菜单

把低频、辅助或危险操作收进下拉，让工具栏只留主任务。菜单项的 `key` 是唯一回传值，业务层据此分发动作。

```vue demo:button-more-basic title="下拉菜单"
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

`danger` 只改变菜单项的视觉语义，不会自动执行二次确认；分隔线 `divided` 用于把危险操作从常规动作中隔开。

### 2.2 受控开合

页面需要在抽屉关闭、路由切换或权限变化时主动收起菜单时，绑定 `v-model` 进入受控模式。

```vue demo:button-more-controlled title="受控开合"
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

传入 `modelValue` 后，组件不再修改内部状态，只通过 `update:modelValue` 请求父级更新；不要同时依赖内部状态与父级状态。

### 2.3 仅图标触发

`iconOnly` 时触发按钮只显示图标，适合已经用图标表达动作的紧凑工具条。

```vue demo:button-more-icon-only title="仅图标触发"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "share", label: "分享", icon: "arrow-right" },
  { key: "star", label: "收藏", icon: "pin" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" icon-only @select="handleAction" />
</template>
```

### 2.4 危险操作分组

把停用、移出等危险动作集中在一起，并用 `danger` 给出视觉警示，避免与常规操作混排。

```vue demo:button-more-danger title="危险操作分组"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "disable", label: "停用成员", icon: "lock", danger: true },
  { key: "remove", label: "移出项目", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择危险操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="成员管理" @select="handleAction" />
</template>
```

### 2.5 不同尺寸

`size` 控制触发按钮尺寸，表格行内或紧凑工具条常用 `size="small"`。

```vue demo:button-more-sizes title="不同尺寸"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "arrow-right" },
  { key: "archive", label: "归档", icon: "panel" },
];

function handleAction(key: string): void {
  console.info("已选择操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" size="small" label="小尺寸菜单" @select="handleAction" />
</template>
```

### 2.6 用分隔线分组

`divided` 在某项顶部添加分隔线，把危险操作从常规动作中隔开，提升菜单可读性。

```vue demo:button-more-divided title="用分隔线分组"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "rename", label: "重命名", icon: "edit" },
  { key: "duplicate", label: "创建副本", icon: "plus" },
  { key: "archive", label: "归档", icon: "panel", divided: true },
  { key: "delete", label: "删除", icon: "trash", danger: true },
];

function handleAction(key: string): void {
  console.info("已选择操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="课程操作" @select="handleAction" />
</template>
```

### 2.7 自定义触发文本

`label` 同时是触发按钮文本和菜单辅助名称，应准确描述这组操作的归属。

```vue demo:button-more-custom-label title="自定义触发文本"
<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "columns", label: "选择列", icon: "columns" },
  { key: "filter", label: "筛选", icon: "filter" },
];

function handleAction(key: string): void {
  console.info("已选择视图操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="视图设置" @select="handleAction" />
</template>
```

## 3. API 使用方式

更多按钮给 `items` 传稳定的菜单项数组，在 `select` 中按 `key` 分发；需要外部控制开合时绑定 `v-model`：

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

### 4.2 DropdownItem

| 字段 | 说明 |
| --- | --- |
| `key` | 必填，选中后通过 `select` 回传。 |
| `label` | 必填，菜单显示文本。 |
| `icon` | 可选的内置图标。 |
| `disabled` | 禁用该菜单项。 |
| `danger` | 使用危险操作的视觉语义。 |
| `divided` | 在该项顶部添加分隔线。 |

### 4.3 Slots

`AppButtonMore` 无业务内容插槽；需完全自定义触发器或菜单内容时直接用 `AppDropdown`。

### 4.4 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean)` | 菜单请求改变展开状态时触发。 |
| `select` | `(key: string)` | 选择未禁用菜单项时触发。 |
