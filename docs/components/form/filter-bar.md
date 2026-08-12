---
title: 筛选栏
component: AppFilterBar
category: form
source: packages/ui/src/components/form/AppFilterBar.vue
---

# 筛选栏（AppFilterBar）

`AppFilterBar` 用弹性网格承载列表筛选字段，并统一查询、重置和高级筛选的操作位置。

## 1. 用处

- 适用于表格顶部的轻量筛选，不负责管理每个输入控件的值。
- 默认插槽放常用条件，`advanced` 放可收起的低频条件。
- 提交、重置事件由页面处理，便于接入请求参数与分页重置。

## 2. 代码演示

### 2.1 基础筛选字段

```vue demo:filter-bar-basic title="课程筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("");
const statusOptions = [{ label: "全部状态", value: "" }, { label: "已发布", value: "published" }, { label: "草稿", value: "draft" }];
</script>

<template><AppFilterBar><AppInput v-model="keyword" placeholder="搜索课程名称" /><AppSelect v-model="status" :options="statusOptions" placeholder="选择状态" /></AppFilterBar></template>
```

### 2.2 可折叠的高级筛选

```vue demo:filter-bar-advanced title="高级筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const expanded = ref(false);
const keyword = ref("");
const category = ref("");
const teacher = ref("");
const categoryOptions = [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }];
</script>

<template><AppFilterBar v-model:expanded="expanded" collapsible><AppInput v-model="keyword" placeholder="课程名称" /><AppSelect v-model="category" :options="categoryOptions" placeholder="课程分类" /><template #advanced><AppInput v-model="teacher" placeholder="讲师姓名" /></template></AppFilterBar></template>
```

### 2.3 自定义查询操作

```vue demo:filter-bar-actions title="自定义查询按钮"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("");
const statusOptions = [{ label: "全部状态", value: "" }, { label: "已发布", value: "published" }, { label: "草稿", value: "draft" }];

function onQuery() {
  /* 通过 submit 事件拉取数据 */
}
</script>

<template>
  <AppFilterBar @submit="onQuery">
    <AppInput v-model="keyword" placeholder="搜索课程名称" />
    <AppSelect v-model="status" :options="statusOptions" placeholder="选择状态" />
    <template #actions>
      <AppButton type="submit">查询</AppButton>
    </template>
  </AppFilterBar>
</template>
```

### 2.4 字段宽度边界

```vue demo:filter-bar-field-width title="字段宽度与间距"
<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const category = ref("");
const teacher = ref("");
const categoryOptions = [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }];
</script>

<template>
  <AppFilterBar :field-min-width="160" :field-max-width="240" :gap="12">
    <AppInput v-model="keyword" placeholder="课程名称" />
    <AppSelect v-model="category" :options="categoryOptions" placeholder="课程分类" />
    <template #advanced>
      <AppInput v-model="teacher" placeholder="讲师姓名" />
    </template>
  </AppFilterBar>
</template>
```

### 2.5 默认展开高级区

```vue demo:filter-bar-expanded-default title="默认展开"
<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const expanded = ref(true);
const keyword = ref("");
const category = ref("");
const teacher = ref("");
const categoryOptions = [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }];
</script>

<template>
  <AppFilterBar v-model:expanded="expanded" collapsible>
    <AppInput v-model="keyword" placeholder="课程名称" />
    <AppSelect v-model="category" :options="categoryOptions" placeholder="课程分类" />
    <template #advanced>
      <AppInput v-model="teacher" placeholder="讲师姓名" />
    </template>
  </AppFilterBar>
</template>
```

### 2.6 不带高级区

```vue demo:filter-bar-no-advanced title="仅常用条件"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("");
const statusOptions = [{ label: "全部状态", value: "" }, { label: "已发布", value: "published" }, { label: "草稿", value: "draft" }];

function onQuery() {
  /* 自行接管查询逻辑 */
}
</script>

<template>
  <AppFilterBar :show-reset="false" @submit="onQuery">
    <AppInput v-model="keyword" placeholder="搜索课程名称" />
    <AppSelect v-model="status" :options="statusOptions" placeholder="选择状态" />
    <template #actions>
      <AppButton type="submit">查询</AppButton>
    </template>
  </AppFilterBar>
</template>
```

## 3. API 使用方式

将筛选表单值置于页面，通过 `submit` 拉取数据，通过 `reset` 恢复筛选条件并重置页码。

```vue
<AppFilterBar collapsible @submit="reload" @reset="resetQuery">
  <AppInput v-model="query.keyword" placeholder="关键词" />
  <template #advanced><AppDateRangePicker v-model="query.createdAt" /></template>
  <template #actions><AppButton type="submit">查询</AppButton></template>
</AppFilterBar>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expanded` / `collapsible` | 高级区展开状态与是否可收起。 | `boolean` | `false` |
| `showReset` | 是否显示内置重置按钮。 | `boolean` | `true` |
| `fieldMinWidth` / `fieldMaxWidth` / `gap` | 筛选字段的弹性宽度边界与间距。 | `number` | `200` / `280` / `16` |
| `expandText` / `collapseText` / `resetText` | 操作按钮文案。 | `string` | 内置中文文案 |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 常用筛选字段。 |
| `advanced` | 高级筛选字段。 |
| `actions` | 重置按钮后的自定义操作，例如查询按钮。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `submit` / `reset` | — | 提交筛选或点击重置时触发。 |
| `update:expanded` | `boolean` | 高级筛选展开状态变化。 |
