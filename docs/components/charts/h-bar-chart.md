---
title: 横向柱状图
component: AppHBarChart
category: charts
source: packages/ui/src/components/charts/AppHBarChart.vue
---

# 横向柱状图（AppHBarChart）

`AppHBarChart` 固定渲染横向柱状图，便于阅读长度不一的类目名称。

## 1. 用处

- 比较问题类型、产品名称、部门或排行榜等长文本类目。
- 类目显示在纵轴，数值沿横向增长。
- 需要强制按数值排序时，应在父级完成排序后再传入数据。

## 2. 代码演示

### 2.1 工单来源

```vue demo:charts-h-bar-basic title="工单来源"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "工单数量", data: [32, 49, 67, 84] }];
</script>

<template><AppHBarChart :series="series" :categories="['账户问题', '订单问题', '权限问题', '产品建议']" /></template>
```

### 2.2 同一产品的周度比较

```vue demo:charts-h-bar-multiple title="周度比较"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本周", data: [28, 42, 38] },
  { name: "上周", data: [34, 36, 31] },
];
</script>

<template><AppHBarChart :series="series" :categories="['企业版', '专业版', '基础版']" /></template>
```


### 2.3 自定义颜色

```vue demo:charts-h-bar-colors title="自定义颜色"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "满意度", data: [92, 85, 78, 95] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['客服', '物流', '售后', '产品']" :colors="['#3fae66']" />
</template>
```

### 2.4 导出

```vue demo:charts-h-bar-export title="导出"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "耗时（天）", data: [12, 9, 16, 8] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['需求评审', '开发', '测试', '上线']" exportable />
</template>
```

### 2.5 隐藏提示

```vue demo:charts-h-bar-tooltip-off title="隐藏提示"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "人数", data: [28, 42, 35, 51] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['前端', '后端', '测试', '设计']" :tooltip="false" />
</template>
```

### 2.6 图表高度

```vue demo:charts-h-bar-height title="图表高度"
<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "库存", data: [320, 210, 450, 180] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['华东仓', '华南仓', '华北仓', '西南仓']" :height="300" />
</template>
```
## 3. API 使用方式

输入结构与 `AppBarChart` 相同。优先保证每一项类别标签可读，不要因为横向空间较大就传入过长的完整业务描述。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的全部展示参数，图表类型固定为 `h-bar`，默认 `ariaLabel` 为 `"横向柱状图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
