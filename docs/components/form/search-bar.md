---
title: 搜索栏
component: AppSearchBar
category: form
source: packages/ui/src/components/form/AppSearchBar.vue
---

# 搜索栏（AppSearchBar）

`AppSearchBar` 以配置式字段构建列表搜索区，并将高级条件折叠为统一的查询体验。

## 1. 用处

- 用于用户、订单、课程等列表页面的顶部搜索区域。
- 内部复用 `AppForm`，字段类型与校验能力与配置式表单一致。
- `primaryCount` 之前的条件默认显示，其余条件按展开状态显示。

## 2. 代码演示

### 2.1 常规列表搜索

```vue demo:search-bar-basic title="基础搜索栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ keyword: "", status: "" });
const items: FormItem[] = [{ key: "keyword", label: "关键词", type: "input", placeholder: "课程名称", span: 4 }, { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }], span: 4 }];
</script>

<template><AppSearchBar v-model="model" :items="items" /></template>
```

### 2.2 控制更多筛选展开

```vue demo:search-bar-expanded title="高级搜索条件"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const expanded = ref(false);
const model = ref<Record<string, FormValue>>({ keyword: "", status: "", author: "", level: "" });
const items: FormItem[] = [{ key: "keyword", label: "关键词", type: "input", placeholder: "课程名称" }, { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }] }, { key: "author", label: "讲师", type: "input", placeholder: "讲师姓名" }, { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] }];
</script>

<template><AppSearchBar v-model="model" v-model:expanded="expanded" :items="items" :primary-count="2" /></template>
```

### 2.3 控制默认显示数量

```vue demo:search-bar-primary-count title="primaryCount"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ keyword: "", status: "", author: "", level: "", tag: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称" },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }] },
  { key: "author", label: "讲师", type: "input", placeholder: "讲师姓名" },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
  { key: "tag", label: "标签", type: "input", placeholder: "标签" },
];
</script>

<template>
  <AppSearchBar v-model="model" :items="items" :primary-count="3" />
</template>
```

### 2.4 自定义搜索与重置事件

```vue demo:search-bar-custom-events title="事件回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(1);
const model = ref<Record<string, FormValue>>({ keyword: "", status: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称", span: 4 },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }], span: 4 },
];

function onSearch() {
  page.value = 1;
  /* reload() 重置页码后请求列表 */
}
function onReset() {
  /* reload() 直接重新请求 */
}
</script>

<template>
  <AppSearchBar v-model="model" :items="items" @search="onSearch" @reset="onReset" />
</template>
```

### 2.5 隐藏搜索按钮

```vue demo:search-bar-hide-search title="隐藏操作按钮"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ keyword: "", status: "", author: "", level: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称" },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }] },
  { key: "author", label: "讲师", type: "input", placeholder: "讲师姓名" },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
];
</script>

<template>
  <AppSearchBar v-model="model" :items="items" :primary-count="2" :show-search="false" :show-reset="false" />
</template>
```

### 2.6 始终展开全部条件

```vue demo:search-bar-expanded-bind title="始终展开"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const expanded = ref(true);
const model = ref<Record<string, FormValue>>({ keyword: "", status: "", author: "", level: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称" },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }] },
  { key: "author", label: "讲师", type: "input", placeholder: "讲师姓名" },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
];
</script>

<template>
  <AppSearchBar v-model="model" v-model:expanded="expanded" :items="items" :primary-count="2" :collapsible="false" />
</template>
```

## 3. API 使用方式

页面持有查询模型，搜索事件中重置页码后请求列表；重置事件可直接调用同一请求。

```vue
<AppSearchBar
  v-model="query"
  :items="searchItems"
  :primary-count="3"
  @search="() => { query.page = 1; reload() }"
  @reset="reload"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` / `items` | 搜索模型和字段配置。 | `Record<string, FormValue>` / `FormItem[]` | 必填 |
| `expanded` / `collapsible` | 高级条件展开状态及是否可折叠。 | `boolean` | `false` / `true` |
| `primaryCount` | 默认显示的字段数量。 | `number` | `3` |
| `showReset` / `showSearch` | 是否显示重置与搜索按钮。 | `boolean` | `true` |
| `searchText` / `resetText` | 搜索与重置按钮文案。 | `string` | `"搜索"` / `"重置"` |

### 4.2 Slots

该组件不提供插槽；需要完全定制字段布局时使用 `AppFilterBar` 或 `AppForm`。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | 搜索模型 | 字段变化。 |
| `search` / `reset` | 搜索模型 | 点击搜索或重置后触发。 |
| `update:expanded` | `boolean` | 高级筛选状态变化。 |
