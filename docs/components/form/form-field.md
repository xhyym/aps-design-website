---
title: 表单字段容器
component: AppFormField
category: form
source: packages/ui/src/components/form/AppFormField.vue
---

# 表单字段容器（AppFormField）

`AppFormField` 为任意控件补齐标签、必填标记、帮助说明、错误信息和关联的无障碍描述。

## 1. 用处

- 手写表单布局时复用统一的字段标签和反馈样式。
- 默认插槽接收 `describedBy`，传给控件可正确关联说明或错误信息。
- 用于 `AppForm` 未覆盖的自定义字段或组合控件。

## 2. 代码演示

### 2.1 顶部标签与帮助说明

```vue demo:form-field-basic title="基础字段容器"
<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const name = ref("");
</script>

<template><AppFormField label="课程名称" for="course-name" required description="最多 40 个字符"><AppInput id="course-name" v-model="name" placeholder="输入课程名称" /></AppFormField></template>
```

### 2.2 内联标签和错误提示

```vue demo:form-field-inline title="内联反馈"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const email = ref("invalid-address");
</script>

<template><AppFormField label="通知邮箱" for="notice-email" label-position="inline" error="请输入有效的邮箱地址"><template #extra><AppButton size="small" variant="text">说明</AppButton></template><AppInput id="notice-email" v-model="email" invalid /></AppFormField></template>
```

### 2.3 必填标记

```vue demo:form-field-required title="必填字段"
<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="课程封面" for="cover" required description="支持 JPG/PNG，大小不超过 2MB">
    <AppInput id="cover" v-model="value" placeholder="上传或填写封面地址" />
  </AppFormField>
</template>
```

### 2.4 错误优先于说明

```vue demo:form-field-error-priority title="错误优先显示"
<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="访问密钥" for="token" required description="用于接口鉴权" error="密钥格式不正确，应为 32 位字符串">
    <AppInput id="token" v-model="value" invalid placeholder="输入访问密钥" />
  </AppFormField>
</template>
```

### 2.5 标签行补充操作

```vue demo:form-field-extra title="extra 插槽"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("13700000000");
</script>

<template>
  <AppFormField label="手机号" for="phone" required>
    <template #extra>
      <AppButton size="small" variant="text">获取验证码</AppButton>
    </template>
    <AppInput id="phone" v-model="value" placeholder="输入手机号" />
  </AppFormField>
</template>
```

### 2.6 内联标签与自定义宽度

```vue demo:form-field-inline-width title="内联宽度"
<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <AppFormField label="课程名称" for="name" label-position="inline" :label-width="'120px'" :label-gap="'16px'">
    <AppInput id="name" v-model="value" placeholder="输入课程名称" />
  </AppFormField>
</template>
```

## 3. API 使用方式

当字段有说明或错误时，使用默认插槽参数把 `describedBy` 继续传给支持该属性的控件。

```vue
<AppFormField label="访问密钥" :error="errors.token" required>
  <template #default="{ describedBy }">
    <AppInput v-model="token" :described-by="describedBy" />
  </template>
</AppFormField>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` / `for` | 标签文字与关联控件 ID。 | `string` | `label` 必填 |
| `description` / `error` | 辅助说明或错误文案；错误优先显示。 | `string` | `""` |
| `required` | 显示必填标记。 | `boolean` | `false` |
| `labelPosition` | 标签位于顶部或左侧。 | `"top" \| "inline"` | `"top"` |
| `labelWidth` / `labelGap` | 内联标签宽度及与控件的间距。 | `string` | `"72px"` / `"12px"` |

### 4.2 Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| `default` | `{ describedBy }` | 字段控件内容。 |
| `extra` | — | 标签行右侧的补充操作。 |

### 4.3 Events

该组件不提供自定义事件。
