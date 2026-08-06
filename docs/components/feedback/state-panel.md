---
title: 状态面板
component: AppStatePanel
category: feedback
source: packages/ui/src/components/feedback/AppStatePanel.vue
---

# 状态面板（AppStatePanel）

`AppStatePanel` 在局部业务区域统一表达空、错误、加载、权限与成功等状态，并允许替换关键内容。

## 1. 用处

- 表格、卡片或工作区出现空数据、无权限、请求失败时提供稳定的局部反馈。
- `type` 提供默认的图标与文案，业务可用 Props 或插槽覆盖。
- 默认动作与自定义 `actions` 插槽都可接入业务逻辑。

整页 403、404、500 请使用 `AppException`。

## 2. 代码演示

### 2.1 空数据并清除筛选

```vue demo:state-panel-empty title="空状态"
<script setup lang="ts">
import { AppStatePanel } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatePanel type="empty" title="没有符合条件的订单" description="试着清除筛选条件后重新查询。" action-text="清除筛选" @action="console.info('清除订单筛选')" />
</template>
```

### 2.2 权限状态的自定义操作

```vue demo:state-panel-permission title="权限状态"
<script setup lang="ts">
import { AppButton, AppStatePanel } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatePanel type="permission" title="暂时无法访问结算中心" description="联系管理员申请财务权限。">
    <template #actions><AppButton variant="secondary">申请权限</AppButton></template>
  </AppStatePanel>
</template>
```

## 3. API 使用方式

先用 `type` 选择状态，再只覆盖业务真正需要变化的标题、说明和操作。

```vue
<AppStatePanel v-if="error" type="error" :description="error.message" action-text="重新加载" @action="reload" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 状态类别。 | `"empty" \| "error" \| "loading" \| "permission" \| "success"` | 必填 |
| `title` / `description` / `icon` | 覆盖默认标题、说明与图标。 | `string \| IconName` | `"" / undefined` |
| `actionText` | 默认操作按钮文案。 | `string` | `""` |
| `actionLoading` / `actionDisabled` | 默认操作按钮状态。 | `boolean` | `false` |
| `actionVariant` | 默认操作按钮样式。 | `ButtonVariant` | `"secondary"` |
| `ariaLabel` | 状态区域辅助名称。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `icon` / `title` / `description` | 替换对应信息区域。 |
| `actions` | 替换默认操作按钮。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `action` | — | 点击默认操作按钮时触发。 |
