---
title: 滚动容器
component: AppScrollbar
category: layout
source: packages/ui/src/components/layout/AppScrollbar.vue
---

# 滚动容器（AppScrollbar）

`AppScrollbar` 为局部内容提供统一的细滚动条，并通过事件和公开方法让业务层感知或控制滚动位置。

## 1. 用处

- 在活动记录、日志、筛选选项等局部区域内创建独立滚动，不影响页面主滚动。
- 监听 `scroll` 获取当前位置，以实现“回到顶部”或按位置加载更多内容。
- 通过 `horizontal` 承载无法在小空间中折行的列头、时间轴或标签序列。

使用前应给出 `height` 或 `maxHeight` 中至少一个约束；否则内容会自然撑开，滚动条不会出现。

## 2. 代码演示

### 2.1 读取纵向滚动位置

```vue demo:layout-scrollbar-basic title="纵向滚动"
<script setup lang="ts">
import { ref } from "vue";
import { AppScrollbar, type ScrollPosition } from "aps-design-pro";
import "aps-design-pro/style.css";

const position = ref<ScrollPosition>({ top: 0, left: 0 });
const logs = ["开始同步数据", "下载订单文件", "校验字段格式", "写入处理结果", "同步完成", "等待下一轮任务"];
</script>

<template>
  <div class="demo-shell">
    <AppScrollbar height="126px" @scroll="position = $event">
      <p v-for="log in logs" :key="log">{{ log }}</p>
    </AppScrollbar>
    <span>滚动位置：{{ Math.round(position.top) }}px</span>
  </div>
</template>

<style scoped>
.demo-shell { width: min(100%, 480px); }
.demo-shell p { margin: 0 0 12px; }
.demo-shell span { display: block; margin-top: 10px; color: var(--aps-muted); font-size: 12px; }
</style>
```

### 2.2 横向滚动内容

```vue demo:layout-scrollbar-horizontal title="横向滚动"
<script setup lang="ts">
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";

const columns = ["订单号", "客户名称", "支付状态", "发货状态", "售后状态", "更新时间"];
</script>

<template>
  <AppScrollbar horizontal class="demo-scrollbar">
    <span v-for="column in columns" :key="column">{{ column }}</span>
  </AppScrollbar>
</template>

<style scoped>
.demo-scrollbar { width: min(100%, 480px); padding-bottom: 8px; }
.demo-scrollbar span { display: inline-block; min-width: 116px; padding: 10px 14px; border: 1px solid var(--aps-line-soft); border-right: 0; background: var(--aps-surface-soft); text-align: center; }
.demo-scrollbar span:last-child { border-right: 1px solid var(--aps-line-soft); }
</style>
```

## 3. API 使用方式

```vue
<script setup lang="ts">
import { ref } from "vue";
import { AppScrollbar, type ScrollPosition } from "aps-design-pro";

const logScroller = ref<InstanceType<typeof AppScrollbar> | null>(null);
const handleScroll = (position: ScrollPosition): void => console.info("日志区域滚动位置", position);
</script>

<template>
  <AppScrollbar ref="logScroller" max-height="360px" @scroll="handleScroll"><ActivityLog /></AppScrollbar>
  <button type="button" @click="logScroller?.scrollToTop()">回到顶部</button>
</template>
```

组件实例公开 `scrollTo(options)`、`scrollToTop(behavior)`、`scrollToBottom(behavior)` 与底层 `element` 引用。调用前请判断模板引用是否已挂载。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `height` | 固定高度 CSS 值。 | `string` | `"auto"` |
| `maxHeight` | 最大高度 CSS 值。 | `string` | `"none"` |
| `horizontal` | 是否同时开启横向滚动并保持内容不换行。 | `boolean` | `false` |
| `ariaLabel` | 可滚动区域的可访问名称。 | `string` | `"可滚动内容"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 放入需要局部滚动的内容。 |

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `scroll` | 原生滚动位置改变时触发。 | `position: { top: number; left: number }` |
