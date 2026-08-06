---
title: 复选框
component: AppCheckbox
category: form
source: packages/ui/src/components/form/AppCheckbox.vue
---

# 复选框（AppCheckbox）

`AppCheckbox` 用于独立布尔确认、全选状态和带文字说明的多项勾选入口。它管理单项选中、半选与禁用状态；多选值集合使用 `AppCheckboxGroup`。

## 1. 用处

- 用于协议确认、权限开关、表格全选等独立勾选动作。
- 通过 `indeterminate` 表达“部分已选”，而不是以模糊文本代替。
- 使用 `bordered` 与 `description` 在设置页中呈现更完整的选择项。

## 2. 代码演示

### 2.1 协议确认

```vue demo:checkbox-basic title="基础复选框"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const hasAcceptedAgreement = ref(false);
</script>

<template>
  <AppCheckbox
    v-model="hasAcceptedAgreement"
    label="我已阅读并同意课程服务协议"
    description="继续操作前需要完成确认"
  />
</template>
```

`label` 会成为控件的可访问名称；正文更复杂时可以改用默认插槽。

### 2.2 半选与全选

```vue demo:checkbox-indeterminate title="半选状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const allSelected = ref(false);
const isPartiallySelected = ref(true);

function selectAll(value: boolean): void {
  allSelected.value = value;
  isPartiallySelected.value = false;
}
</script>

<template>
  <AppCheckbox
    v-model="allSelected"
    bordered
    :indeterminate="isPartiallySelected"
    label="全选当前页课程"
    description="已选择 3 / 10 项"
    @change="selectAll"
  />
</template>
```

半选状态应由当前页已选数量推导；用户点击全选后由业务层同步更新所有子项和 `indeterminate`。

## 3. API 使用方式

默认按布尔值工作；也可以用 `trueValue` 和 `falseValue` 映射业务字段。半选不改变 `modelValue`，只改变展示状态。

```vue
<AppCheckbox
  v-model="form.receiveNotice"
  true-value="enabled"
  false-value="disabled"
  label="接收课程更新通知"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前值，配合 `v-model` 使用。 | `boolean \| string \| number` | — |
| `id` / `name` / `value` | 原生复选框标识、字段名和值。 | `string \| number` | `undefined` |
| `label` / `description` | 主文案与补充说明。 | `string` | `""` |
| `trueValue` / `falseValue` | 选中与未选中时写回的值。 | `CheckboxValue` | `true` / `false` |
| `size` | 控件尺寸；未传时继承全局配置。 | `ControlSize` | 继承全局配置 |
| `disabled` | 是否禁用。 | `boolean` | 继承全局配置 |
| `indeterminate` | 是否显示半选状态。 | `boolean` | `false` |
| `bordered` | 是否使用带边框的选择项样式。 | `boolean` | `false` |
| `ariaLabel` / `describedBy` / `tabindex` | 无障碍名称、说明 ID 和焦点顺序。 | `string \| number` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义主文案；未提供时使用 `label`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: CheckboxValue)` | 选中状态变化时触发。 |
| `change` | `(value: CheckboxValue)` | 与值更新同步触发。 |
