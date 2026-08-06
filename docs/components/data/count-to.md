---
title: 数字动画
component: AppCountTo
category: data
source: packages/ui/src/components/data/AppCountTo.vue
---

# 数字动画（AppCountTo）

`AppCountTo` 将数值平滑过渡到目标值，适用于经营指标、销量和金额等需要吸引注意的数字。

## 1. 用处

- 在数据首次加载或筛选条件变化后突出关键指标。
- 用 `prefix`、`suffix` 补全金额、人数等单位。
- 根据精度设置展示小数，而不是自行格式化后传入字符串。

它只处理数字过渡；千分位、复杂单位或本地化格式请使用 `AppStatistic`。

## 2. 代码演示

### 2.1 学员数量

```vue demo:count-to-basic title="整数动画"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppCountTo :value="1280" suffix=" 位学员" /></template>
```

### 2.2 带小数的经营金额

```vue demo:count-to-decimals title="小数与前后缀"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppCountTo :value="98.6" :decimals="1" prefix="¥" suffix=" 万" :duration="1200" /></template>
```

## 3. API 使用方式

当 `value` 更新时组件会自动从当前展示值过渡到新值。

```vue
<AppCountTo :value="dashboard.paidOrderCount" :duration="500" suffix=" 单" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 动画目标数值。 | `number` | 必填 |
| `duration` | 过渡时长，单位为毫秒。 | `number` | `700` |
| `decimals` | 小数位数。 | `number` | `0` |
| `prefix` / `suffix` | 数值前后的固定文本。 | `string` | `""` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

该组件不提供自定义事件。
