---
title: 柱状图卡片
component: AppBarChartCard
category: charts
source: packages/ui/src/components/charts/AppBarChartCard.vue
---

# 柱状图卡片（AppBarChartCard）

`AppBarChartCard` 将固定柱状图与指标标题收拢为后台数据卡片。

## 1. 用处

- 在看板中比较渠道、来源、区域或周期内的离散指标。
- 卡片说明用于交代数据时间范围、筛选条件或统计口径。
- 类目较多时开启缩放，避免柱状图在有限卡片宽度中失去可读性。

## 2. 代码演示

### 2.1 工单来源卡片

```vue demo:charts-bar-card-basic title="工单来源"
<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "工单", data: [27, 39, 54, 46] }];
</script>

<template><AppBarChartCard title="本周工单" description="按来源汇总" :series="series" :categories="['Web', 'App', '小程序', '电话']" /></template>
```

### 2.2 年度数据缩放与导出

```vue demo:charts-bar-card-zoom title="年度销售额"
<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 12 }, (_, index) => `${index + 1}月`);
const series: ChartSeries[] = [{ name: "销售额", data: [32, 38, 44, 41, 53, 59, 62, 68, 65, 74, 82, 91] }];
</script>

<template><AppBarChartCard title="年度销售额" :series="series" :categories="categories" zoomable exportable /></template>
```


### 2.3 说明文字

```vue demo:charts-bar-card-description title="说明文字"
<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "成交额", data: [120, 200, 150, 260] }];
</script>

<template>
  <AppBarChartCard title="成交趋势" description="近四周成交金额（万元）" :series="series" :categories="['第1周', '第2周', '第3周', '第4周']" />
</template>
```

### 2.4 导出

```vue demo:charts-bar-card-export title="导出"
<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "订单量", data: [58, 96, 74, 120] }];
</script>

<template>
  <AppBarChartCard title="订单量统计" :series="series" :categories="['Q1', 'Q2', 'Q3', 'Q4']" exportable export-file-name="订单量.svg" />
</template>
```

### 2.5 图表高度

```vue demo:charts-bar-card-height title="图表高度"
<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "人数", data: [320, 280, 410, 390] }];
</script>

<template>
  <AppBarChartCard title="参会人数" :series="series" :categories="['上海', '北京', '深圳', '杭州']" :height="320" />
</template>
```
## 3. API 使用方式

用法与 `AppChartCard` 一致，图表类型固定为 `bar`。将全部数据传入 `series`，不要先在前端截断数据来适应卡片空间。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChartCard` 的标题、说明、数据、显示、缩放和导出 Props；图表类型固定为 `bar`。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 标题栏右侧操作区。 |

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
