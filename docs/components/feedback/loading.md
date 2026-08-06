---
title: 加载遮罩
component: AppLoading
category: feedback
source: packages/ui/src/components/feedback/AppLoading.vue
---

# 加载遮罩（AppLoading）

`AppLoading` 在局部内容或整个视口等待异步结果时覆盖加载指示，避免用户误以为操作没有响应。

## 1. 用处

- 将局部内容包在组件中，显示区域级加载态。
- 使用 `fullscreen` 遮挡正在提交且不应重复操作的全局流程。
- 用明确的 `text` 说明正在加载的数据，而不是仅显示转圈。

短于极短阈值的请求不建议强制显示遮罩，以免产生闪烁。

## 2. 代码演示

### 2.1 局部内容加载

```vue demo:loading-basic title="局部加载"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function refreshData(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 900);
}
</script>

<template>
  <AppLoading :loading="loading" text="正在刷新订单数据">
    <p>订单总数：128</p>
    <AppButton size="small" @click="refreshData">刷新数据</AppButton>
  </AppLoading>
</template>
```

### 2.2 全屏提交遮罩

```vue demo:loading-fullscreen title="全屏加载"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function submitForm(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 900);
}
</script>

<template>
  <AppButton @click="submitForm">提交并显示全屏加载</AppButton>
  <AppLoading :loading="loading" fullscreen text="正在保存课程设置" />
</template>
```

## 3. API 使用方式

加载状态完全由父级请求生命周期控制。局部模式需要将内容放进默认插槽；全屏模式可单独挂载。

```vue
<AppLoading :loading="isFetching" text="正在加载课程详情">
  <CourseDetail :course="course" />
</AppLoading>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否显示遮罩。 | `boolean` | `false` |
| `text` | 加载说明。 | `string` | `"正在加载"` |
| `fullscreen` | 是否覆盖整个视口。 | `boolean` | `false` |
| `background` | 自定义遮罩背景。 | `string` | `""` |
| `spinnerSize` | 加载图标尺寸。 | `number` | `20` |
| `ariaLabel` | 加载区域辅助名称。 | `string` | `"正在加载内容"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 局部加载模式下被遮罩的内容。 |

### 4.3 Events

该组件不提供自定义事件。
