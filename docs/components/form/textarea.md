---
title: 文本域
component: AppTextarea
category: form
source: packages/ui/src/components/form/AppTextarea.vue
---

# 文本域（AppTextarea）

`AppTextarea` 用于录入备注、简介、回复和其他多行文本，统一处理字符统计、自适应高度与错误状态。它不决定字段是否必填或内容是否合法，这些规则应由业务表单维护。

## 1. 用处

- 在课程简介、订单备注、审核意见等位置录入多行内容。
- 通过 `maxLength` 与 `showWordLimit` 让用户明确剩余长度。
- 在评论、工单回复等内容长度不确定的场景使用 `autosize` 控制高度范围。

短文本输入使用 `AppInput`；富文本编辑使用 `AppRichTextEditor`。

## 2. 代码演示

### 2.1 有长度限制的简介字段

```vue demo:textarea-limit title="字符统计"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const courseSummary = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="courseSummary"
      :rows="3"
      :max-length="120"
      show-word-limit
      placeholder="简要说明课程适合的人群、学习目标和前置条件"
      aria-label="课程简介"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
```

字符统计只在同时传入 `maxLength` 与 `showWordLimit` 时显示。最大长度会透传到原生 `textarea`，因此输入阶段即可受到约束。

### 2.2 限制高度范围的自适应文本域

```vue demo:textarea-autosize title="自适应高度"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const reply = ref("欢迎补充具体的需求，我们会在一个工作日内回复。");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="reply"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入回复内容"
      aria-label="回复内容"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
```

`autosize` 开启后高度会在 2 到 4 行之间变化，超出上限时在控件内部滚动，不会将整个页面或表单区域撑高。

## 3. API 使用方式

用 `v-model` 管理文本值；`invalid` 配合外部错误消息使用，`describedBy` 应指向该消息的元素 ID。实例方法 `focus()`、`blur()` 与 `resize()` 可用于弹窗打开后的聚焦和动态内容重算。

```vue
<AppTextarea
  v-model="form.remark"
  :autosize="{ minRows: 3, maxRows: 6 }"
  :invalid="Boolean(errors.remark)"
  described-by="remark-error"
  @blur="validateRemark"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前文本值，配合 `v-model` 使用。 | `string` | — |
| `id` / `name` | 传给原生 `textarea` 的标识与字段名。 | `string` | `undefined` |
| `size` | 控件尺寸；未传时继承全局配置。 | `ControlSize` | 继承全局配置 |
| `placeholder` | 空值提示文本。 | `string` | `""` |
| `rows` | 未开启自适应时的初始行数。 | `number` | `3` |
| `disabled` / `readonly` | 禁用或只读状态。 | `boolean` | 继承全局配置 / `false` |
| `invalid` | 是否显示错误状态。 | `boolean` | `false` |
| `maxLength` | 原生最大输入长度。 | `number` | `undefined` |
| `showWordLimit` | 是否显示字符统计。 | `boolean` | `false` |
| `autosize` | 是否自适应高度，或设置最小与最大行数。 | `boolean \| TextareaAutosizeOptions` | `false` |
| `ariaLabel` / `describedBy` | 辅助名称和说明元素 ID。 | `string` | `"多行文本输入"` / `""` |

### 4.2 Slots

`AppTextarea` 不提供插槽；需要前后缀或复杂工具栏时，应使用外部布局组合，而不是将其塞入文本域内部。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | 输入值变化时触发。 |
| `change` | `(value: string)` | 原生 `change` 时触发。 |
| `focus` / `blur` | `(event: FocusEvent)` | 原生聚焦与失焦事件。 |
