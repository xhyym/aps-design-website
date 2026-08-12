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

### 2.3 不同尺寸

```vue demo:input-otp-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppInputOTP v-model="small" size="small" aria-label="小尺寸验证码" />
    <AppInputOTP v-model="medium" aria-label="默认尺寸验证码" />
    <AppInputOTP v-model="large" size="large" aria-label="大尺寸验证码" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
}
</style>
```

### 2.4 禁用与只读

```vue demo:input-otp-disabled title="禁用与只读"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledCode = ref("123456");
const readonlyCode = ref("654321");
</script>

<template>
  <div class="demo-stack">
    <AppInputOTP v-model="disabledCode" disabled aria-label="禁用验证码" />
    <AppInputOTP v-model="readonlyCode" readonly aria-label="只读验证码" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
}
</style>
```

### 2.5 错误状态

```vue demo:input-otp-invalid title="错误状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" invalid described-by="otp-error" aria-label="错误验证码" />
    <p id="otp-error" class="demo-error">验证码错误，请重新输入。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
```

### 2.6 自动聚焦

```vue demo:input-otp-autofocus title="自动聚焦"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" autofocus aria-label="自动聚焦验证码" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

`autofocus` 在挂载后把焦点放到第一个未填写格，适合从短信深链进入的验证页。

### 2.7 自定义长度

```vue demo:input-otp-length4 title="自定义长度"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" :length="4" aria-label="四位验证码" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

`length` 决定输入格数量；数字模式会自动过滤非数字字符，文本模式去除空白。

### 2.8 输入完成事件

```vue demo:input-otp-complete title="输入完成"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputOTP } from "aps-design-pro";
import "aps-design-pro/style.css";

const code = ref("");
const status = ref("等待输入完整验证码");

function onComplete(value: string): void {
  status.value = `验证码已输入完成：${value}`;
}
</script>

<template>
  <div class="demo-field">
    <AppInputOTP v-model="code" @complete="onComplete" aria-label="完整验证码" />
    <span class="demo-status">{{ status }}</span>
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
}
.demo-status {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

`complete` 在内容达到 `length` 时触发，可在此直接发起校验请求；服务端仍须最终确认有效性。

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
