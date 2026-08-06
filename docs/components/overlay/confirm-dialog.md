---
title: 确认对话框
component: AppConfirmDialog
category: overlay
source: packages/ui/src/components/overlay/AppConfirmDialog.vue
---

# 确认对话框（AppConfirmDialog）

`AppConfirmDialog` 为删除、归档、发布等不可逆或有影响的操作提供统一的确认语义。

## 1. 用处

使用明确的标题、说明与确认按钮把高影响操作和普通点击区分开；`danger` 用于危险操作，`isSubmitting` 用于异步提交期间锁定关闭入口。

## 2. 代码演示

### 2.1 危险操作确认

```vue demo:overlay-confirm-dialog-basic title="危险操作确认"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="danger" @click="visible = true">删除课程</AppButton>
  <AppConfirmDialog v-model="visible" title="确认删除课程？" description="删除后无法恢复课程与章节内容。" confirm-text="确认删除" danger @confirm="visible = false" />
</template>
```

### 2.2 异步提交状态

```vue demo:overlay-confirm-dialog-loading title="提交中"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const submitting = ref(false);

function submitArchive(): void {
  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    visible.value = false;
  }, 800);
}
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">归档订单</AppButton>
  <AppConfirmDialog v-model="visible" title="归档已完成订单？" description="归档后订单仍可在历史记录中查询。" confirm-text="归档" :is-submitting="submitting" @confirm="submitArchive" />
</template>
```

## 3. API 使用方式

确认按钮触发 `confirm`，业务层开始请求并把 `isSubmitting` 设为 `true`；请求完成后再关闭 `modelValue`。取消和遮罩关闭都会同步 `modelValue`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 对话框是否打开。 | `boolean` | 必填 |
| `title` | 确认标题。 | `string` | 必填 |
| `description` | 补充说明。 | `string` | 必填 |
| `confirmText` | 确认按钮文字。 | `string` | 必填 |
| `danger` | 是否使用危险操作语义。 | `boolean` | `false` |
| `isSubmitting` | 是否正在提交；开启时禁止关闭。 | `boolean` | `false` |

### 4.2 Slots

无对外插槽；图标和按钮由组件统一呈现。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 对话框关闭或打开时同步状态。 |
| `confirm` | — | 点击确认按钮时触发。 |
