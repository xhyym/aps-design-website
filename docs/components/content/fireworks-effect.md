---
title: 烟花效果
component: AppFireworksEffect
category: content
source: packages/ui/src/components/content/AppFireworksEffect.vue
---

# 烟花效果（AppFireworksEffect）

`AppFireworksEffect` 在页面中央渲染一次不可交互的庆祝粒子效果。

## 1. 用处

- 在完成支付、发布、达成里程碑等正向结果后提供短暂反馈。
- 通过 `show` 控制可见状态，业务层决定何时触发和何时再次播放。
- 不应用作常驻装饰；频繁触发会干扰内容阅读。

## 2. 代码演示

### 2.1 操作完成后触发

```vue demo:content-fireworks-trigger title="操作完成后触发"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
function celebrate(): void {
  show.value = false;
  window.setTimeout(() => { show.value = true; }, 0);
}
</script>

<template>
  <AppButton @click="celebrate">完成发布</AppButton>
  <AppFireworksEffect :show="show" />
</template>
```

### 2.2 调整粒子数量

```vue demo:content-fireworks-density title="调整粒子数量"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
function celebrate(): void {
  show.value = !show.value;
}
</script>

<template>
  <AppButton variant="secondary" @click="celebrate">切换庆祝效果</AppButton>
  <AppFireworksEffect :show="show" :count="48" />
</template>
```

## 3. API 使用方式

将 `show` 绑定到一次性结果状态。若需要重复播放，可以先置为 `false`，在下一轮任务中重新设为 `true`，让效果重新挂载。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否挂载并播放效果。 | `boolean` | — |
| `count` | 粒子数量。 | `number` | `28` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件。
