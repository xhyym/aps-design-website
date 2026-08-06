---
title: 卡片
component: AppCard
category: layout
source: packages/ui/src/components/layout/AppCard.vue
---

# 卡片（AppCard）

`AppCard` 为一段关联信息建立可控的边框、标题、内容和底部操作区域，适合承载统计、列表摘要和局部配置。

## 1. 用处

- 将同一业务对象的摘要、正文与后续操作收拢在一个视觉容器中。
- 通过 `shadow="hover"` 或 `interactive` 提示整张卡片可被进一步浏览。
- 需要固定标题或操作区时，使用具名插槽替代在内容区手写分隔线。

不要把完整页面再嵌套进 `AppCard`；页面本身已经有边界时，过多卡片会降低信息密度。

## 2. 代码演示

### 2.1 标题与底部文本

```vue demo:layout-card-basic title="基本卡片"
<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard header="本周工作摘要" footer="数据每小时同步一次">
    已完成 12 项任务，另有 3 项等待协作方确认。
  </AppCard>
</template>
```

### 2.2 自定义头部与操作区

```vue demo:layout-card-slots title="具名插槽"
<script setup lang="ts">
import { AppButton, AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard shadow="hover" interactive>
    <template #header>版本发布</template>
    2.4.0 已准备完毕，可在发布前查看变更记录。
    <template #footer><AppButton size="small">查看详情</AppButton></template>
  </AppCard>
</template>
```

## 3. API 使用方式

```vue
<AppCard header="项目状态" padding="small" shadow="hover" :fill-height="true">
  <ProjectTimeline />
  <template #footer><AppButton>进入项目</AppButton></template>
</AppCard>
```

`header` 与 `footer` 用于简单文字；当区域中有图标、筛选或按钮时，优先使用同名插槽。`fillHeight` 让内容区在父级已定义高度时参与纵向填充。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `as` | 最外层语义标签。 | `"article" \| "section" \| "div"` | `"section"` |
| `header` / `footer` | 未提供对应插槽时显示的纯文本。 | `string` | `""` |
| `headerClass` / `bodyClass` / `footerClass` | 分别附加到三个内部区域的类名。 | `string` | `""` |
| `bodyStyle` | 内容区行内样式对象。 | `CSSProperties` | `undefined` |
| `padding` | 内容区内边距档位。 | `"none" \| "small" \| "default" \| "large"` | `"default"` |
| `contentOverflow` | 是否允许浮层等内容超出卡片边界。 | `"clip" \| "visible"` | `"clip"` |
| `shadow` | 阴影展示策略。 | `"always" \| "hover" \| "never"` | `"always"` |
| `interactive` | 悬停时是否给出可交互反馈。 | `boolean` | `false` |
| `fillHeight` | 是否以纵向 Flex 结构填满父级高度。 | `boolean` | `false` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 卡片主体内容。 |
| `header` | 覆盖 `header` 属性，适合组合标题、状态或筛选控件。 |
| `footer` | 覆盖 `footer` 属性，适合放置确认、取消等操作。 |
