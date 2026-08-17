---
title: 文字提示
component: AppTooltip
category: overlay
source: packages/ui/src/components/overlay/AppTooltip.vue
---

# 文字提示（AppTooltip）

`AppTooltip` 为图标按钮、缩写和低密度入口提供短说明，支持 hover、focus、click 和手动控制。

## 1. 用处

提示文本应保持简短，只解释入口含义，不承载必须阅读的规则或错误信息。默认同时支持 hover 与 focus，保证键盘用户也能获得相同说明。

## 2. 代码演示

### 2.1 图标按钮提示

```vue demo:overlay-tooltip-basic title="图标提示"
<script setup lang="ts">
import { AppIconButton, AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTooltip text="下载当前订单的明细文件"><AppIconButton icon="download" label="下载订单" variant="secondary" /></AppTooltip>
</template>
```

### 2.2 点击触发提示

```vue demo:overlay-tooltip-click title="点击提示"
<script setup lang="ts">
import { AppButton, AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTooltip text="课程仅对购买用户开放，支持随时回看。" trigger="click" placement="bottom"><AppButton variant="secondary">购买说明</AppButton></AppTooltip>
</template>
```


### 2.3 方向

```vue demo:overlay-tooltip-placement title="方向"
<script setup lang="ts">
import { AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTooltip text="上方提示" placement="top"><span>上</span></AppTooltip>
    <AppTooltip text="下方提示" placement="bottom"><span>下</span></AppTooltip>
    <AppTooltip text="左侧提示" placement="left"><span>左</span></AppTooltip>
    <AppTooltip text="右侧提示" placement="right"><span>右</span></AppTooltip>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 32px; }
</style>
```

### 2.4 延迟

```vue demo:overlay-tooltip-delay title="延迟"
<script setup lang="ts">
import { AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTooltip text="800ms 后显示" :show-after="800"><span>慢显示</span></AppTooltip>
    <AppTooltip text="立即显示" :hide-after="2000"><span>持久显示</span></AppTooltip>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 32px; }
</style>
```

### 2.5 禁用提示

```vue demo:overlay-tooltip-disabled title="禁用提示"
<script setup lang="ts">
import { AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTooltip text="不会显示" disabled>
    <span>悬停无提示</span>
  </AppTooltip>
</template>
```

### 2.6 受控显示

```vue demo:overlay-tooltip-controlled title="受控显示"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
</script>

<template>
  <div class="row">
    <AppTooltip v-model="show" text="受控提示内容" trigger="click">
      <AppButton size="small" @click="show = !show">{{ show ? "隐藏" : "显示" }}提示</AppButton>
    </AppTooltip>
  </div>
</template>

<style scoped>
.row { padding: 20px 0; }
</style>
```
## 3. API 使用方式

把按钮、图标或文本放进默认插槽。需要由外部控制时传入布尔 `modelValue` 并设置 `trigger="manual"`；显示变化会通过 `visibleChange` 通知业务层。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 提示内容。 | `string` | 必填 |
| `modelValue` | 受控显示状态；不传则使用内部状态。 | `boolean` | `undefined` |
| `placement` | 提示方向。 | `TooltipPlacement` | `top` |
| `trigger` | 触发方式，可传数组。 | `TooltipTrigger \| TooltipTrigger[]` | `hover` + `focus` |
| `disabled` | 是否禁用提示。 | `boolean` | `false` |
| `showAfter` / `hideAfter` | 显示与隐藏延迟，单位 ms。 | `number` | `0` |
| `offset` | 与触发器间距，单位 px。 | `number` | `7` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 触发提示的内容。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 受控模式下的显示状态变化。 |
| `visibleChange` | `boolean` | 每次显示状态变化时触发。 |
