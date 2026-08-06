---
title: 验证码输入
component: AppInputOTP
category: form
source: packages/ui/src/components/form/AppInputOTP.vue
---

# 验证码输入（AppInputOTP）

`AppInputOTP` 将一次性验证码拆为可连续输入、粘贴和键盘导航的输入格，同时对最终提交值做字符规范化。

## 1. 用处

- 用于短信、邮箱、双因素验证和恢复代码输入。
- 数字模式会过滤非数字字符；文本模式会去除空白字符。
- 组件只负责输入体验，验证码时效、次数和服务端校验必须由业务接口控制。

## 2. 代码演示

### 2.1 六位数字验证码

```vue demo:form-input-otp-basic title="数字验证码"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <AppInputOTP v-model="code" aria-label="手机验证码" />
</template>
```

### 2.2 八位恢复代码

```vue demo:form-input-otp-text title="文本恢复码"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const recoveryCode = ref("");
</script>

<template>
  <AppInputOTP v-model="recoveryCode" :length="8" input-mode="text" aria-label="恢复代码" />
</template>
```

## 3. API 使用方式

```vue
<AppInputOTP
  v-model="form.verificationCode"
  :length="6"
  input-mode="numeric"
  autocomplete="one-time-code"
  @complete="verifyCode"
/>
```

使用 `complete` 发起验证请求，但服务端仍须检查验证码是否有效。通过组件引用可调用 `focus()` 让焦点回到第一个未填写格。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 已输入的验证码文本。 | `string` | — |
| `length` | 输入格数。 | `number` | `6` |
| `inputMode` | 输入限制；数字模式会过滤非数字。 | `"numeric" \| "text"` | `"numeric"` |
| `id` / `name` | 第一个输入格 ID 与隐藏字段名。 | `string` | `undefined` |
| `size` | 控件尺寸。 | `ControlSize` | 继承全局配置 |
| `disabled` / `readonly` / `invalid` / `autofocus` | 状态控制与自动聚焦。 | `boolean` | `false` |
| `ariaLabel` / `describedBy` | 分组名称和说明元素 ID。 | `string` | `"验证码输入"` / `undefined` |

### 4.2 Slots

该组件没有插槽，避免验证码格的键盘顺序和可访问名称被非受控内容破坏。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 输入内容变化。 |
| `complete` | `(value: string)` | 内容达到 `length` 时触发。 |
