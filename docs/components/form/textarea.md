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

### 2.3 不同尺寸

```vue demo:textarea-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="textarea-demo-stack">
    <AppTextarea v-model="small" size="small" :rows="2" placeholder="size=small" aria-label="小尺寸文本域" />
    <AppTextarea v-model="medium" :rows="2" placeholder="size=default" aria-label="默认尺寸文本域" />
    <AppTextarea v-model="large" size="large" :rows="2" placeholder="size=large" aria-label="大尺寸文本域" />
  </div>
</template>

<style scoped>
.textarea-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 460px);
}
</style>
```

`size` 控制字号与内边距；在密集表单里用 `small` 可以减少纵向占用。

### 2.4 固定行高

```vue demo:textarea-fixed-rows title="固定行数"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const intro = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="intro"
      :rows="6"
      placeholder="未开启自适应，高度固定为 6 行"
      aria-label="固定行高文本域"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
```

未开启 `autosize` 时，`rows` 决定初始高度；内容超过该高度后控件内部滚动。

### 2.5 禁用与只读

```vue demo:textarea-disabled title="禁用与只读"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledValue = ref("该字段当前不可编辑");
const readonlyValue = ref("只读内容，可以选中复制但不能修改");
</script>

<template>
  <div class="textarea-demo-stack">
    <AppTextarea v-model="disabledValue" disabled aria-label="禁用文本域" />
    <AppTextarea v-model="readonlyValue" readonly aria-label="只读文本域" />
  </div>
</template>

<style scoped>
.textarea-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 460px);
}
</style>
```

`readonly` 仍可被选中复制，适合展示由系统生成、不允许手改的说明。

### 2.6 错误状态

```vue demo:textarea-invalid title="错误状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const remark = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="remark"
      :rows="3"
      invalid
      described-by="remark-error"
      aria-label="审核意见"
    />
    <p id="remark-error" class="textarea-demo-error">审核意见不能为空，请补充说明。</p>
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
.textarea-demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
```

`describedBy` 指向错误消息的元素 ID，屏幕阅读器会在聚焦时朗读该说明。

### 2.7 布尔自适应

```vue demo:textarea-autosize-boolean title="自适应（布尔）"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const reply = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="reply"
      :autosize="true"
      placeholder="高度随内容增长，无固定上下限"
      aria-label="自适应文本域"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
```

传入 `true` 时高度仅受内容约束；需要上下限时改用 `{ minRows, maxRows }` 对象形式。

### 2.8 综合用法

```vue demo:textarea-combined title="综合用法"
<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const feedback = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="feedback"
      :autosize="{ minRows: 3, maxRows: 5 }"
      :max-length="200"
      show-word-limit
      placeholder="请输入您的反馈，最多 200 字"
      aria-label="用户反馈"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
```

把自适应高度、长度限制与字符统计组合，是常见的反馈录入形态。

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
