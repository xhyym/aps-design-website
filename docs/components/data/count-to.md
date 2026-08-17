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


### 2.3 前后缀

```vue demo:count-to-prefix-suffix title="前后缀"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <div class="item"><span>销售额</span><AppCountTo :value="128400" prefix="¥" /></div>
    <div class="item"><span>订单量</span><AppCountTo :value="862" suffix=" 单" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
.item span { color: var(--aps-muted); margin-right: 8px; font-size: 18px; }
</style>
```

### 2.4 动画时长

```vue demo:count-to-duration title="动画时长"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <div class="item"><span>1s 快速</span><AppCountTo :value="5000" :duration="1000" /></div>
    <div class="item"><span>3s 慢速</span><AppCountTo :value="5000" :duration="3000" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
.item span { color: var(--aps-muted); margin-right: 8px; font-size: 18px; }
</style>
```

### 2.5 小数位

```vue demo:count-to-format title="小数位"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCountTo :value="98.76" :decimals="2" suffix="%" />
</template>
```

### 2.6 组合用法

```vue demo:count-to-custom title="组合用法"
<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <div class="item"><span>月活跃</span><AppCountTo :value="1234567" :duration="1500" /></div>
    <div class="item"><span>转化率</span><AppCountTo :value="4.32" :decimals="2" :duration="800" suffix="%" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
.item span { color: var(--aps-muted); margin-right: 8px; font-size: 18px; }
</style>
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
