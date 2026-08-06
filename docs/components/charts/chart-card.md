---
title: 图表卡片
component: AppChartCard
category: charts
source: packages/ui/src/components/charts/AppChartCard.vue
---

# 图表卡片（AppChartCard）

`AppChartCard` 将标题、说明、操作区与通用 `AppChart` 组合为仪表盘可直接使用的卡片。

## 1. 用处

- 在仪表盘中统一承载一个明确指标的趋势或比较图。
- `type` 可在运行时选择图表种类；确定类型时使用对应的 `AppLineChartCard` 等封装更清晰。
- 卡片标题应描述指标口径，说明写清统计周期或过滤条件。

## 2. 代码演示

### 2.1 基础指标卡片

```vue demo:charts-chart-card-basic title="基础图表卡片"
<script setup lang="ts">
import { AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "注册量", data: [46, 62, 58, 79, 94] }];
</script>

<template><AppChartCard title="新增注册" description="近五日统计" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" /></template>
```

### 2.2 标题操作区

```vue demo:charts-chart-card-actions title="标题操作区"
<script setup lang="ts">
import { AppButton, AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [92, 118, 136, 127, 154] }];
</script>

<template>
  <AppChartCard title="站点访问" description="按日汇总" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']">
    <template #actions><AppButton size="small" variant="text">查看报表</AppButton></template>
  </AppChartCard>
</template>
```

## 3. API 使用方式

`title` 与 `series` 必填。需要从卡片进入详情页时，把链接或按钮放入 `actions`，不要让整张卡片同时承担多种交互。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题，也会传给图表的无障碍标签。 | `string` | — |
| `description` | 标题下方说明。 | `string` | `""` |
| `type` | 内部通用图表类型。 | `ChartType` | `"line"` |
| `series` | 图表数据序列。 | `ChartSeries[]` | — |
| `categories` | 类目名称。 | `string[]` | `[]` |
| `height` | 图表高度。 | `number` | `260` |
| `colors` / `tooltip` / `zoomable` | 图表色彩、提示和缩放配置。 | 与 `AppChart` 相同 | — |
| `visibleRange` / `minVisiblePoints` | 受控范围和最少点数。 | 与 `AppChart` 相同 | — |
| `maxRenderedPoints` / `maxAxisLabels` / `sampling` | 渲染密度与采样配置。 | 与 `AppChart` 相同 | — |
| `exportable` / `exportFileName` / `emptyText` | 导出和空状态配置。 | 与 `AppChart` 相同 | — |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 卡片标题栏右侧操作区。 |

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
