---
title: 折叠面板
component: AppCollapse
category: data
source: packages/ui/src/components/data/AppCollapse.vue
---

# 折叠面板（AppCollapse）

`AppCollapse` 用于按需展开说明、规则和课程内容，支持多开与手风琴两种模式。

## 1. 用处

- 收纳不需要一直展开的帮助内容、商品规则或章节说明。
- 非互斥内容使用数组 `v-model` 同时展开多个面板。
- 互斥内容使用 `accordion` 和单个字符串值。

## 2. 代码演示

### 2.1 同时展开多个面板

```vue demo:collapse-basic title="多面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKeys = ref(["intro"]);
const items = [{ key: "intro", title: "课程介绍", content: "面向 Vue 3 项目的工程化实战课程。" }, { key: "outline", title: "课程大纲", content: "包含构建、测试与发布章节。" }];
</script>

<template><AppCollapse v-model="activeKeys" :items="items" /></template>
```

### 2.2 手风琴模式

```vue demo:collapse-accordion title="手风琴"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("shipping");
const items = [{ key: "shipping", title: "发货规则", content: "资料包将在付款后自动发放。" }, { key: "refund", title: "退款规则", content: "购买前请确认课程适用范围。" }];
</script>

<template><AppCollapse v-model="activeKey" accordion :items="items" /></template>
```


### 2.3 外边框

```vue demo:collapse-bordered title="外边框"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["p1"]);
const items = [
  { key: "p1", title: "基础信息", content: "用于填写订单的基础信息。" },
  { key: "p2", title: "配送信息", content: "收货地址与配送方式。" },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items" bordered />
</template>
```

### 2.4 自定义标题

```vue demo:collapse-custom-title title="自定义标题"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["a"]);
const items = [
  { key: "a", title: "账户安全", content: "管理登录密码与二次验证。" },
  { key: "b", title: "通知偏好", content: "设置消息提醒方式。" },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items">
    <template #title="{ item }">
      <span>{{ item.title }}</span>
      <AppTag size="small" tone="green" style="margin-left: 8px">推荐</AppTag>
    </template>
  </AppCollapse>
</template>
```

### 2.5 禁用面板

```vue demo:collapse-disabled title="禁用面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["ok"]);
const items = [
  { key: "ok", title: "可用面板", content: "该面板可以正常展开与收起。" },
  { key: "no", title: "已锁定面板", content: "该面板不允许展开。", disabled: true },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items" />
</template>
```

### 2.6 受控展开

```vue demo:collapse-controlled title="受控展开"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref<string[]>([]);
const items = [
  { key: "one", title: "第一项", content: "受控模式下由页面维护展开状态。" },
  { key: "two", title: "第二项", content: "可配合按钮统一展开或收起。" },
];
</script>

<template>
  <div>
    <div class="bar">
      <AppButton size="small" @click="open = ['one', 'two']">全部展开</AppButton>
      <AppButton size="small" @click="open = []">全部收起</AppButton>
    </div>
    <AppCollapse v-model="open" :items="items" />
  </div>
</template>

<style scoped>
.bar { display: flex; gap: 8px; margin-bottom: 12px; }
</style>
```

### 2.7 自定义面板内容

```vue demo:collapse-content-slot title="自定义面板内容"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["info"]);
const items = [{ key: "info", title: "运行状态" }];
</script>

<template>
  <AppCollapse v-model="open" :items="items">
    <template #item-info>
      <div class="status">
        <AppTag tone="green">运行中</AppTag>
        <span>CPU 占用 12%，内存 2.1G / 8G</span>
      </div>
    </template>
  </AppCollapse>
</template>

<style scoped>
.status { display: flex; gap: 12px; align-items: center; }
</style>
```
## 3. API 使用方式

每项必须有稳定的 `key`。需要富内容时，使用名为 `item-${key}` 的插槽。

```vue
<AppCollapse v-model="active" :items="items"><template #item-intro>课程详情内容</template></AppCollapse>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 展开项；普通模式为数组，手风琴模式为单个 key。 | `string[] \| string` | `[]` |
| `items` | 面板项，包含 `key`、`title`、可选 `description`、`content` 与 `disabled`。 | `CollapseItem[]` | 必填 |
| `accordion` / `bordered` | 是否互斥展开、是否显示外边框。 | `boolean` | `false / true` |
| `ariaLabel` | 区域辅助名称。 | `string` | `"折叠面板"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `title` | 自定义标题，参数为 `{ item }`。 |
| `item-${key}` | 自定义对应面板内容，参数为 `{ item }`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string[] \| string)` | 展开项变化时触发。 |
