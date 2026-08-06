---
title: 固钉
component: AppAffix
category: navigation
source: packages/ui/src/components/navigation/AppAffix.vue
---

# 固钉（AppAffix）

`AppAffix` 将筛选、提交等关键操作固定在滚动容器的顶部或底部，并在固定状态变化时通知页面。

## 1. 用处

- 在长列表上方固定查询、批量操作或保存操作。
- 在长表单底部保留提交入口，减少用户返回底部的成本。
- 只负责定位，不替代页面的滚动区域与操作权限控制。

## 2. 代码演示

### 2.1 顶部固钉操作条

```vue demo:affix-basic title="顶部固钉操作条"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="page-flow">
    <p>向下滚动文档区域，操作条会在距离顶部 12px 时保持可见。</p>
    <AppAffix :offset="12">
      <div class="action-bar"><strong>订单操作</strong><AppButton size="small">新建订单</AppButton></div>
    </AppAffix>
    <p v-for="index in 10" :key="index">订单列表的第 {{ index }} 段辅助说明。</p>
  </div>
</template>

<style scoped>
.page-flow { color: var(--aps-muted); line-height: 1.7; }
.action-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

顶部固钉常用于不会随内容变化而消失的操作。设置 `offset` 时应同时考虑应用顶部导航的实际高度。

### 2.2 底部提交区

```vue demo:affix-bottom title="底部提交区"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="bottom-preview">
    <p v-for="index in 8" :key="index">填写信息 {{ index }}：底部操作区始终留在可触达的位置。</p>
    <AppAffix position="bottom" :offset="8">
      <div class="submit-bar"><span>已保存草稿</span><AppButton size="small">提交审批</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.bottom-preview { height: 220px; overflow: auto; padding: 0 12px; border: 1px solid var(--aps-line-soft); border-radius: 12px; color: var(--aps-muted); line-height: 1.8; }
.submit-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

底部固钉适合可延后提交的任务。若保存请求尚未完成，可以结合按钮 `loading` 与 `disabled` 阻止重复提交。

## 3. API 使用方式

```vue
<AppAffix position="top" :offset="56" :target="listElement" @stuck-change="isToolbarStuck = $event">
  <OrderToolbar />
</AppAffix>
```

`target` 与页面真实的滚动元素保持一致。`stuck-change` 可用于调整操作条的阴影、面包屑状态等展示细节，不应用它作为业务提交状态。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `offset` | 距离容器顶部或底部的偏移量；负数按 `0` 处理。 | `number` | `0` |
| `position` | 固定位置。 | `"top" \| "bottom"` | `"top"` |
| `target` | 监听的滚动容器；不传则监听页面滚动。 | `HTMLElement \| null` | `null` |
| `disabled` | 是否禁用固钉并恢复普通文档流。 | `boolean` | `false` |
| `zIndex` | 固钉内容的层级。 | `number` | `20` |
| `ariaLabel` | 固钉区域的可访问名称。 | `string` | `"吸顶内容"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 需要固定的操作条、筛选区或其他内容。 |

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `stuck-change` | 元素进入或离开固定状态时触发。 | `stuck: boolean` |
