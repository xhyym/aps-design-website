---
title: 对话框
component: AppDialog
category: overlay
source: packages/ui/src/components/overlay/AppDialog.vue
---

# 对话框（AppDialog）

`AppDialog` 用于在不离开当前页面的情况下承载编辑、确认或补充信息，内置遮罩、焦点回收和 Escape 关闭。

## 1. 用处

基础对话框适合短流程和局部编辑；通过 `width` 区分简单确认与宽内容，`footer` 插槽承载业务操作按钮。复杂长表单更适合 `AppDrawer`。

## 2. 代码演示

### 2.1 带底部操作

```vue demo:overlay-dialog-basic title="基础对话框"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">新建课程</AppButton>
  <AppDialog v-model="visible" title="新建课程" description="先填写课程的基础信息。">
    课程创建后可以继续补充章节、价格与封面。
    <template #footer><AppButton variant="secondary" @click="visible = false">取消</AppButton><AppButton @click="visible = false">保存草稿</AppButton></template>
  </AppDialog>
</template>
```

### 2.2 宽内容与关闭事件

```vue demo:overlay-dialog-wide title="宽对话框"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">查看发布说明</AppButton>
  <AppDialog v-model="visible" title="发布前检查" description="课程将面向所有已购买用户开放。" width="wide" @close="visible = false">
    请确认课程封面、章节视频、价格和售后规则已完成校验。
  </AppDialog>
</template>
```

## 3. API 使用方式

通常用 `v-model` 受控打开状态。需要阻止误关闭时同时关闭 `closeOnOverlay` 与 `closeOnPressEscape`，提交完成后由业务代码把状态设为 `false`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示对话框。 | `boolean` | 必填 |
| `title` | 标题。 | `string` | 必填 |
| `description` | 标题下的说明文字。 | `string` | `""` |
| `width` | 内容宽度档位。 | `"small" \| "default" \| "wide"` | `default` |
| `closable` | 是否显示右上角关闭按钮。 | `boolean` | `true` |
| `closeOnOverlay` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按 Escape 是否关闭。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 对话框主体内容。 |
| `icon` | 标题左侧图标或状态标记。 |
| `footer` | 底部操作区域；未提供时不渲染 footer。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 打开状态变化。 |
| `close` | — | 通过关闭按钮、遮罩或 Escape 关闭后触发。 |
