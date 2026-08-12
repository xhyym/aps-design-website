---
title: 滑块
component: AppSlider
category: form
source: packages/ui/src/components/form/AppSlider.vue
---

# 滑块（AppSlider）

`AppSlider` 以连续轨道输入数值，适合进度、等级、阈值和比例等具有明确范围的字段。

## 1. 用处

- 用于有限数值区间的快速选择，比数字输入更直观。
- 可以显示当前值、输入框和自定义刻度，兼顾操作速度与精确录入。
- 数值永远按 `min`、`max`、`step` 规范化，避免提交展示文本。

## 2. 代码演示

### 2.1 课程进度

```vue demo:form-slider-basic title="显示进度"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const progress = ref(32);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="progress" label="课程进度" show-value aria-label="课程进度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

### 2.2 离散难度刻度

```vue demo:form-slider-marks title="刻度与数值输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const level = ref(2);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="level" :min="1" :max="4" :step="1" show-input :marks="[{ value: 1, label: '初级' }, { value: 2, label: '中级' }, { value: 3, label: '高级' }, { value: 4, label: '专家' }]" aria-label="课程难度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

### 2.3 禁用状态

```vue demo:slider-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const volume = ref(40);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="volume" disabled label="音量" show-value aria-label="禁用音量" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

### 2.4 带数值输入框

```vue demo:slider-show-input title="数值输入"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const brightness = ref(60);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="brightness" :min="0" :max="100" :step="5" show-input label="亮度" aria-label="亮度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

`showInput` 在轨道右侧追加输入框，兼顾拖拽速度与精确录入，适合亮度、音量这类需要微调的字段。

### 2.5 自定义步长

```vue demo:slider-step title="步长"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const progress = ref(30);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="progress" :min="0" :max="100" :step="10" show-value label="进度（步长 10）" aria-label="进度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

### 2.6 限定区间

```vue demo:slider-min-max title="区间"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const threshold = ref(50);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="threshold" :min="20" :max="80" show-value label="阈值区间 20–80" aria-label="阈值" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

### 2.7 可见标签

```vue demo:slider-label title="标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(75);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="score" label="综合评分" show-value aria-label="综合评分" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

传入 `label` 会在滑块上方渲染可见标签，无需额外布局即可说明该轨道的含义。

### 2.8 仅刻度

```vue demo:slider-marks-only title="仅刻度"
<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const level = ref(2);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="level" :min="1" :max="4" :step="1" :marks="[{ value: 1, label: '初级' }, { value: 2, label: '中级' }, { value: 3, label: '高级' }, { value: 4, label: '专家' }]" aria-label="课程难度（仅刻度）" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
```

与“刻度 + 数值输入”示例不同，这里只声明 `marks` 不开启 `showInput`，适合离散等级展示。

## 3. API 使用方式

```vue
<AppSlider v-model="form.passScore" :min="0" :max="100" :step="5" show-input @change="saveDraft" />
```

`v-model` 使用 `number`。若范围仅有少量离散选项，优先使用 `AppSegmented` 或 `AppRadioGroup`，避免用户在轨道上猜测刻度。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前数值。 | `number` | — |
| `min` / `max` / `step` | 可选范围和步长。 | `number` | `0` / `100` / `1` |
| `label` | 控件可见标签。 | `string` | `""` |
| `disabled` | 禁用拖拽和输入。 | `boolean` | `false` |
| `showValue` / `showInput` | 显示纯数值或数值输入框。 | `boolean` | `false` |
| `marks` | 刻度数组，每项有 `value` 与可选 `label`。 | `SliderMark[]` | `[]` |
| `ariaLabel` | 未提供 `label` 时的无障碍名称。 | `string` | `"滑块"` |

### 4.2 Slots

该组件没有插槽。刻度应通过 `marks` 统一声明，确保点击、键盘和展示标签的数值一致。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: number)` | 拖拽或输入后数值变化。 |
