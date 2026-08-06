---
title: 分步表单
component: AppStepForm
category: form
source: packages/ui/src/components/form/AppStepForm.vue
---

# 分步表单（AppStepForm）

`AppStepForm` 将多个 `AppForm` 步骤串联，并在前进前执行字段校验和业务准入判断。

## 1. 用处

- 适合课程发布、商家入驻、复杂配置等需要分阶段完成的流程。
- 每步仍使用 `FormItem` 描述字段，因此校验和字段控件与 `AppForm` 保持一致。
- 可通过 `beforeNext` 防止业务状态不满足时进入下一步。

## 2. 代码演示

### 2.1 两步课程创建

```vue demo:step-form-basic title="课程创建流程"
<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeStep = ref(0);
const model = ref<Record<string, FormValue>>({ name: "", category: "" });
const steps: FormWorkflowStep[] = [{ key: "basic", title: "基本信息", description: "填写课程基础资料", items: [{ key: "name", label: "课程名称", type: "input", required: true, rules: [{ required: true, message: "请输入课程名称" }] }] }, { key: "category", title: "分类设置", description: "选择课程所属分类", items: [{ key: "category", label: "课程分类", type: "select", options: [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }], required: true, rules: [{ required: true, message: "请选择课程分类" }] }] }];
</script>

<template><AppStepForm v-model="model" v-model:active-step="activeStep" :steps="steps" /></template>
```

### 2.2 为步骤增加业务准入

```vue demo:step-form-guard title="步骤准入规则"
<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ title: "", agreed: false });
const steps: FormWorkflowStep[] = [{ key: "content", title: "内容确认", items: [{ key: "title", label: "申请标题", type: "input", required: true, rules: [{ required: true, message: "请输入申请标题" }] }], beforeNext: (value) => value.title === "" ? "请先补充申请标题" : true }, { key: "agreement", title: "协议确认", items: [{ key: "agreed", label: "确认协议", type: "checkbox", placeholder: "我已阅读并同意服务协议", required: true, rules: [{ validator: (value) => value === true || "请确认服务协议" }] }] }];
</script>

<template><AppStepForm v-model="model" :steps="steps" finish-text="提交申请" /></template>
```

## 3. API 使用方式

可通过组件引用调用 `next`、`previous`、`goTo` 和 `validate`。最后一步校验通过后触发 `submit`，由业务页面提交完整模型。

```vue
<AppStepForm
  ref="workflowRef"
  v-model="formModel"
  v-model:active-step="activeStep"
  :steps="steps"
  @step-error="showStepError"
  @submit="submitApplication"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 所有步骤共享的表单模型。 | `Record<string, FormValue>` | 必填 |
| `steps` | 步骤标题、字段和可选准入函数。 | `FormWorkflowStep[]` | 必填 |
| `activeStep` | 当前步骤索引，支持双向绑定。 | `number` | `0` |
| `columns` / `labelPosition` / `labelWidth` | 内部表单布局参数。 | `number` / `string` | `12` / `"top"` / `"72px"` |
| `previousText` / `nextText` / `finishText` | 底部步骤按钮文案。 | `string` | 内置中文文案 |
| `disabled` | 是否禁用步骤切换与提交。 | `boolean` | `false` |

### 4.2 Slots

该组件不提供插槽；单步字段由 `FormWorkflowStep.items` 配置。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `draft` | 表单模型、步骤索引 | 字段变化及草稿同步。 |
| `update:activeStep` / `change` | 步骤索引、步骤配置 | 步骤变化。 |
| `submit` | 完整表单模型 | 最后一步完成。 |
| `step-error` | 步骤索引、错误文案 | 校验或准入失败。 |
