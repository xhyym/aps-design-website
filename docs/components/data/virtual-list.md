---
title: 虚拟列表
component: AppVirtualList
category: data
source: packages/ui/src/components/data/AppVirtualList.vue
---

# 虚拟列表（AppVirtualList）

`AppVirtualList` 只渲染可视区附近的固定高度行，降低长列表的 DOM 开销。

## 1. 用处

- 显示数百到数万条等高消息、日志或简单数据项。
- `itemHeight` 必须与实际每行高度一致；变高行项目不应使用此组件。
- 通过默认插槽渲染复杂内容，并提供稳定 `itemKey`。

## 2. 代码演示

### 2.1 文本消息列表

```vue demo:data-virtual-list-basic title="文本虚拟列表"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 600 }, (_, index) => `第 ${index + 1} 条系统消息`);
</script>

<template><AppVirtualList :items="items" :item-height="40" :height="240" /></template>
```

### 2.2 自定义行内容

```vue demo:data-virtual-list-slot title="自定义行"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 200 }, (_, index) => ({ id: index + 1, name: `成员 ${index + 1}`, role: index % 2 ? "编辑者" : "查看者" }));
</script>

<template><AppVirtualList :items="items" :item-height="48" :height="240" :item-key="(item) => item.id"><template #default="{ item }"><strong>{{ item.name }}</strong><span>{{ item.role }}</span></template></AppVirtualList></template>
```


### 2.3 固定高度

```vue demo:virtual-list-height title="固定高度"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 1000 }, (_, i) => "行 " + (i + 1));
</script>

<template>
  <AppVirtualList :items="items" :item-height="36" :height="300">
    <template #default="{ item }">
      <div class="line">{{ item }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 36px; line-height: 36px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.4 预渲染缓冲

```vue demo:virtual-list-overscan title="预渲染缓冲"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = Array.from({ length: 2000 }, (_, i) => "记录 " + (i + 1));
</script>

<template>
  <AppVirtualList :items="items" :item-height="40" :height="280" :overscan="8">
    <template #default="{ item }">
      <div class="line">{{ item }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 40px; line-height: 40px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.5 自定义键

```vue demo:virtual-list-item-key title="自定义键"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Item { id: number; name: string; }
const items: Item[] = Array.from({ length: 800 }, (_, i) => ({ id: i + 1, name: "条目 " + (i + 1) }));
const itemKey = (item: Item) => item.id;
</script>

<template>
  <AppVirtualList :items="items" :item-height="32" :height="200" :item-key="itemKey">
    <template #default="{ item }">
      <div class="line">{{ item.name }}</div>
    </template>
  </AppVirtualList>
</template>

<style scoped>
.line { height: 32px; line-height: 32px; padding: 0 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.6 空数据

```vue demo:virtual-list-empty title="空数据"
<script setup lang="ts">
import { AppVirtualList } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: string[] = [];
</script>

<template>
  <AppVirtualList :items="items" :item-height="36" :height="200" empty-text="暂无数据" />
</template>
```
## 3. API 使用方式

将完整、已排序的数据数组传给 `items`。实例可调用 `scrollToIndex(index, align)`、`scrollToTop()`、`scrollToBottom()`，不必手动查询内部滚动容器。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 要渲染的完整数组。 | `T[]` | — |
| `itemHeight` / `height` | 固定行高与可视区高度，单位 px。 | `number` | — |
| `overscan` | 可视区域前后额外渲染行数。 | `number` | `4` |
| `itemKey` / `itemLabel` | 行键和无障碍文本函数。 | `(item, index) => string \| number` / `string` | `undefined` |
| `emptyText` / `ariaLabel` | 空状态和列表标签。 | `string` | 内置文案 |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义行内容，参数为 `item`、`index`。 |

### 4.3 Events

无自定义事件；实例暴露滚动定位方法。
