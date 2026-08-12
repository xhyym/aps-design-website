---
title: 配置式表单
component: AppForm
category: form
source: packages/ui/src/components/form/AppForm.vue
---

# 配置式表单（AppForm）

`AppForm` 通过 `FormItem` 配置生成栅格化字段、规则校验、条件显隐与提交重置流程。

## 1. 用处

- 适合字段结构稳定的创建、编辑和查询表单，减少重复的标签、校验和布局代码。
- 支持输入、选择、日期时间、级联、上传以外的大多数已公开表单控件。
- 复杂字段可用 `item-{key}` 插槽接管，同时保留统一错误反馈与表单状态。

## 2. 代码演示

### 2.1 基础表单与必填校验

```vue demo:form-basic title="课程基础信息"
<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", level: "" });
const items: FormItem[] = [{ key: "name", label: "课程名称", type: "input", placeholder: "输入课程名称", required: true, rules: [{ required: true, message: "请填写课程名称" }], span: 6 }, { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }], span: 6 }];
</script>

<template><AppForm v-model="model" :items="items" /></template>
```

### 2.2 声明式字段联动

```vue demo:form-conditional title="条件显示字段"
<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ publishMode: "draft", publishAt: "" });
const items: FormItem[] = [{ key: "publishMode", label: "发布方式", type: "radio-group", options: [{ label: "保存草稿", value: "draft" }, { label: "定时发布", value: "scheduled" }], span: 12 }, { key: "publishAt", label: "发布时间", type: "datetime", visibleWhen: { field: "publishMode", value: "scheduled" }, clearWhenHidden: true, span: 12 }];
</script>

<template><AppForm v-model="model" :items="items" label-position="inline" /></template>
```

### 2.3 栅格列数与间距

```vue demo:form-grid-columns title="栅格列数布局"
<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ a: "", b: "", c: "", d: "" });
const items: FormItem[] = [
  { key: "a", label: "字段 A", type: "input", span: 1 },
  { key: "b", label: "字段 B", type: "input", span: 1 },
  { key: "c", label: "字段 C", type: "input", span: 1 },
  { key: "d", label: "字段 D", type: "input", span: 1 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" :columns="2" :gap="20" />
</template>
```

### 2.4 内联标签

```vue demo:form-inline-labels title="内联标签表单"
<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", email: "" });
const items: FormItem[] = [
  { key: "name", label: "姓名", type: "input", placeholder: "输入姓名", span: 6 },
  { key: "email", label: "邮箱", type: "input", placeholder: "输入邮箱", span: 6 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" label-position="inline" :label-width="'96px'" />
</template>
```

### 2.5 禁用全部字段

```vue demo:form-disabled-all title="禁用整个表单"
<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "已发布课程", status: "published" });
const items: FormItem[] = [
  { key: "name", label: "课程名称", type: "input", span: 6 },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }], span: 6 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" disabled />
</template>
```

### 2.6 自定义操作区

```vue demo:form-custom-actions title="追加自定义操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", level: "" });
const items: FormItem[] = [
  { key: "name", label: "课程名称", type: "input", placeholder: "输入课程名称", span: 6 },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }], span: 6 },
];

function onSaveDraft() {
  /* 仅保存草稿，不触发校验与提交 */
}
</script>

<template>
  <AppForm v-model="model" :items="items">
    <template #actions>
      <AppButton variant="text" @click="onSaveDraft">保存草稿</AppButton>
    </template>
  </AppForm>
</template>
```

## 3. API 使用方式

使用组件引用调用 `validate`、`reset`、`scrollToField` 等方法；提交事件只会在校验通过后触发。

```vue
<AppForm ref="formRef" v-model="model" :items="items" :initial-values="initialModel" @submit="saveCourse">
  <template #item-cover="{ value, update }"><AppUpload :model-value="value" @update:model-value="update" /></template>
</AppForm>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 表单字段值，使用双向绑定。 | `Record<string, FormValue>` | 必填 |
| `initialValues` | 显式指定重置基线。 | `Record<string, FormValue>` | 创建时模型快照 |
| `items` | 字段定义、控件类型和校验规则。 | `FormItem[]` | 必填 |
| `columns` / `gap` | 表单栅格列数与间距。 | `number` | `12` / `24` |
| `labelPosition` / `labelWidth` | 标签位置与内联标签宽度。 | `"top" \| "inline"` / `string` | `"top"` / `"72px"` |
| `showReset` / `showSubmit` | 是否显示内置重置和提交按钮。 | `boolean` | `true` |
| `submitText` / `resetText` | 内置按钮文案。 | `string` | `"提交"` / `"重置"` |
| `disabled` | 是否禁用所有字段。 | `boolean` | `false` |

### 4.2 Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| `item-{fieldKey}` | `{ item, value, update }` | 接管指定字段控件。 |
| `actions` | — | 追加在内置表单操作区的内容。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | 完整表单模型 | 字段值变化。 |
| `submit` / `reset` | 完整表单模型 | 校验通过提交或重置完成。 |
| `validate` | `valid, errors` | 完整校验结束。 |
| `field-validate` | `field, valid, message` | 单字段校验完成。 |
