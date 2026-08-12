---
title: 复选框组
component: AppCheckboxGroup
category: form
source: packages/ui/src/components/form/AppCheckboxGroup.vue
---

# 复选框组（AppCheckboxGroup）

`AppCheckboxGroup` 用稳定值数组管理多个可选项，支持数量限制、按钮和卡片两种业务展示方式。

## 1. 用处

- 用于多标签、权限、订阅偏好等可同时选择多项的字段。
- 用 `min`、`max` 约束选择数量，超出时由 `limit-exceed` 给出具体原因。
- 选项文案、说明和禁用状态全部由 `options` 描述，避免组件内部保存业务数据。

## 2. 代码演示

### 2.1 常规多选

```vue demo:form-checkbox-group-basic title="基础多选"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref(["web"]);
const options = [
  { label: "Web 前端", value: "web" },
  { label: "服务端", value: "server" },
  { label: "人工智能", value: "ai" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" aria-label="学习方向" />
</template>
```

### 2.2 卡片式订阅选择

```vue demo:form-checkbox-group-cards title="卡片多选"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "每周学习报告", value: "report", description: "汇总完成进度与薄弱项" },
  { label: "课程更新提醒", value: "update", description: "新章节上线时发送通知" },
  { label: "活动邀请", value: "activity", description: "接收公开课与直播邀请" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" appearance="cards" :columns="3" aria-label="消息订阅" />
</template>
```

### 2.3 纵向排列

```vue demo:checkbox-group-vertical title="纵向布局"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref(["web"]);
const options = [
  { label: "Web 前端", value: "web" },
  { label: "服务端", value: "server" },
  { label: "人工智能", value: "ai" },
  { label: "移动端", value: "mobile" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" direction="vertical" aria-label="技术方向" />
</template>
```

### 2.4 网格列数

```vue demo:checkbox-group-columns title="网格排列"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文档", value: "doc" },
  { label: "图文", value: "article" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" :columns="2" aria-label="内容形式" />
</template>
```

### 2.5 按钮样式

```vue demo:checkbox-group-buttons title="按钮多选"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["push"]);
const options = [
  { label: "推送", value: "push" },
  { label: "邮件", value: "email" },
  { label: "短信", value: "sms" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" appearance="buttons" aria-label="通知方式" />
</template>
```

### 2.6 整体禁用

```vue demo:checkbox-group-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["free"]);
const options = [
  { label: "免费课", value: "free" },
  { label: "会员课", value: "vip" },
  { label: "训练营", value: "bootcamp" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" disabled aria-label="课程类型" />
</template>
```

### 2.7 数量限制

```vue demo:checkbox-group-limit title="最少最多"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["math"]);
const options = [
  { label: "数学", value: "math" },
  { label: "英语", value: "english" },
  { label: "物理", value: "physics" },
  { label: "化学", value: "chemistry" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" :min="1" :max="2" aria-label="擅长科目" />
</template>
```

### 2.8 带说明选项

```vue demo:checkbox-group-described title="选项说明"
<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "周报", value: "weekly", description: "每周一汇总" },
  { label: "月报", value: "monthly", description: "每月初汇总" },
  { label: "实时", value: "realtime", description: "数据变化即推送" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" aria-label="报表订阅" />
</template>
```

## 3. API 使用方式

```vue
<AppCheckboxGroup
  v-model="form.permissions"
  :options="permissionOptions"
  :min="1"
  :max="5"
  @limit-exceed="showLimitNotice"
/>
```

`v-model` 始终是选项 `value` 的数组。不要将显示文案写入值数组，后端接收权限、分类等稳定标识更易维护。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 已选值数组。 | `string[]` | — |
| `options` | 选项数据，包含 `label`、`value`、可选 `description`、`disabled`。 | `CheckboxOption[]` | — |
| `name` | 每个原生复选框的字段名。 | `string` | `""` |
| `direction` / `columns` | 横向、纵向排列，或指定网格列数。 | `"horizontal" \| "vertical"` / `number` | `"horizontal"` / `0` |
| `appearance` | 展示样式。 | `"default" \| "buttons" \| "cards"` | `"default"` |
| `min` / `max` | 最少与最多可选数量；`0` 表示不限制。 | `number` | `0` |
| `size` / `disabled` | 控件尺寸和整体禁用状态。 | `ControlSize` / `boolean` | 继承全局配置 |
| `ariaLabel` / `describedBy` | 分组名称和说明元素 ID。 | `string` | `"多选项"` / `undefined` |

### 4.2 Slots

该组件没有插槽。需要完全自定义选项内容时，使用多个 `AppCheckbox` 组合，而不是在组选项里塞入 HTML。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string[])` | 选中集合变化。 |
| `limit-exceed` | `({ option, limit, type })` | 触碰最小或最大选择数量。 |
