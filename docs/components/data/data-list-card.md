---
title: 数据列表卡片
component: AppDataListCard
category: data
source: packages/ui/src/components/data/AppDataListCard.vue
---

# 数据列表卡片（AppDataListCard）

`AppDataListCard` 在卡片中展示少量关键指标，适合订单、内容和运营数据的快速概览。

## 1. 用处

- 将少量稳定指标按“名称、值、补充说明”紧凑呈现。
- 在仪表盘中作为表格或图表的摘要入口。
- 使用 `actions` 插槽放置查看报表等上下文操作。

## 2. 代码演示

### 2.1 基础指标列表

```vue demo:data-list-card-basic title="基础列表"
<script setup lang="ts">
import { AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ key: "paid", label: "已支付订单", value: 128 }, { key: "refund", label: "退款申请", value: 3, detail: "需在今天内处理" }];
</script>

<template><AppDataListCard title="订单概览" :items="items" /></template>
```

### 2.2 带卡片操作

```vue demo:data-list-card-actions title="操作入口"
<script setup lang="ts">
import { AppButton, AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ key: "publish", label: "本周上架", value: 6 }, { key: "draft", label: "待完善草稿", value: 4 }];
</script>

<template><AppDataListCard title="内容运营" description="最近 7 天" :items="items"><template #actions><AppButton size="small" variant="text">查看报表</AppButton></template></AppDataListCard></template>
```

## 3. API 使用方式

传入带稳定 `key` 的展示数据。超过一屏或需要排序、筛选时，应改用表格而不是持续堆叠卡片项。

```vue
<AppDataListCard title="销售概览" :items="overviewItems" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题。 | `string` | 必填 |
| `items` | 列表项，每项包含 `key`、`label`、`value` 和可选 `detail`。 | `DataListItem[]` | 必填 |
| `description` | 标题下的补充说明。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 标题右侧的卡片操作入口。 |

### 4.3 Events

该组件不提供自定义事件。
