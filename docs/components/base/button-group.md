---
title: 按钮组
component: AppButtonGroup
category: base
source: packages/ui/src/components/base/AppButtonGroup.vue
---

# 按钮组（AppButtonGroup）

`AppButtonGroup` 把一组同层级的 `AppButton` 拼成工具条，只负责边框、方向与分组语义，不发起请求。

## 1. 用处

- 同一任务下的并列操作拼成一组，例如批量处理、视图切换、导入流程。
- 保存、删除这类风险不同的动作通常不应强制拼成一组。

## 2. 代码演示

### 2.1 横向拼合

`attached` 默认为 `true`，相邻的 `AppButton` 共用边框，适合少量、同层级且可并列理解的操作。

```vue demo:button-group-basic title="横向拼合"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="课程批量操作">
    <AppButton variant="secondary">导出</AppButton>
    <AppButton variant="secondary">归档</AppButton>
    <AppButton variant="secondary">删除</AppButton>
  </AppButtonGroup>
</template>
```

保存、删除这类风险不同的动作通常不应强制拼成一组；主操作与危险操作应保持清晰区分。

### 2.2 纵向与间隔

`direction="vertical"` 改为纵向排列，`attached="false"` 保留组件间 `8px` 间距，适合导入流程这类有顺序的相邻步骤。

```vue demo:button-group-vertical title="纵向与间隔"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup direction="vertical" :attached="false" aria-label="导入流程">
    <AppButton variant="secondary">下载模板</AppButton>
    <AppButton variant="secondary">选择文件</AppButton>
  </AppButtonGroup>
</template>
```

拼接规则只针对 `AppButton` 的根样式；其他类型内容可放进插槽，但不会自动获得相连按钮的圆角处理。

### 2.3 分离式排列

`attached="false"` 时相邻按钮保留 `8px` 间距，不再共用边框，适合有先后顺序的步骤。

```vue demo:button-group-attached title="分离式排列"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup :attached="false" aria-label="导入流程">
    <AppButton variant="secondary">下载模板</AppButton>
    <AppButton variant="secondary">选择文件</AppButton>
    <AppButton variant="secondary">开始导入</AppButton>
  </AppButtonGroup>
</template>
```

### 2.4 混合层级

组内可以同时放主操作、次操作和弱操作，由子按钮各自的 `variant` 决定视觉权重。

```vue demo:button-group-mixed title="混合层级"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="提交与辅助操作">
    <AppButton variant="primary">提交审批</AppButton>
    <AppButton variant="secondary">存草稿</AppButton>
    <AppButton variant="text">取消</AppButton>
  </AppButtonGroup>
</template>
```

### 2.5 图标按钮组合

图标按钮也可以放进按钮组形成工具栏；它们不会自动获得相连圆角，适合作为一组并列的图标入口。

```vue demo:button-group-icon title="图标按钮组合"
<script setup lang="ts">
import { AppIconButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="视图操作">
    <AppIconButton icon="plus" label="新增" variant="secondary" />
    <AppIconButton icon="edit" label="编辑" variant="secondary" />
    <AppIconButton icon="trash" label="删除" variant="secondary" />
  </AppButtonGroup>
</template>
```

### 2.6 统一尺寸

子按钮的 `size` 仍由各自控制；在紧凑表格或工具条中通常用 `size="small"` 收齐高度。

```vue demo:button-group-sizes title="统一尺寸"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="小尺寸操作组">
    <AppButton size="small" variant="secondary">上一页</AppButton>
    <AppButton size="small" variant="secondary">下一页</AppButton>
  </AppButtonGroup>
</template>
```

### 2.7 包含禁用成员

个别按钮置灰后，仍属于同一组语义；禁用按钮不会触发点击，但组内其余操作保持可用。

```vue demo:button-group-disabled title="包含禁用成员"
<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="带禁用成员的操作组">
    <AppButton variant="secondary">复制</AppButton>
    <AppButton variant="secondary" disabled>删除</AppButton>
  </AppButtonGroup>
</template>
```

## 3. API 使用方式

按钮组用 `direction` 决定排列方向、`attached` 决定边框是否相连，按钮自身的 `variant`、`size`、事件仍由子级 `AppButton` 负责：

```vue
<AppButtonGroup direction="horizontal" :attached="false" aria-label="导出格式">
  <AppButton variant="secondary" size="small">CSV</AppButton>
  <AppButton variant="secondary" size="small">Excel</AppButton>
</AppButtonGroup>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `direction` | 按钮组主轴方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `attached` | 是否消除相邻 `AppButton` 的间距并拼接边框。 | `boolean` | `true` |
| `ariaLabel` | `role="group"` 的辅助说明。 | `string` | `"按钮组"` |

### 4.2 Slots

| 组件 | 插槽 | 说明 |
| --- | --- | --- |
| `AppButtonGroup` | `default` | 建议放置同一层级的 `AppButton`。 |

### 4.3 Events

`AppButtonGroup` 不提供自定义事件，事件绑定在各个按钮上。
