---
title: 级联选择器
component: AppCascader
category: form
source: packages/ui/src/components/form/AppCascader.vue
---

# 级联选择器（AppCascader）

`AppCascader` 用路径数组表达层级选择，适合地区、部门、课程目录等存在父子结构的数据。

## 1. 用处

- 需要逐层定位一个目标节点时使用，如“省 / 市 / 区”。
- 支持多路径选择、节点可选、筛选和按展开节点异步加载。
- 输出路径中的稳定 `value`，不输出显示标签，便于直接提交后端。

## 2. 代码演示

### 2.1 单路径地区选择

```vue demo:form-cascader-basic title="单选级联"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="options" clearable filterable placeholder="选择服务区域" aria-label="服务区域" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
```

### 2.2 多路径选择

```vue demo:form-cascader-multiple title="多选目录"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[][]>([]);
const options = [
  { label: "前端", value: "frontend", children: [{ label: "Vue", value: "vue" }, { label: "React", value: "react" }] },
  { label: "服务端", value: "backend", children: [{ label: "Node.js", value: "node" }, { label: "Java", value: "java" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="values" :options="options" multiple check-strictly collapse-tags placeholder="选择课程方向" aria-label="课程方向" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
```

### 2.3 尺寸变体

```vue demo:form-cascader-sizes title="尺寸变体"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref<string[]>([]);
const medium = ref<string[]>([]);
const large = ref<string[]>([]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="small" :options="options" size="small" clearable placeholder="小型" aria-label="小型级联" />
    <AppCascader v-model="medium" :options="options" size="default" clearable placeholder="默认" aria-label="默认级联" />
    <AppCascader v-model="large" :options="options" size="large" clearable placeholder="大型" aria-label="大型级联" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 200px); }
</style>
```

### 2.4 关键词筛选层级

```vue demo:form-cascader-search title="可搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const options = [
  { label: "前端", value: "frontend", children: [{ label: "框架", value: "framework", children: [{ label: "Vue", value: "vue" }, { label: "React", value: "react" }] }, { label: "构建", value: "build", children: [{ label: "Vite", value: "vite" }, { label: "Webpack", value: "webpack" }] }] },
  { label: "服务端", value: "backend", children: [{ label: "语言", value: "language", children: [{ label: "Node.js", value: "node" }, { label: "Go", value: "go" }] }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="options" filterable clearable placeholder="按关键词筛选层级" aria-label="技术栈" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
```

### 2.5 多选父节点可选并折叠标签

```vue demo:form-cascader-check-strictly title="多选严格模式"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[][]>([]);
const options = [
  { label: "前端", value: "frontend", children: [{ label: "Vue", value: "vue" }, { label: "React", value: "react" }] },
  { label: "服务端", value: "backend", children: [{ label: "Node.js", value: "node" }, { label: "Java", value: "java" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="values" :options="options" multiple check-strictly collapse-tags placeholder="父节点可选并折叠标签" aria-label="技术方向" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.6 展开节点时异步加载子级

```vue demo:form-cascader-lazy title="懒加载"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader, type CascaderOption, type CascaderLoadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const rootOptions: CascaderOption[] = [
  { label: "中国", value: "china" },
  { label: "美国", value: "usa" },
];

const loadData: CascaderLoadRequest = async ({ option, signal }) => {
  const map: Record<string, CascaderOption[]> = {
    china: [
      { label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] },
      { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] },
    ],
    usa: [
      { label: "California", value: "ca", children: [{ label: "San Francisco", value: "sf" }] },
      { label: "New York", value: "ny", children: [{ label: "New York City", value: "nyc" }] },
    ],
  };
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (signal.aborted) return [];
  return map[option.value] ?? [];
};
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="rootOptions" lazy :load-data="loadData" clearable placeholder="展开节点时加载子级" aria-label="地区" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
```

### 2.7 只展示末级路径

```vue demo:form-cascader-show-all-levels title="末级展示"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const path = ref<string[]>(["east", "zhejiang", "hangzhou"]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="path" :options="options" clearable placeholder="显示完整层级" aria-label="完整层级" />
    <AppCascader v-model="path" :options="options" :show-all-levels="false" separator=" > " clearable placeholder="只显示末级" aria-label="末级路径" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 220px); }
</style>
```

### 2.8 禁用状态与禁用项

```vue demo:form-cascader-disabled title="禁用状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["east", "zhejiang", "hangzhou"]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai", disabled: true }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="value" :options="options" disabled aria-label="禁用级联" />
    <AppCascader v-model="value" :options="options" placeholder="含禁用子节点" aria-label="含禁用项" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 220px); }
</style>
```

## 3. API 使用方式

```vue
<AppCascader
  v-model="form.departmentPath"
  :options="departmentOptions"
  lazy
  :load-data="loadDepartmentChildren"
  @load-error="notifyLoadFailure"
/>
```

单选值是 `string[]`，多选值是 `string[][]`。开启 `lazy` 后，`loadData` 必须返回当前节点的子节点；组件负责取消过期请求与缓存已加载节点。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` / `options` | 选中路径与层级选项。 | `string[] \| string[][]` / `CascaderOption[]` | — |
| `id` / `name` / `size` / `placeholder` | 字段标识、尺寸和占位文本。 | `string` / `ControlSize` | — / 继承全局配置 |
| `disabled` / `invalid` / `clearable` / `filterable` | 基本交互状态。 | `boolean` | `false` |
| `multiple` / `checkStrictly` | 多路径选择与父节点可选开关。 | `boolean` | `false` |
| `lazy` / `loadData` | 异步加载节点及其请求函数。 | `boolean` / `CascaderLoadRequest` | `false` / `undefined` |
| `showAllLevels` / `separator` | 已选路径展示层级与分隔符。 | `boolean` / `string` | `true` / `" / "` |
| `collapseTags` / `maxTagCount` | 多选标签折叠规则。 | `boolean` / `number` | `false` / `1` |
| `filterMethod` | 自定义筛选函数，接收关键词、节点和完整节点路径。 | `Function` | `undefined` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"级联选择器"` / `undefined` |

### 4.2 Slots

该组件没有插槽；层级展示统一由 `CascaderOption` 的 `label`、`value`、`children` 和 `disabled` 管理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value)` | 选择路径变化。 |
| `clear` / `visible-change` | — / `(visible)` | 清空及面板开关。 |
| `expand-change` / `remove-tag` | `(path)` | 展开节点或移除多选路径。 |
| `load` / `load-error` | `(option, path)` / `(error, option, path)` | 懒加载开始及失败。 |
