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


### 2.3 成功提示

```vue demo:toast-success title="成功提示"
<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "保存成功", tone: "success", closable: false, repeatCount: 1 },
];
</script>

<template>
  <AppToast :items="items" />
</template>
```

### 2.4 警告提示

```vue demo:toast-warning title="警告提示"
<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "即将超时，请尽快提交", tone: "warning", closable: true, repeatCount: 1 },
];
</script>

<template>
  <AppToast :items="items" />
</template>
```

### 2.5 受控队列

```vue demo:toast-controlled title="受控队列"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([]);
const show = () => {
  const id = "m" + Date.now();
  items.value = [...items.value, { id, message: "这是一条新的提示", tone: "info", closable: true, repeatCount: 1 }];
};
const onClose = (id: string) => {
  items.value = items.value.filter((x) => x.id !== id);
};
</script>

<template>
  <div>
    <AppButton @click="show">弹出提示</AppButton>
    <AppToast :items="items" @close="onClose" />
  </div>
</template>
```

### 2.6 关闭与操作

```vue demo:toast-close-event title="关闭与操作"
<script setup lang="ts">
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: ToastItem[] = [
  { id: "t1", message: "更新下载完成", tone: "success", closable: true, repeatCount: 1, actionText: "立即安装" },
];
const onAction = (id: string) => {
  console.log("action on", id);
};
</script>

<template>
  <AppToast :items="items" @action="onAction" />
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
