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

### 2.3 不同尺寸

```vue demo:rate-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref(3);
const medium = ref(3);
const large = ref(3);
</script>

<template>
  <div class="rate-demo-stack">
    <AppRate v-model="small" size="small" show-score aria-label="小尺寸评分" />
    <AppRate v-model="medium" show-score aria-label="默认尺寸评分" />
    <AppRate v-model="large" size="large" show-score aria-label="大尺寸评分" />
  </div>
</template>

<style scoped>
.rate-demo-stack {
  display: grid;
  gap: 12px;
}
</style>
```

`size` 改变星标与分数的字号，在列表页与详情页之间切换时保持视觉层级一致。

### 2.4 禁用状态

```vue demo:rate-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4);
</script>

<template>
  <AppRate v-model="score" disabled show-score aria-label="禁用评分" />
</template>
```

### 2.5 只读展示

```vue demo:rate-readonly title="只读"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4.5);
</script>

<template>
  <AppRate v-model="score" readonly allow-half show-score aria-label="只读评分" />
</template>
```

`readonly` 用于详情页回显已有评分，不响应点击也不会触发 `change`。

### 2.6 自定义星数

```vue demo:rate-max title="星数"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(7);
</script>

<template>
  <AppRate v-model="score" :max="10" show-score aria-label="十分制评分" />
</template>
```

`max` 决定星标总数，配合 `showScore` 可展示十分制等扩展评分体系。

### 2.7 可清空

```vue demo:rate-clearable title="清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(3);
</script>

<template>
  <AppRate v-model="score" clearable show-score aria-label="可清空评分" />
</template>
```

`clearable` 下点击当前分值会清零并触发 `clear`，适合“允许不评分”的场景。

### 2.8 分数模板

```vue demo:rate-score-template title="分数模板"
<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4);
</script>

<template>
  <AppRate v-model="score" :max="5" show-score score-template="{value} / 5 星" aria-label="自定义分数模板" />
</template>
```

`scoreTemplate` 用 `{value}` 占位符自定义分数文案，例如“4 / 5 星”。

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
