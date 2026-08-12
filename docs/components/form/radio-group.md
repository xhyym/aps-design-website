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

### 2.3 纵向排列

```vue demo:radio-group-vertical title="纵向布局"
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
  <AppRadioGroup v-model="value" :options="options" direction="vertical" aria-label="可见范围" />
</template>
```

### 2.4 网格列数

```vue demo:radio-group-columns title="网格排列"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("standard");
const options = [
  { label: "标准版", value: "standard" },
  { label: "团队版", value: "team" },
  { label: "企业版", value: "enterprise" },
  { label: "旗舰版", value: "ultimate" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" :columns="2" aria-label="套餐类型" />
</template>
```

### 2.5 按钮样式

```vue demo:radio-group-buttons title="按钮单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("edit");
const options = [
  { label: "编辑", value: "edit" },
  { label: "预览", value: "preview" },
  { label: "分享", value: "share" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="buttons" aria-label="视图模式" />
</template>
```

### 2.6 整体禁用

```vue demo:radio-group-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("standard");
const options = [
  { label: "标准版", value: "standard" },
  { label: "团队版", value: "team" },
  { label: "企业版", value: "enterprise" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" disabled aria-label="套餐类型" />
</template>
```

### 2.7 多档尺寸

```vue demo:radio-group-size title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("a");
const large = ref("a");
const smallOptions = [
  { label: "选项一", value: "a" },
  { label: "选项二", value: "b" },
];
const largeOptions = [
  { label: "选项一", value: "a" },
  { label: "选项二", value: "b" },
];
</script>

<template>
  <div class="demo-stack">
    <AppRadioGroup v-model="small" :options="smallOptions" size="small" aria-label="小尺寸" />
    <AppRadioGroup v-model="large" :options="largeOptions" size="large" aria-label="大尺寸" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 12px; }
</style>
```

### 2.8 卡片带说明

```vue demo:radio-group-described title="卡片说明"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("push");
const options = [
  { label: "站内信", value: "push", description: "实时性强" },
  { label: "邮件", value: "email", description: "适合摘要" },
  { label: "短信", value: "sms", description: "触达率高" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="cards" :columns="3" aria-label="通知渠道" />
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
