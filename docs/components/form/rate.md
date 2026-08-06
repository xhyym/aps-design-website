---
title: 评分
component: AppRate
category: form
source: packages/ui/src/components/form/AppRate.vue
---

# 评分（AppRate）

`AppRate` 用离散星级输入收集评价，支持半星、清空、只读展示和辅助文本。

## 1. 用处

- 用于课程反馈、服务评价、内容质量等有限等级的主观评分。
- 编辑模式可通过键盘方向键调整分值；只读模式用于在详情中回显评分。
- 评分只输出数值，描述文案由 `texts` 控制，不会写入业务数据。

## 2. 代码演示

### 2.1 显示当前分数

```vue demo:form-rate-basic title="基础评分"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(3);
</script>

<template>
  <AppRate v-model="score" show-score aria-label="课程评分" />
</template>
```

### 2.2 半星与评价文本

```vue demo:form-rate-half title="半星评分"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4.5);
</script>

<template>
  <AppRate v-model="score" allow-half clearable show-text :texts="['很差', '较差', '一般', '满意', '很满意']" aria-label="服务评价" />
</template>
```

## 3. API 使用方式

```vue
<AppRate
  v-model="form.satisfaction"
  :max="10"
  allow-half
  show-score
  score-template="{value} / 10"
/>
```

评分范围从 `0` 到 `max`。启用 `clearable` 后点击当前值会清零；提交前仍应由业务决定是否允许空评分。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前评分。 | `number` | — |
| `max` | 最大星数。 | `number` | `5` |
| `allowHalf` / `clearable` | 半星评分和重复点击清空。 | `boolean` | `false` |
| `disabled` / `readonly` / `size` | 状态与尺寸。 | `boolean` / `ControlSize` | `false` / 继承全局配置 |
| `showScore` / `showText` | 显示数值或文字说明。 | `boolean` | `false` |
| `texts` / `scoreTemplate` | 各等级文字和数值展示模板。 | `string[]` / `string` | `[]` / `"{value}"` |
| `ariaLabel` | 无障碍名称。 | `string` | `"评分"` |

### 4.2 Slots

该组件没有插槽；评分标记和文字由当前数值统一计算，避免状态不一致。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: number)` | 评分变化。 |
| `clear` | — | 清空评分。 |
