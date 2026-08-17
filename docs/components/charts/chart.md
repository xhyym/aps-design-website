---
title: 通用图表
component: AppChart
category: charts
source: packages/ui/src/components/charts/AppChart.vue
---

# 通用图表（AppChart）

`AppChart` 是所有图表类型的底层入口，负责按需创建 ECharts SVG 实例、缩放窗口和导出 SVG。

## 1. 用处

- 当图表类型需要由业务配置动态决定时，直接使用 `AppChart` 的 `type`。
- 已知图表类型时优先使用 `AppLineChart`、`AppBarChart` 等语义封装。
- 数据为空、K 线或地图类型未启用时，组件会展示明确的空状态而不是渲染错误图。

## 2. 代码演示

### 2.1 通用折线图入口

```vue demo:charts-chart-line title="通用折线图"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "新增用户", data: [32, 48, 39, 66, 72, 88] }];
const categories = ["周一", "周二", "周三", "周四", "周五", "周六"];
</script>

<template><AppChart type="line" :series="series" :categories="categories" aria-label="近六日新增用户" /></template>
```

### 2.2 可缩放并导出 SVG

```vue demo:charts-chart-zoom title="缩放与导出"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 18 }, (_, index) => `第 ${index + 1} 天`);
const series: ChartSeries[] = [{ name: "订单金额", data: [12, 18, 15, 26, 32, 30, 43, 37, 51, 48, 59, 63, 54, 68, 72, 66, 79, 84] }];
</script>

<template><AppChart type="line" :series="series" :categories="categories" zoomable exportable export-file-name="订单趋势" /></template>
```


### 2.3 柱状图

```vue demo:charts-chart-bar title="柱状图"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "销售额", data: [720, 900, 860, 1100] }];
</script>

<template>
  <AppChart type="bar" :series="series" :categories="['一月', '二月', '三月', '四月']" />
</template>
```

### 2.4 环形图

```vue demo:charts-chart-donut title="环形图"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "直接访问", data: [480] },
  { name: "搜索引擎", data: [320] },
  { name: "社交媒体", data: [200] },
];
</script>

<template>
  <AppChart type="donut" :series="series" :categories="['直接访问', '搜索引擎', '社交媒体']" />
</template>
```

### 2.5 导出

```vue demo:charts-chart-export title="导出"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "活跃用户", data: [1500, 1800, 1700, 2100, 2400] }];
</script>

<template>
  <AppChart type="line" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" exportable export-file-name="活跃用户.svg" />
</template>
```

### 2.6 隐藏提示

```vue demo:charts-chart-tooltip-off title="隐藏提示"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "温度", data: [22, 25, 28, 26, 24] }];
</script>

<template>
  <AppChart type="line" :series="series" :categories="['08:00', '10:00', '12:00', '14:00', '16:00']" :tooltip="false" />
</template>
```

### 2.7 空数据

```vue demo:charts-chart-empty title="空数据"
<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [];
</script>

<template>
  <AppChart type="line" :series="series" empty-text="当前筛选条件下没有数据" />
</template>
```
## 3. API 使用方式

`series` 是数据源，`categories` 与每个序列的数据点按索引对应。受控缩放时传入 `visibleRange` 并监听 `update:visible-range`；未传入时组件内部维护当前窗口。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 图表类型。 | `ChartType` | `"line"` |
| `series` | 数据序列。 | `ChartSeries[]` | — |
| `categories` | 类目轴或组成项名称。 | `string[]` | `[]` |
| `height` | 图表高度，单位 px。 | `number` | `260` |
| `colors` | 未配置序列颜色时的颜色序列。 | `string[]` | 内置四色 |
| `ariaLabel` | 图表区域标签。 | `string` | `"数据图表"` |
| `tooltip` | 是否显示提示浮层。 | `boolean` | `true` |
| `zoomable` | 是否提供缩放窗口。 | `boolean` | `false` |
| `visibleRange` | 受控可见范围。 | `{ start: number; end: number }` | `undefined` |
| `minVisiblePoints` | 缩放后最少展示点数。 | `number` | `2` |
| `maxRenderedPoints` | 单序列最大渲染点数。 | `number` | `320` |
| `maxAxisLabels` | 类目轴最大标签密度。 | `number` | `9` |
| `sampling` | 折线数据采样策略。 | `"auto" \| "none"` | `"auto"` |
| `exportable` | 是否显示 SVG 导出操作。 | `boolean` | `false` |
| `exportFileName` | 导出文件名。 | `string` | `""` |
| `emptyText` | 无可展示数据时的提示。 | `string` | `"暂无可展示数据"` |

`ChartSeries`：`{ name: string; data: number[]; color?: string }`；`ChartType` 支持 `line`、`bar`、`h-bar`、`donut`、`ring`、`radar`、`scatter`、`dual-bar`、`k-line`、`map`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:visible-range` | 可见窗口发生变化。 | `(range: ChartVisibleRange)` |
| `zoom-change` | 缩放状态更新。 | `(range: ChartVisibleRange)` |
| `export` | SVG 已触发下载。 | `(fileName: string)` |

组件实例暴露 `zoomIn()`、`zoomOut()`、`resetZoom()`、`exportSvg()`。
