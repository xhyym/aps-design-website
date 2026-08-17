---
title: 柱状图
component: AppBarChart
category: charts
source: packages/ui/src/components/charts/AppBarChart.vue
---

# 柱状图（AppBarChart）

`AppBarChart` 固定渲染垂直柱状图，适合比较有限类目下的数值差异。

## 1. 用处

- 比较区域、渠道、季度或产品类别的数量与金额。
- 多序列时每一个类别下按序列并列展示。
- 类目过多时开启 `zoomable`，避免柱体与坐标标签被过度压缩。

## 2. 代码演示

### 2.1 单序列区域成交

```vue demo:charts-bar-basic title="区域成交"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "成交订单", data: [86, 122, 98, 146, 168] }];
</script>

<template><AppBarChart :series="series" :categories="['华东', '华南', '华北', '西南', '西北']" /></template>
```

### 2.2 实际与目标

```vue demo:charts-bar-compare title="目标比较"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "实际", data: [34, 46, 52, 61] },
  { name: "目标", data: [40, 44, 50, 58] },
];
</script>

<template><AppBarChart :series="series" :categories="['一季度', '二季度', '三季度', '四季度']" :colors="['#0071e3', '#35a16b']" /></template>
```


### 2.3 自定义颜色

```vue demo:charts-bar-colors title="自定义颜色"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本月", data: [86, 122, 98, 146, 168] },
  { name: "上月", data: [70, 98, 110, 120, 130] },
];
</script>

<template>
  <AppBarChart :series="series" :categories="['华东', '华南', '华北', '西南', '西北']" :colors="['#e65c41', '#3d8bfd']" />
</template>
```

### 2.4 导出 SVG

```vue demo:charts-bar-export title="导出 SVG"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [320, 480, 410, 560, 620] }];
</script>

<template>
  <AppBarChart :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" exportable export-file-name="访问量柱状图.svg" />
</template>
```

### 2.5 缩放窗口

```vue demo:charts-bar-zoom title="缩放窗口"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "日活", data: [200, 240, 310, 280, 360, 420, 390, 450, 480, 520, 500, 610] }];
const cats = Array.from({ length: 12 }, (_, i) => (i + 1) + "月");
</script>

<template>
  <AppBarChart :series="series" :categories="cats" zoomable />
</template>
```

### 2.6 隐藏提示

```vue demo:charts-bar-tooltip-off title="隐藏提示"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "销量", data: [44, 72, 58, 90, 66] }];
</script>

<template>
  <AppBarChart :series="series" :categories="['A', 'B', 'C', 'D', 'E']" :tooltip="false" />
</template>
```

### 2.7 空数据

```vue demo:charts-bar-empty title="空数据"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [];
</script>

<template>
  <AppBarChart :series="series" empty-text="暂无销售数据" />
</template>
```
## 3. API 使用方式

`series[i].data[j]` 与 `categories[j]` 对应。若类别名称很长，优先在业务层提供短名称并在表格或详情中保留全称。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的全部展示参数，但图表类型固定为 `bar`，默认 `ariaLabel` 为 `"柱状图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
