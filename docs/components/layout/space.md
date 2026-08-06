---
title: 间距布局
component: AppSpace
category: layout
source: packages/ui/src/components/layout/AppSpace.vue
---

# 间距布局（AppSpace）

`AppSpace` 用 Flex `gap` 管理一组相关元素的间距，避免组件间依赖不透明的外边距规则。

## 1. 用处

- 组织表单操作、状态标签或标题旁的一组小控件。
- 在横向与纵向排列之间切换，不改动子元素结构。
- 用 `fill` 让同层按钮等宽，用 `wrap` 保证窄空间不发生挤压。

不要将一个页面的所有块都塞进 `AppSpace`；大尺度页面结构应优先使用容器和栅格。

## 2. 代码演示

### 2.1 纵向操作组

```vue demo:layout-space-direction title="排列方向"
<script setup lang="ts">
import { AppButton, AppSpace } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSpace direction="vertical" size="large" align="start">
    <span>将相关操作纵向排列</span>
    <AppSpace size="small"><AppButton size="small">保存</AppButton><AppButton size="small" variant="secondary">取消</AppButton></AppSpace>
  </AppSpace>
</template>
```

### 2.2 等宽且可换行的操作

```vue demo:layout-space-fill title="填充与换行"
<script setup lang="ts">
import { AppButton, AppSpace } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSpace fill wrap size="12px" class="demo-space">
    <AppButton variant="secondary">暂存</AppButton>
    <AppButton>提交审核</AppButton>
  </AppSpace>
</template>

<style scoped>
.demo-space { width: min(100%, 480px); }
</style>
```

## 3. API 使用方式

```vue
<AppSpace justify="between" fill size="default">
  <AppButton variant="secondary">取消</AppButton>
  <AppButton>保存</AppButton>
</AppSpace>
```

`size` 可使用预设档位、数值或 CSS 长度。数值会被转换为像素，传入负数时会收敛为 `0px`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` | 子项排列方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `size` | 子项间距。 | `"small" \| "default" \| "large" \| number \| string` | `"default"` |
| `align` | 交叉轴对齐方式。 | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"center"` |
| `justify` | 主轴分布方式。 | `"start" \| "center" \| "end" \| "between" \| "around"` | `"start"` |
| `wrap` | 是否允许子项换行。 | `boolean` | `false` |
| `fill` | 是否让每个直接子项等分可用空间。 | `boolean` | `false` |
| `ariaLabel` | 该元素组的可访问名称。 | `string` | `"间距布局"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 需要按统一间距排列的子元素。 |
