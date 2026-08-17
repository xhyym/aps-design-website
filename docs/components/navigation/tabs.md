---
title: 页签
component: AppTabs
category: navigation
source: packages/ui/src/components/navigation/AppTabs.vue
---

# 页签（AppTabs）

`AppTabs` 用于在同一上下文中切换少量并列内容，支持线条、卡片、边框卡片、位置调整和可编辑页签。

## 1. 用处

- 在资料页、设置页中切换彼此相关的内容区域。
- 在后台工作台中提供可关闭、可新增的工作页签。
- 通过 `beforeLeave` 在离开未保存内容前交给业务层确认。

## 2. 代码演示

### 2.1 带内容面板的页签

```vue demo:tabs-basic title="带内容面板的页签"
<script setup lang="ts">
import { ref } from "vue";
import { AppTabs, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeTab = ref("profile");
const items: TabItem[] = [{ key: "profile", label: "个人资料", content: "在此维护展示信息。" }, { key: "security", label: "安全设置", content: "在此维护登录与设备安全。" }];
</script>

<template>
  <AppTabs v-model="activeTab" :items="items" show-panels />
</template>
```

`showPanels` 开启后，组件优先使用 `panel-键值` 具名插槽；未提供插槽时回退显示 `item.content`。

### 2.2 可关闭与新增页签

```vue demo:tabs-editable title="可关闭与新增页签"
<script setup lang="ts">
import { ref } from "vue";
import { AppTabs, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeTab = ref("orders");
const items = ref<TabItem[]>([{ key: "orders", label: "订单列表", closable: true }, { key: "detail", label: "订单详情", closable: true }]);

function removeTab(key: string): void {
  items.value = items.value.filter((item) => item.key !== key);
  activeTab.value = items.value[0]?.key ?? "";
}
</script>

<template>
  <AppTabs v-model="activeTab" :items="items" type="card" editable @tab-remove="removeTab" @tab-add="items.push({ key: `tab-${items.length + 1}`, label: `新页签 ${items.length + 1}`, closable: true })" />
</template>
```

关闭和新增事件只通知父级，列表删改、下一个激活页签的选择规则由业务应用负责。


### 2.3 卡片风格

```vue demo:nav-tabs-card title="卡片风格"
<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览" },
  { key: "b", label: "详情" },
  { key: "c", label: "日志" },
];
</script>

<template>
  <AppTabs :items="items" type="card" model-value="a" />
</template>
```

### 2.4 边框卡片

```vue demo:nav-tabs-border-card title="边框卡片"
<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "基础" },
  { key: "b", label: "高级" },
];
</script>

<template>
  <AppTabs :items="items" type="border-card" model-value="a" />
</template>
```

### 2.5 不同位置

```vue demo:nav-tabs-position title="不同位置"
<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "标签一" },
  { key: "b", label: "标签二" },
];
</script>

<template>
  <AppTabs :items="items" position="left" model-value="a" />
</template>
```

### 2.6 可关闭

```vue demo:nav-tabs-closable title="可关闭"
<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref([
  { key: "a", label: "文档", closable: true },
  { key: "b", label: "表格", closable: true },
  { key: "c", label: "图表", closable: true },
]);
</script>

<template>
  <AppTabs :items="items" model-value="a" @close="(key: string) => (items = items.filter((t) => t.key !== key))" />
</template>
```

### 2.7 可新增

```vue demo:nav-tabs-addable title="可新增"
<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref([
  { key: "a", label: "页签一" },
  { key: "b", label: "页签二" },
]);
let seq = 2;
</script>

<template>
  <AppTabs :items="items" :addable="true" model-value="a" @tab-add="() => (items = [...items, { key: 'n' + (++seq), label: '新页签' }])" />
</template>
```

### 2.8 内容面板

```vue demo:nav-tabs-panels title="内容面板"
<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", content: "概览面板的兜底内容。" },
  { key: "b", label: "详情", content: "详情面板的兜底内容。" },
];
</script>

<template>
  <AppTabs :items="items" show-panels model-value="a" />
</template>
```

### 2.9 切换拦截

```vue demo:nav-tabs-before-leave title="切换拦截"
<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("a");
const items = [
  { key: "a", label: "编辑中" },
  { key: "b", label: "已锁定" },
];
const onBeforeLeave = (next: string) => next !== "b";
</script>

<template>
  <AppTabs :items="items" :model-value="active" :before-leave="onBeforeLeave" @update:model-value="(k: string) => (active = k)" />
</template>
```

### 2.10 等宽拉伸

```vue demo:nav-tabs-stretch title="等宽拉伸"
<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "周一" },
  { key: "b", label: "周二" },
  { key: "c", label: "周三" },
];
</script>

<template>
  <AppTabs :items="items" :stretch="true" model-value="a" />
</template>
```
## 3. API 使用方式

```vue
<AppTabs v-model="activeKey" :items="workTabs" editable :before-leave="confirmLeave" @tab-remove="closeWorkspace" @tab-add="createWorkspace" />
```

`beforeLeave` 可以返回 `false` 或拒绝 Promise 来阻止切换，适合离开编辑状态前询问用户。不要在其中直接改写 `modelValue`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前活动页签键。 | `string` | — |
| `items` | 页签项，支持 `key`、`label`、`icon`、`disabled`、`closable` 与 `content`。 | `TabItem[]` | — |
| `ariaLabel` | 页签列表的可访问名称。 | `string` | `"页签"` |
| `type` | 页签视觉类型。 | `"line" \| "card" \| "border-card"` | `"line"` |
| `position` | 页签栏的位置。 | `"top" \| "right" \| "bottom" \| "left"` | `"top"` |
| `stretch` | 是否让页签平均占满可用宽度。 | `boolean` | `false` |
| `addable` | 是否显示新增页签按钮。 | `boolean` | `false` |
| `editable` | 是否允许关闭已有页签并显示新增按钮。 | `boolean` | `false` |
| `showPanels` | 是否展示默认或具名的内容面板。 | `boolean` | `false` |
| `beforeLeave` | 切换前的同步或异步拦截函数。 | `TabsBeforeLeave` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | `showPanels` 为 `true` 时的面板兜底内容，接收 `item`。 |
| `panel-{key}` | 对应页签的专用面板插槽，接收 `item`。 |

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 成功切换页签时触发。 | `key: string` |
| `change` | 成功切换后触发。 | `key: string, previousKey: string` |
| `close` | 点击关闭按钮时触发。 | `key: string` |
| `tab-remove` | 点击关闭按钮时触发，语义同 `close`。 | `key: string` |
| `tab-add` | 点击新增页签按钮时触发。 | — |
| `before-leave-rejected` | 离开拦截返回 `false` 或异常时触发。 | `nextKey: string, activeKey: string` |
