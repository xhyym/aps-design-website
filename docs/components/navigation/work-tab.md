---
title: 工作区页签
component: AppWorkTab
category: navigation
source: packages/ui/src/components/navigation/AppWorkTab.vue
---

# 工作区页签（AppWorkTab）

`AppWorkTab` 是面向后台工作区的页签封装，复用 `AppTabs` 的键盘交互与关闭能力。

## 1. 用处

- 在管理后台中保留用户打开过的业务页面。
- 将激活页与可关闭页签列表交由布局或路由缓存管理。
- 适用于工作台上下文，不用于简单内容分组；普通切换请使用 `AppTabs`。

## 2. 代码演示

### 2.1 基础工作区

```vue demo:work-tab-basic title="基础工作区"
<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("orders");
const items: TabItem[] = [{ key: "orders", label: "交易订单" }, { key: "detail", label: "订单详情", closable: true }];
</script>

<template>
  <AppWorkTab v-model="activeKey" :items="items" />
</template>
```

默认没有关闭按钮的页签可以作为固定首页或不可关闭的工作台入口。

### 2.2 关闭后修正活动项

```vue demo:work-tab-close title="关闭后修正活动项"
<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("dashboard");
const items = ref<TabItem[]>([{ key: "dashboard", label: "工作台" }, { key: "members", label: "成员管理", closable: true }, { key: "settings", label: "系统设置", closable: true }]);

function closeTab(key: string): void {
  items.value = items.value.filter((item) => item.key !== key);
  if (!items.value.some((item) => item.key === activeKey.value)) activeKey.value = items.value[0]?.key ?? "";
}
</script>

<template>
  <AppWorkTab v-model="activeKey" :items="items" @close="closeTab" />
</template>
```

关闭当前页时父级需要选择新的活动项；组件不会猜测路由缓存或业务优先级。

## 3. API 使用方式

```vue
<AppWorkTab v-model="workspaceStore.activeKey" :items="workspaceStore.tabs" @close="workspaceStore.closeTab" />
```

建议每个 `TabItem.key` 与路由缓存键保持一致，以便关闭页签时同步清理路由、页面状态和缓存。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前工作区页签键。 | `string` | — |
| `items` | 工作页签数据。 | `TabItem[]` | — |
| `ariaLabel` | 页签列表的可访问名称。 | `string` | `"工作区页签"` |

### 4.2 Slots

`AppWorkTab` 不提供插槽。内容区域由工作区页面或路由视图渲染。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 用户切换工作页签时触发。 | `value: string` |
| `close` | 用户请求关闭一个可关闭页签时触发。 | `key: string` |
