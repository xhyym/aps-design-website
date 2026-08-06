---
title: 滑动验证
component: AppDragVerify
category: feedback
source: packages/ui/src/components/feedback/AppDragVerify.vue
---

# 滑动验证（AppDragVerify）

`AppDragVerify` 通过滑动确认提高高风险操作的确认成本，并同时支持鼠标、触摸和键盘操作。

## 1. 用处

- 用于删除、批量导出或账号安全等需要二次确认的轻量操作。
- 用 `v-model` 保存验证完成状态，作为提交按钮的前置条件。
- 已完成状态可由外部重置，方便复用同一个验证区域。

它不替代服务端的人机校验或权限校验，提交接口仍必须自行验证权限。

## 2. 代码演示

### 2.1 基础验证

```vue demo:drag-verify-basic title="基础验证"
<script setup lang="ts">
import { ref } from "vue";
import { AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const verified = ref(false);
</script>

<template>
  <AppDragVerify v-model="verified" @success="console.info('滑动验证已完成')" />
</template>
```

### 2.2 外部重置验证状态

```vue demo:drag-verify-reset title="重置状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDragVerify } from "aps-design-pro";
import "aps-design-pro/style.css";

const verified = ref(true);
</script>

<template>
  <AppDragVerify v-model="verified" text="拖动滑块确认删除" success-text="已确认删除" />
  <AppButton variant="text" size="small" @click="verified = false">重新验证</AppButton>
</template>
```

## 3. API 使用方式

将 `v-model` 作为业务动作的门槛；验证完成后再允许用户继续提交。

```vue
<AppDragVerify v-model="deleteVerified" text="向右拖动确认删除" />
<AppButton :disabled="!deleteVerified" @click="removeCourse">删除课程</AppButton>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前是否已验证，配合 `v-model` 使用。 | `boolean` | `false` |
| `text` / `successText` | 未完成与完成后的提示文字。 | `string` | `"向右拖动完成验证" / "验证成功"` |
| `disabled` | 是否禁止交互。 | `boolean` | `false` |
| `ariaLabel` | 覆盖滑块的辅助名称。 | `string` | `"滑动验证"` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean)` | 验证成功时更新绑定值。 |
| `success` | — | 首次完成验证时触发。 |
