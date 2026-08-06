---
title: 通知中心
component: AppNotification
category: feedback
source: packages/ui/src/components/feedback/AppNotification.vue
---

# 通知中心（AppNotification）

`AppNotification` 以受控浮层展示通知列表，并向外通知已读和全部已读动作。

## 1. 用处

- 在顶部导航等固定入口聚合订单、审核、库存等非阻塞消息。
- 使用 `v-model` 控制面板开合，业务数据仍由应用层维护。
- 单条阅读与全部阅读均通过事件回写到服务端或状态库。

不要把强制确认、不可忽略的异常放入通知中心。

## 2. 代码演示

### 2.1 单条已读

```vue demo:notification-basic title="单条已读"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const notifications = ref([
  { id: "order", title: "新订单待处理", description: "订单 #20260806 已支付", time: "刚刚", read: false },
  { id: "course", title: "课程审核通过", description: "Vue 工程化课程已上架", time: "10 分钟前", read: true },
]);
</script>

<template>
  <AppButton variant="secondary" @click="open = true">打开通知</AppButton>
  <AppNotification v-model="open" :items="notifications" @read="(id) => { const item = notifications.find((entry) => entry.id === id); if (item) item.read = true; }" />
</template>
```

### 2.2 全部标记已读

```vue demo:notification-read-all title="全部已读"
<script setup lang="ts">
import { ref } from "vue";
import { AppNotification } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(true);
const notifications = ref([
  { id: "1", title: "退款申请", description: "有 1 条退款待审核", time: "刚刚", read: false },
  { id: "2", title: "库存预警", description: "课程资料包库存不足", time: "5 分钟前", read: false },
]);

function markAllRead(): void {
  notifications.value.forEach((item) => { item.read = true; });
}
</script>

<template>
  <AppNotification v-model="open" :items="notifications" title="待办通知" @read-all="markAllRead" />
</template>
```

## 3. API 使用方式

组件不直接修改 `items`；请在 `read` 与 `read-all` 事件中更新本地数据并同步后端。

```vue
<AppNotification v-model="notificationOpen" :items="notificationStore.items" @read="notificationStore.read" @read-all="notificationStore.readAll" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 面板是否展开，配合 `v-model` 使用。 | `boolean` | `false` |
| `items` | 通知数据数组。 | `NotificationItem[]` | 必填 |
| `title` | 面板标题。 | `string` | `"通知"` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean)` | 打开或关闭面板时触发。 |
| `read` | `(id: string)` | 点击未读通知时触发。 |
| `read-all` | — | 点击全部标记已读时触发。 |
