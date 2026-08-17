---
title: 标签
component: AppTag
category: data
source: packages/ui/src/components/data/AppTag.vue
---

# 标签（AppTag）

`AppTag` 用可配置色调、形态和关闭行为展示分类或筛选条件。

## 1. 用处

- 展示技术栈、内容分类、筛选项或可移除条件。
- `closable` 只触发 `close`，父级负责删除实际筛选值。

## 2. 代码演示

### 2.1 颜色与形态

```vue demo:data-tag-basic title="颜色与形态"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><div class="tag-row"><AppTag label="Vue 3" tone="blue" /><AppTag label="已发布" tone="green" variant="outline" /><AppTag label="草稿" tone="orange" variant="solid" /></div></template>

<style scoped>.tag-row { display: flex; flex-wrap: wrap; gap: 8px; }</style>
```

### 2.2 可移除筛选项

```vue demo:data-tag-closable title="可移除标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(true);
</script>

<template><AppTag v-if="visible" label="可移除筛选" tone="blue" closable @close="visible = false" /></template>
```


### 2.3 色调

```vue demo:tag-tones title="色调"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="蓝色" tone="blue" />
    <AppTag label="绿色" tone="green" />
    <AppTag label="橙色" tone="orange" />
    <AppTag label="红色" tone="red" />
    <AppTag label="中性" tone="neutral" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; flex-wrap: wrap; }
</style>
```

### 2.4 填充形式

```vue demo:tag-variants title="填充形式"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="柔和" variant="soft" />
    <AppTag label="描边" variant="outline" />
    <AppTag label="实心" variant="solid" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
```

### 2.5 尺寸

```vue demo:tag-size title="尺寸"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="小尺寸" size="small" />
    <AppTag label="默认尺寸" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; align-items: center; }
</style>
```

### 2.6 自定义内容

```vue demo:tag-custom-slot title="自定义内容"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTag tone="green">
    <span>线上</span>
    <small> 3 台</small>
  </AppTag>
</template>
```

### 2.7 禁用状态

```vue demo:tag-disabled title="禁用状态"
<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="不可关闭" closable disabled />
    <AppTag label="不可操作" disabled />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
```
## 3. API 使用方式

简单文本可用 `label`，需要富内容时使用默认插槽。关闭后更新外部数组或查询条件，组件不会自行隐藏。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 标签文字。 | `string` | `""` |
| `tone` | 色调。 | `TagTone` | `"neutral"` |
| `variant` | 填充形式。 | `"soft" \| "outline" \| "solid"` | `"soft"` |
| `size` | 控件尺寸。 | `ControlSize` | `"default"` |
| `closable` / `disabled` | 是否显示关闭按钮、是否禁用。 | `boolean` | `false` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义标签内容。 |

### 4.3 Events

| 事件 | 说明 |
| --- | --- |
| `close` | 点击关闭按钮。 |
