---
title: 环形图
component: AppDonutChart
category: charts
source: packages/ui/src/components/charts/AppDonutChart.vue
---

# 环形图（AppDonutChart）

`AppDonutChart` 用环形分区表达组成占比。

## 1. 用处

- 展示渠道、状态、来源等总量构成。
- 单序列时 `categories` 对应每个数值；多序列时每个序列取首个数值作为一个组成项。
- 仅在各项能构成同一整体时使用，不用它比较多个不相关的趋势。

## 2. 代码演示

### 2.1 单序列渠道构成

```vue demo:charts-donut-basic title="渠道构成"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "渠道占比", data: [46, 31, 23] }];
</script>

<template><AppDonutChart :series="series" :categories="['自然流量', '广告投放', '合作伙伴']" /></template>
```

### 2.2 多序列状态构成

```vue demo:charts-donut-series title="状态构成"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "已完成", data: [72], color: "#35a16b" },
  { name: "进行中", data: [18], color: "#0071e3" },
  { name: "风险", data: [10], color: "#d08a27" },
];
</script>

<template><AppDonutChart :series="series" aria-label="项目状态占比" /></template>
```


### 2.3 自定义颜色

```vue demo:charts-donut-colors title="自定义颜色"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "待处理", data: [30] },
  { name: "进行中", data: [45] },
  { name: "已完成", data: [120] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['待处理', '进行中', '已完成']" :colors="['#f0a020', '#3d8bfd', '#3fae66']" />
</template>
```

### 2.4 隐藏提示

```vue demo:charts-donut-tooltip-off title="隐藏提示"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "成功", data: [92] },
  { name: "失败", data: [8] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['成功', '失败']" :tooltip="false" />
</template>
```

### 2.5 导出

```vue demo:charts-donut-export title="导出"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "渠道 A", data: [260] },
  { name: "渠道 B", data: [190] },
  { name: "渠道 C", data: [140] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['渠道 A', '渠道 B', '渠道 C']" exportable export-file-name="渠道构成.svg" />
</template>
```

### 2.6 图表高度

```vue demo:charts-donut-height title="图表高度"
<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "男", data: [540] },
  { name: "女", data: [460] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['男', '女']" :height="300" />
</template>
```
## 3. API 使用方式

传入非负数值，组件将根据总和计算各区块。所有数据为零时会显示空状态；不能用负数表达增减趋势。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的展示参数，图表类型固定为 `donut`，默认 `ariaLabel` 为 `"环形图"`。组成图不支持有意义的缩放窗口，传入 `zoomable` 不会提供缩放控件。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `export`；`update:visible-range`、`zoom-change` 的事件签名与 `AppChart` 保持一致。
