---
title: 级联面板
component: AppCascaderPanel
category: form
source: packages/ui/src/components/form/AppCascaderPanel.vue
---

# 级联面板（AppCascaderPanel）

`AppCascaderPanel` 直接展示分级选项列，适合区域、类目等需要连续浏览层级的选择。

## 1. 用处

- 用于服务区域、商品类目、课程分类等多层级数据的直接选择。
- 选择值只保存稳定的 `value` 路径，展示标签仍由选项定义提供。
- 支持多选、路径搜索和懒加载，异步数据请求始终由业务层注入。

## 2. 代码演示

### 2.1 选择单个区域路径

```vue demo:cascader-panel-basic title="区域级联"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["china", "zhejiang", "hangzhou"]);
const options: CascaderOption[] = [{ label: "中国", value: "china", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }, { label: "宁波", value: "ningbo" }] }, { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] }];
</script>

<template><AppCascaderPanel v-model="value" :options="options" aria-label="选择服务区域" /></template>
```

### 2.2 多选并搜索路径

```vue demo:cascader-panel-search title="可搜索的多选分类"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[][]>([["course", "frontend"]]);
const options: CascaderOption[] = [{ label: "课程分类", value: "course", children: [{ label: "前端开发", value: "frontend" }, { label: "后端开发", value: "backend" }] }, { label: "内容类型", value: "content", children: [{ label: "直播课", value: "live" }, { label: "录播课", value: "recorded" }] }];
</script>

<template><AppCascaderPanel v-model="value" :options="options" multiple check-strictly filterable aria-label="选择课程分类" /></template>
```

### 2.3 多选父节点可选

```vue demo:cascader-panel-check-strictly title="父级可选"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[][]>([]);
const options: CascaderOption[] = [
  { label: "课程分类", value: "course", children: [{ label: "前端开发", value: "frontend" }, { label: "后端开发", value: "backend" }] },
  { label: "内容类型", value: "content", children: [{ label: "直播课", value: "live" }, { label: "录播课", value: "recorded" }] },
];
</script>

<template><AppCascaderPanel v-model="value" :options="options" multiple check-strictly aria-label="选择课程分类（父级可选）" /></template>
```

### 2.4 多选层级结构

```vue demo:cascader-panel-rich title="多选结构"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[][]>([["product", "design"]]);
const options: CascaderOption[] = [
  { label: "产品", value: "product", children: [{ label: "设计", value: "design", children: [{ label: "交互设计", value: "ux" }, { label: "视觉设计", value: "ui" }] }, { label: "运营", value: "operation" }] },
  { label: "研发", value: "rd", children: [{ label: "前端", value: "fe", children: [{ label: "Web", value: "web" }, { label: "移动端", value: "mobile" }] }, { label: "后端", value: "be" }] },
];
</script>

<template><AppCascaderPanel v-model="value" :options="options" multiple aria-label="选择部门（多选）" /></template>
```

### 2.5 禁用面板

```vue demo:cascader-panel-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["china", "zhejiang", "hangzhou"]);
const options: CascaderOption[] = [
  { label: "中国", value: "china", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }, { label: "宁波", value: "ningbo" }] }, { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template><AppCascaderPanel v-model="value" :options="options" disabled aria-label="禁用级联面板" /></template>
```

### 2.6 展开节点时异步加载子级

```vue demo:cascader-panel-lazy title="懒加载"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption, type CascaderLoadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["china"]);
const rootOptions: CascaderOption[] = [{ label: "中国", value: "china" }];

const loadData: CascaderLoadRequest = async ({ option, signal }) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (signal.aborted) return [];
  if (option.value === "china") {
    return [
      { label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] },
      { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] },
    ];
  }
  return [];
};
</script>

<template><AppCascaderPanel v-model="value" :options="rootOptions" lazy :load-data="loadData" aria-label="懒加载级联面板" /></template>
```

## 3. API 使用方式

单选时模型为单条路径；开启 `multiple` 后模型变为路径数组。懒加载函数可使用传入的 `AbortSignal` 取消过期请求。

```vue
<AppCascaderPanel
  v-model="categoryPaths"
  :options="rootCategories"
  multiple
  lazy
  :load-data="loadCategoryChildren"
  @change="reloadByCategories"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 单选路径或多选路径数组，支持双向绑定。 | `string[] \| string[][]` | 必填 |
| `options` | 级联选项树。 | `CascaderOption[]` | 必填 |
| `multiple` | 是否允许同时选中多条路径。 | `boolean` | `false` |
| `checkStrictly` | 是否允许选择拥有子级的节点。 | `boolean` | `false` |
| `filterable` | 是否显示路径搜索。 | `boolean` | `false` |
| `lazy` / `loadData` | 是否懒加载及子级请求函数。 | `boolean` / `CascaderLoadRequest` | `false` / — |
| `disabled` / `ariaLabel` | 禁用状态与面板名称。 | `boolean` / `string` | `false` / `"级联面板"` |

### 4.2 Slots

该组件不提供插槽，节点内容由 `CascaderOption` 描述。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | 选中路径 | 选择结果更新。 |
| `expand` | `string[]` | 展开或点击路径节点时触发。 |
| `load` / `load-error` | 节点、路径 / 错误、节点、路径 | 懒加载成功或失败。 |
