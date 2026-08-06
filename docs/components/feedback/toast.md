---
title: 消息提示
component: AppToast
category: feedback
source: packages/ui/src/components/feedback/AppToast.vue
---

# 消息提示（AppToast）

`AppToast` 将应用层维护的短时消息以固定堆叠的方式呈现，并把关闭和动作回传给业务。

## 1. 用处

- 反馈保存成功、同步中、撤销删除等不需要中断用户流程的信息。
- 将消息队列放在全局状态中，页面只负责添加或移除消息。
- 通过 `actionText` 为“撤销”等短时操作提供入口。

错误详情、表单字段说明和需要确认的操作不应只依赖 Toast。

## 2. 代码演示

### 2.1 添加与关闭消息

```vue demo:toast-basic title="消息队列"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([{ id: "saved", tone: "success", message: "课程草稿已保存", closable: true, repeatCount: 1 }]);

function addToast(): void {
  items.value = [{ id: String(Date.now()), tone: "info", message: "正在同步内容", closable: true, repeatCount: 1 }, ...items.value];
}
</script>

<template>
  <AppButton size="small" @click="addToast">新增消息</AppButton>
  <AppToast :items="items" @close="(id) => { items = items.filter((item) => item.id !== id); }" />
</template>
```

### 2.2 带撤销动作的消息

```vue demo:toast-action title="撤销动作"
<script setup lang="ts">
import { ref } from "vue";
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([{ id: "undo", tone: "warning", message: "课程已移至回收站", actionText: "撤销", closable: true, repeatCount: 1 }]);
</script>

<template>
  <AppToast :items="items" @action="console.info('撤销删除课程')" @close="(id) => { items = items.filter((item) => item.id !== id); }" />
</template>
```

## 3. API 使用方式

在应用根布局挂载一个 `AppToast`，将状态库中的消息数组传入。关闭和动作后由业务决定如何更新数组。

```vue
<AppToast :items="toastStore.items" @close="toastStore.remove" @action="toastStore.handleAction" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 待展示的消息队列。 | `ToastItem[]` | 必填 |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `close` | `(id: string)` | 点击某条消息关闭入口时触发。 |
| `action` | `(id: string)` | 点击某条消息动作按钮时触发。 |
