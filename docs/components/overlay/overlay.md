---
title: 遮罩层
component: AppOverlay
category: overlay
source: packages/ui/src/components/overlay/AppOverlay.vue
---

# 遮罩层（AppOverlay）

`AppOverlay` 是对话框、抽屉和全屏工作层共用的底层遮罩，负责 Teleport、层级和点击遮罩关闭。

## 1. 用处

当业务需要自定义遮罩内的内容，但仍希望复用统一的 z-index 与关闭行为时使用。常规确认优先使用 `AppDialog`，避免页面自行实现重复的模态逻辑。

## 2. 代码演示

### 2.1 居中工作层

```vue demo:overlay-overlay-basic title="居中遮罩"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCard, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">打开自定义遮罩</AppButton>
  <AppOverlay v-model="visible"><AppCard padding="large">应用正在同步，请稍候。</AppCard></AppOverlay>
</template>
```

### 2.2 末端抽屉层

```vue demo:overlay-overlay-end title="末端遮罩"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCard, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">展示底部遮罩</AppButton>
  <AppOverlay v-model="visible" align="end" layer="drawer"><AppCard padding="large">这是对齐到末端的全屏工作层。</AppCard></AppOverlay>
</template>
```

## 3. API 使用方式

`AppOverlay` 本身不定义内容结构，把自定义内容放入默认插槽；通过 `layer` 与其他浮层协调层级。关闭时监听 `update:modelValue`，由父组件负责状态。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否渲染遮罩。 | `boolean` | 必填 |
| `align` | 内容对齐方向。 | `"center" \| "end"` | `center` |
| `layer` | 层级语义。 | `"dialog" \| "drawer"` | `dialog` |
| `closeOnOverlay` | 点击遮罩空白是否关闭。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 遮罩内的自定义内容。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 点击遮罩关闭时发出 `false`。 |
