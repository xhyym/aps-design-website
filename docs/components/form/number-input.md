---
title: 数字输入框
component: AppNumberInput
category: form
source: packages/ui/src/components/form/AppNumberInput.vue
---

# 数字输入框（AppNumberInput）

`AppNumberInput` 用于数量、价格、时长、比例等数值录入。组件统一处理步长、精度、边界、键盘上下键和格式化显示，避免业务页手写不一致的数值归一化逻辑。

## 1. 用处

- 录入课时数、库存、排序权重等整数。
- 录入价格、折扣、比例等需要精度控制的数值。
- 通过 `min`、`max`、`step` 和 `stepStrictly` 约束可接受范围。

纯展示金额使用 `AppText` 或格式化函数；存在单位切换、复杂表达式或区间编辑时，应在业务层组合专用控件。

## 2. 代码演示

### 2.1 带边界的课时数输入

```vue demo:number-input-basic title="数量输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const lessonCount = ref(12);
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="lessonCount"
      :min="1"
      :max="60"
      :step="1"
      aria-label="课程课时数"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
```

组件在点击增减按钮、按下方向键和输入完成后都会把值收敛到 `min` 与 `max` 之间。按钮到达边界后自动禁用。

### 2.2 价格格式化与右侧控制按钮

```vue demo:number-input-format title="金额输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppNumberInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const coursePrice = ref(199);

function formatCurrency(value: number): string {
  return `¥ ${value.toFixed(2)}`;
}

function parseCurrency(value: string): number {
  return Number(value.replace(/[^\d.]/g, ""));
}
</script>

<template>
  <div class="number-demo-field">
    <AppNumberInput
      v-model="coursePrice"
      :min="0"
      :step="10"
      :precision="2"
      controls-position="right"
      :formatter="formatCurrency"
      :parser="parseCurrency"
      aria-label="课程售价"
    />
  </div>
</template>

<style scoped>
.number-demo-field {
  width: min(100%, 240px);
}
</style>
```

`formatter` 只控制非编辑状态的显示文本，`parser` 负责把用户输入还原为数字。两者应成对设计，且 `parser` 必须返回有限数字。

## 3. API 使用方式

使用 `v-model` 绑定数值，而不是字符串。输入为空时仅在设置 `valueOnClear` 后才会写回该默认数值并触发 `clear`；未设置时组件会在失焦后恢复上一个有效值。

```vue
<AppNumberInput
  v-model="form.stock"
  :min="0"
  :step="5"
  step-strictly
  :value-on-clear="0"
  @change="saveStockDraft"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前数值，配合 `v-model` 使用。 | `number` | — |
| `id` / `name` | 传给原生输入框的标识与字段名。 | `string` | `undefined` |
| `min` / `max` | 最小值与最大值。 | `number` | `undefined` |
| `step` | 每次增减的步长；无效值会按 `1` 处理。 | `number` | `1` |
| `precision` | 小数精度，内部限制在 `0` 到 `16` 位。 | `number` | `undefined` |
| `stepStrictly` | 是否将数值吸附到以 `min` 或 `0` 为基准的步长倍数。 | `boolean` | `false` |
| `controls` | 是否显示增减控制按钮。 | `boolean` | `true` |
| `controlsPosition` | 控制按钮位置。 | `"default" \| "right"` | `"default"` |
| `valueOnClear` | 清空时写回的数值；未设置则恢复上一个有效值。 | `number` | `undefined` |
| `formatter` | 数值转展示文本的函数。 | `NumberInputFormatter` | `undefined` |
| `parser` | 文本转数值的函数。 | `NumberInputParser` | `undefined` |
| `size` | 控件尺寸；未传时继承全局配置。 | `ControlSize` | 继承全局配置 |
| `disabled` / `readonly` | 禁用或只读状态。 | `boolean` | 继承全局配置 / `false` |
| `placeholder` / `ariaLabel` | 空值提示与辅助名称。 | `string` | `""` / `"数值输入"` |

### 4.2 Slots

`AppNumberInput` 不提供插槽。需要货币符号或单位时优先用 `formatter` 展示；若单位本身可切换，应由外部控件负责。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: number)` | 值变化时触发。 |
| `change` | `(value: number)` | 增减、失焦确认或清空默认值写回后触发。 |
| `clear` | — | 清空且设置 `valueOnClear` 时触发。 |
| `focus` / `blur` | `(event: FocusEvent)` | 原生聚焦与失焦事件。 |
