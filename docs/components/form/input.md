---
title: 输入框
component: AppInput
category: form
source: packages/ui/src/components/form/AppInput.vue
---

# 输入框（AppInput）

`AppInput` 是单行文本输入的基础组件，统一处理尺寸、清空、密码可见性、字符计数和输入状态。它只管理输入交互，字段校验规则和提交时机仍由业务表单决定。

## 1. 用处

- 录入名称、账号、邮箱、手机号、链接等单行文本。
- 通过 `clearable`、`showPassword` 和前后缀插槽补齐高频输入体验。
- 在动态表单、筛选栏和设置页中以一致的尺寸和状态呈现输入控件。

多行描述使用 `AppTextarea`；带搜索建议的输入使用 `AppSearchInput`；数字、价格与数量使用 `AppNumberInput`。

## 2. 代码演示

### 2.1 带清空和字符计数的课程名称

```vue demo:input-basic title="基础文本输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const courseName = ref("");
</script>

<template>
  <div class="input-demo-field">
    <AppInput
      v-model="courseName"
      clearable
      :max-length="30"
      show-word-limit
      placeholder="输入课程名称"
      aria-label="课程名称"
    />
  </div>
</template>

<style scoped>
.input-demo-field {
  width: min(100%, 360px);
}
</style>
```

`clearable` 仅在存在内容、且输入框非禁用和非只读时显示。`showWordLimit` 需要同时设置 `maxLength`；字符数按 Unicode 字符计算，避免中英文混合时计数失真。

### 2.2 密码输入与前缀图标

```vue demo:input-password title="密码输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppIcon, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const password = ref("");
</script>

<template>
  <div class="input-demo-field">
    <AppInput
      v-model="password"
      type="password"
      show-password
      autocomplete="current-password"
      placeholder="输入登录密码"
      aria-label="登录密码"
    >
      <template #prefix><AppIcon name="lock" :size="16" /></template>
    </AppInput>
  </div>
</template>

<style scoped>
.input-demo-field {
  width: min(100%, 360px);
}
</style>
```

`showPassword` 仅在 `type="password"` 时生效。登录与注册页应按场景设置 `autocomplete`，不要以自定义校验替代浏览器的密码管理能力。

## 3. API 使用方式

使用 `v-model` 绑定单一字符串值，`invalid` 只控制视觉和 `aria-invalid`，具体错误提示应由表单项提供。通过模板引用可调用组件暴露的 `focus()`、`blur()` 和 `select()`。

```vue
<AppInput
  v-model="form.email"
  type="email"
  autocomplete="email"
  :invalid="Boolean(errors.email)"
  described-by="email-error"
  placeholder="name@example.com"
  @blur="validateEmail"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前输入值，配合 `v-model` 使用。 | `string` | — |
| `id` / `name` | 传给原生 `input` 的标识与字段名。 | `string` | `undefined` |
| `type` | 原生输入类型。 | `"text" \| "password" \| "email" \| "tel" \| "url"` | `"text"` |
| `size` | 控件尺寸；未传时继承 `AppConfigProvider`。 | `ControlSize` | 继承全局配置 |
| `placeholder` | 空值提示文本。 | `string` | `""` |
| `autocomplete` | 原生自动填充提示。 | `string` | `"off"` |
| `disabled` / `readonly` | 禁用或只读状态。 | `boolean` | 继承全局配置 / `false` |
| `maxLength` | 原生最大输入长度。 | `number` | `undefined` |
| `showWordLimit` | 是否显示当前字符数与最大长度。 | `boolean` | `false` |
| `autofocus` | 页面加载后是否自动聚焦。 | `boolean` | `false` |
| `invalid` | 是否显示错误状态。 | `boolean` | `false` |
| `clearable` | 是否显示一键清空入口。 | `boolean` | `false` |
| `showPassword` | 密码模式下是否显示可见性切换入口。 | `boolean` | `false` |
| `ariaLabel` / `describedBy` | 输入框的辅助名称和说明元素 ID。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `prefix` | 输入框左侧内容，通常放图标、国家区号或固定前缀。 |
| `suffix` | 输入框右侧内容，位于清空和密码切换入口之后。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | 输入值变化时触发。 |
| `change` | `(value: string)` | 原生 `change` 时触发，适合提交已确认的值。 |
| `clear` | — | 点击清空入口后触发。 |
| `focus` / `blur` | `(event: FocusEvent)` | 原生聚焦与失焦事件。 |
