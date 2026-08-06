---
title: 分栏面板
component: AppSplitter
category: layout
source: packages/ui/src/components/layout/AppSplitter.vue
---

# 分栏面板（AppSplitter）

`AppSplitter` 在两个内容区域之间提供可拖动、可键盘操作的分隔条，并以百分比受控值保存当前比例。

## 1. 用处

- 用于文件管理、代码编辑、日志查看等需要用户调整工作区比例的双栏界面。
- 限制 `min` 和 `max`，避免一侧被拖到无法阅读的宽度或高度。
- 保持 `modelValue` 在业务状态中，以便以后保存个人偏好。

## 2. 代码演示

### 2.1 水平双栏

```vue demo:layout-splitter-basic title="水平分栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(40);
</script>

<template>
  <AppSplitter v-model="ratio" :min="25" :max="70" class="demo-splitter">
    <template #first><strong>文件目录</strong><p>当前占比：{{ ratio }}%</p></template>
    <template #second><strong>编辑区域</strong><p>拖动中间分隔条调整宽度。</p></template>
  </AppSplitter>
</template>

<style scoped>
.demo-splitter { width: min(100%, 600px); }
.demo-splitter p { color: var(--aps-muted); font-size: 13px; }
</style>
```

### 2.2 垂直分栏

```vue demo:layout-splitter-vertical title="垂直分栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(55);
</script>

<template>
  <AppSplitter v-model="ratio" direction="vertical" :step="5" class="demo-splitter">
    <template #first>预览区</template>
    <template #second>日志区：可使用方向键微调分隔位置。</template>
  </AppSplitter>
</template>

<style scoped>
.demo-splitter { width: min(100%, 480px); height: 260px; }
</style>
```

## 3. API 使用方式

```vue
<AppSplitter v-model="panelRatio" :min="20" :max="80" @change="savePanelRatio">
  <template #first><NavigationTree /></template>
  <template #second><EditorWorkspace /></template>
</AppSplitter>
```

拖动过程中触发 `resize`，操作结束或通过键盘调整后触发 `change`。水平模式可用左右方向键，垂直模式可用上下方向键；`Home` 和 `End` 可跳到边界。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 第一个面板的百分比，必填。 | `number` | — |
| `direction` | 分栏方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `min` / `max` | 第一个面板的最小与最大百分比。 | `number` | `20` / `80` |
| `step` | 键盘调整的百分比步长。 | `number` | `2` |
| `disabled` | 是否禁用拖动与键盘调整。 | `boolean` | `false` |
| `ariaLabel` | 分隔条的可访问名称。 | `string` | `"可调整分栏"` |
| `firstPanelLabel` / `secondPanelLabel` | 两个区域的可访问名称。 | `string` | `"第一分栏"` / `"第二分栏"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `first` | 第一个可调整区域。 |
| `second` | 第二个可调整区域。 |

### 4.3 Events 与公开方法

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 分隔比例变化时触发。 | `value: number` |
| `resize` | 拖动或键盘调整过程中触发。 | `value: number` |
| `change` | 拖动结束、键盘完成调整或重置时触发。 | `value: number` |

组件实例暴露 `reset()`，调用后会尝试将比例恢复为 `50`，并遵循当前的 `min` 和 `max` 范围。
