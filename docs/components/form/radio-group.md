---
title: 单选框组
component: AppRadioGroup
category: form
source: packages/ui/src/components/form/AppRadioGroup.vue
---

# 单选框组（AppRadioGroup）

`AppRadioGroup` 用一个稳定值管理互斥选项，并提供常规、按钮和卡片化三种展示密度。

## 1. 用处

- 用于可见性、套餐、状态等必须且只能选择一个的枚举字段。
- 选项较少时可横向排列；需要解释选择差异时使用 `cards` 及 `description`。
- 选项的值与标签分离，避免提交中文文案或展示文本。

## 2. 代码演示

### 2.1 常规单选

```vue demo:form-radio-group-basic title="基础单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("public");
const options = [
  { label: "公开", value: "public", description: "所有人可查看" },
  { label: "组织内", value: "organization", description: "仅成员可查看" },
  { label: "私密", value: "private", description: "仅自己可查看" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" aria-label="可见范围" />
</template>
```

### 2.2 卡片化方案选择

```vue demo:form-radio-group-cards title="卡片单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("standard");
const options = [
  { label: "标准版", value: "standard", description: "适合个人学习" },
  { label: "团队版", value: "team", description: "支持成员协作" },
  { label: "企业版", value: "enterprise", description: "支持组织管控" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="cards" :columns="3" aria-label="套餐类型" />
</template>
```

## 3. API 使用方式

```vue
<AppRadioGroup v-model="form.visibility" :options="visibilityOptions" appearance="buttons" @change="saveVisibility" />
```

`v-model` 是单个选项的 `value`。若允许取消或同时选择多项，改用 `AppCheckboxGroup`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 已选择的选项值。 | `string` | — |
| `options` | 选项数据，包含 `label`、`value`、可选 `description` 与 `disabled`。 | `RadioOption[]` | — |
| `name` | 原生单选框字段名。 | `string` | `""` |
| `direction` / `columns` | 横向、纵向和网格列数。 | `"horizontal" \| "vertical"` / `number` | `"horizontal"` / `0` |
| `appearance` | 展示样式。 | `"default" \| "buttons" \| "cards"` | `"default"` |
| `size` / `disabled` | 尺寸和整体禁用状态。 | `ControlSize` / `boolean` | 继承全局配置 |
| `ariaLabel` | 分组无障碍名称。 | `string` | `"单选项"` |

### 4.2 Slots

该组件没有插槽；选项说明由数据结构统一提供，保证所有选项的点击与焦点区域一致。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 已选值发生变化。 |
