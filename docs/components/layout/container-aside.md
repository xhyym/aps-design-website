---
title: 容器侧栏
component: AppContainerAside
category: layout
source: packages/ui/src/components/layout/AppContainerAside.vue
---

# 容器侧栏（AppContainerAside）

`AppContainerAside` 是 `AppContainer` 横向布局中的固定宽度侧栏，提供常用宽度档位与收起状态。

## 1. 用处

- 放置二级导航、筛选、详情辅助信息等与主内容并列的区域。
- 将收起状态交给父级业务管理，并通过 `collapsed` 只切换侧栏宽度。
- 用 `bordered` 在侧栏与主体之间建立稳定的视觉边界。

## 2. 代码演示

### 2.1 固定宽度侧栏

```vue demo:layout-container-aside-basic title="基础侧栏"
<script setup lang="ts">
import { AppContainerAside } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerAside bordered class="demo-aside">
    <strong>订单中心</strong>
    <span>全部订单</span>
    <span>售后服务</span>
  </AppContainerAside>
</template>

<style scoped>
.demo-aside { min-height: 150px; gap: 12px; padding: 18px; }
</style>
```

### 2.2 受控收起状态

```vue demo:layout-container-aside-collapsed title="收起侧栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContainerAside } from "aps-design-pro";
import "aps-design-pro/style.css";

const collapsed = ref(false);
</script>

<template>
  <div class="demo-shell">
    <AppContainerAside :collapsed="collapsed" bordered class="demo-aside">
      <span>{{ collapsed ? "订" : "订单中心" }}</span>
    </AppContainerAside>
    <AppButton size="small" @click="collapsed = !collapsed">切换侧栏</AppButton>
  </div>
</template>

<style scoped>
.demo-shell { display: flex; min-height: 112px; align-items: center; gap: 20px; }
.demo-aside { min-height: 112px; align-items: center; justify-content: center; }
</style>
```

## 3. API 使用方式

```vue
<AppContainerAside :collapsed="isSidebarCollapsed" width="wide" bordered>
  <SidebarMenu :collapsed="isSidebarCollapsed" />
</AppContainerAside>
```

`collapsed` 仅影响容器宽度，不会自动隐藏槽位内容。因此菜单类组件也应接收同一状态，按业务需求切换文字、图标或悬浮菜单。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 展开时的侧栏宽度档位。 | `"narrow" \| "default" \| "wide"` | `"default"` |
| `collapsed` | 是否使用 64px 的收起宽度。 | `boolean` | `false` |
| `bordered` | 是否在右侧显示分隔线。 | `boolean` | `false` |
| `ariaLabel` | 侧栏的可访问名称。 | `string` | `"容器侧栏"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 侧栏内容，通常放置菜单或筛选表单。 |
