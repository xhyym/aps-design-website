---
title: 网络加载层
component: AppNetworkLoadingOverlay
category: feedback
source: packages/ui/src/components/feedback/AppNetworkLoadingOverlay.vue
---

# 网络加载层（AppNetworkLoadingOverlay）

`AppNetworkLoadingOverlay` 用于跨页面请求期间的全局加载反馈，并内置延迟显示与最短展示时间以减少闪烁。

## 1. 用处

- 在路由切换、批量请求或没有明确局部容器的场景提示网络处理中。
- 直接接收应用层的请求状态，不需要在业务页面复制延迟逻辑。
- 更适合全局请求管理器；单个卡片加载优先使用 `AppLoading`。

它只负责视觉反馈，不会拦截、取消或重试任何网络请求。

## 2. 代码演示

### 2.1 由请求状态驱动

```vue demo:network-overlay-basic title="请求中显示"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function requestReport(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 800);
}
</script>

<template>
  <AppButton @click="requestReport">请求经营报表</AppButton>
  <AppNetworkLoadingOverlay :loading="loading" />
</template>
```

### 2.2 模拟初始网络恢复

```vue demo:network-overlay-pending title="初始加载"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNetworkLoadingOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

/** 文档示例不能以常量 true 挂载全局蒙层，否则会阻断用户继续阅读其他组件。 */
function restoreSession(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 1200);
}
</script>

<template>
  <AppButton variant="secondary" @click="restoreSession">模拟网络恢复</AppButton>
  <AppNetworkLoadingOverlay :loading="loading" />
</template>
```

示例默认不显示全局蒙层，点击后模拟一次会自动结束的恢复请求。线上页面应把 `loading` 绑定到真实请求聚合状态，不能传入固定的 `true`。

## 3. API 使用方式

通常在应用根节点或布局层挂载一个实例，把请求管理器聚合后的状态传入。

```vue
<AppNetworkLoadingOverlay :loading="requestStore.pendingCount > 0" />
<RouterView />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否存在待处理网络请求。 | `boolean` | `false` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

该组件不提供自定义事件。
