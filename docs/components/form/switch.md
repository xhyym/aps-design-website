---
title: 开关
component: AppSwitch
category: form
source: packages/ui/src/components/form/AppSwitch.vue
---

# 开关（AppSwitch）

`AppSwitch` 用于即时生效的二元状态切换，例如发布、通知与可见范围。它支持加载态和异步前置校验，避免用户连续点击造成状态错乱。

## 1. 用处

- 切换可立即保存的单一布尔状态。
- 在异步权限验证或保存前使用 `beforeChange` 阻止无效切换。
- 用 `activeText`、`inactiveText` 明确状态含义，而不是只依赖颜色。

需要提交后才生效的设置，优先使用复选框或单选框，并在表单底部提供保存动作。

## 2. 代码演示

### 2.1 带说明的自动发布开关

```vue demo:switch-basic title="基础开关"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const autoPublish = ref(true);
</script>

<template>
  <AppSwitch
    v-model="autoPublish"
    tone="green"
    label="审核通过后自动上架"
    description="关闭后需要手动发布课程"
  />
</template>
```

`tone` 只表示视觉色调，不应替代“开启 / 关闭”等可读文案。

### 2.2 异步前置校验

```vue demo:switch-before-change title="切换前校验"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const publicAccess = ref(false);

function confirmPublicAccess(nextValue: boolean): Promise<boolean> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(nextValue), 700);
  });
}
</script>

<template>
  <AppSwitch
    v-model="publicAccess"
    inline-prompt
    active-text="公开"
    inactive-text="私有"
    label="课程访问范围"
    :before-change="confirmPublicAccess"
  />
</template>
```

`beforeChange` 期间开关会锁定；返回 `false` 时触发 `changeBlocked`，抛出异常时触发 `changeError`。

## 3. API 使用方式

通过 `v-model` 绑定业务状态。若切换需要请求服务端，可在 `beforeChange` 中完成校验，或由外部 `loading` 控制保存中的状态。

```vue
<AppSwitch
  v-model="settings.allowComment"
  :before-change="confirmCommentPermission"
  :loading="isSaving"
  label="允许学员评论"
  @change="saveSetting"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前开关状态，配合 `v-model` 使用。 | `boolean` | — |
| `label` / `description` | 外部主文案与补充说明。 | `string` | `""` |
| `activeText` / `inactiveText` | 开启与关闭的状态文字。 | `string` | `""` |
| `inlinePrompt` | 是否将状态文字放入开关轨道内。 | `boolean` | `false` |
| `tone` | 开启时的色调。 | `"blue" \| "green" \| "orange" \| "red"` | `"blue"` |
| `loading` | 是否进入外部加载态。 | `boolean` | `false` |
| `beforeChange` | 切换前校验函数，可返回布尔值或 Promise。 | `SwitchBeforeChange` | `undefined` |
| `size` / `disabled` | 控件尺寸与禁用状态。 | `ControlSize \| boolean` | 继承全局配置 |
| `ariaLabel` | 覆盖开关的辅助名称。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 位于文案区之后的扩展内容，适合放辅助链接或状态说明。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: boolean)` | 校验通过并完成切换后触发。 |
| `changeBlocked` | `(nextValue: boolean)` | `beforeChange` 返回 `false` 时触发。 |
| `changeError` | `(message: string)` | 前置校验抛出异常时触发。 |
