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


### 2.3 内边距

```vue demo:layout-card-padding title="内边距"
<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppCard header="紧凑" padding="small"><p>紧凑内容</p></AppCard>
    <AppCard header="宽松" padding="large"><p>宽松内容</p></AppCard>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-card) { width: 240px; }
</style>
```

### 2.4 阴影策略

```vue demo:layout-card-shadow title="阴影策略"
<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppCard header="常显阴影" shadow="always"><p>内容</p></AppCard>
    <AppCard header="悬停阴影" shadow="hover"><p>鼠标移入查看</p></AppCard>
    <AppCard header="无阴影" shadow="never"><p>内容</p></AppCard>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-card) { width: 200px; }
</style>
```

### 2.5 可交互卡片

```vue demo:layout-card-interactive title="可交互卡片"
<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard header="点击反馈" interactive>
    <p>悬停时呈现可点击样式。</p>
  </AppCard>
</template>
```

### 2.6 头部与底部

```vue demo:layout-card-header-footer title="头部与底部"
<script setup lang="ts">
import { AppButton, AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard header="订单详情" footer="共 3 件商品">
    <p>商品与金额信息。</p>
    <template #footer>
      <div class="ops">
        <AppButton size="small" variant="text">取消</AppButton>
        <AppButton size="small">确认支付</AppButton>
      </div>
    </template>
  </AppCard>
</template>

<style scoped>
.ops { display: flex; gap: 8px; justify-content: flex-end; }
</style>
```

### 2.7 填满高度

```vue demo:layout-card-fill-height title="填满高度"
<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppCard header="填满父级" fill-height><p>卡片高度跟随容器。</p></AppCard>
  </div>
</template>

<style scoped>
.box { height: 220px; }
</style>
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
