---
title: 联想输入
component: AppAutocomplete
category: form
source: packages/ui/src/components/form/AppAutocomplete.vue
---

# 联想输入（AppAutocomplete）

`AppAutocomplete` 在文本输入过程中给出匹配建议，既能处理本地选项，也能协调远程查询的防抖、取消和异常状态。

## 1. 用处

- 用于课程、成员、客户等已知实体的快速检索与录入。
- 本地数据通过 `options` 过滤；服务端建议通过 `fetchSuggestions` 交给业务请求层。
- 组件只提交稳定的文本值；若需要保存对象主键，应在 `select` 事件中读取所选项。

## 2. 代码演示

### 2.1 本地课程建议

```vue demo:form-autocomplete-basic title="本地联想"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
  { key: "ts", label: "TypeScript 工程化", value: "TypeScript 工程化", description: "前端课程" },
  { key: "node", label: "Node.js 服务端", value: "Node.js 服务端", description: "后端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" clearable placeholder="搜索课程" aria-label="课程搜索" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.2 远程成员建议

```vue demo:form-autocomplete-remote title="远程联想"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const assignee = ref("");

async function fetchMembers({ query, signal }: { query: string; signal: AbortSignal }) {
  await new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, 260);
    signal.addEventListener("abort", () => { window.clearTimeout(timer); reject(new DOMException("请求已取消", "AbortError")); });
  });
  return ["林晨", "周宁", "陈果"].filter((name) => name.includes(query)).map((name) => ({ key: name, label: name, value: name, description: "产品团队" }));
}
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="assignee" :fetch-suggestions="fetchMembers" :debounce="0" placeholder="输入成员姓名" aria-label="负责人" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

远程函数会收到关键词和 `AbortSignal`。请求库需要将该信号传入请求；组件会在输入变化和面板关闭时取消过期请求。

### 2.3 禁用与只读

```vue demo:autocomplete-disabled title="禁用与只读"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("Vue 3 组件开发");
const readonlyValue = ref("TypeScript 工程化");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" disabled aria-label="禁用联想" />
    <AppAutocomplete v-model="readonlyValue" :options="options" readonly aria-label="只读联想" />
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 12px;
  width: min(100%, 360px);
}
</style>
```

`readonly` 仍展示下拉但不可编辑，适合回显已选课程。

### 2.4 加载状态

```vue demo:autocomplete-loading title="加载状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" :loading="true" placeholder="正在加载课程列表" aria-label="加载态联想" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

`loading` 为 `true` 时显示等待图标，常用于远程建议的请求过程中。

### 2.5 关闭本地过滤

```vue demo:autocomplete-filterable title="关闭本地过滤"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
  { key: "ts", label: "TypeScript 工程化", value: "TypeScript 工程化", description: "前端课程" },
  { key: "node", label: "Node.js 服务端", value: "Node.js 服务端", description: "后端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" :filterable="false" placeholder="关闭本地过滤，展示全部" aria-label="不过滤联想" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

`filterable="false"` 后组件不再按关键词过滤 `options`，适合本地已做服务端过滤或需要完整展示的场景。

### 2.6 自定义空文案

```vue demo:autocomplete-empty title="自定义空文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" empty-text="没有找到相关课程" placeholder="搜索课程" aria-label="自定义空文案" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.7 不聚焦查询

```vue demo:autocomplete-trigger title="不聚焦查询"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
  { key: "ts", label: "TypeScript 工程化", value: "TypeScript 工程化", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" :trigger-on-focus="false" placeholder="聚焦不查询，输入才联想" aria-label="不聚焦查询" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

`triggerOnFocus="false"` 关闭聚焦即查询，仅当输入变化时触发，减少无谓的远程请求。

### 2.8 错误状态

```vue demo:autocomplete-invalid title="错误状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" invalid described-by="course-error" placeholder="搜索课程" aria-label="错误联想" />
    <p id="course-error" class="demo-error">未选择有效的课程。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
```

`describedBy` 指向错误消息元素 ID，聚焦时屏幕阅读器会朗读该说明。

## 3. API 使用方式

```vue
<AppAutocomplete
  v-model="form.courseName"
  :options="courseOptions"
  clearable
  @select="saveSelectedCourse"
  @query="trackKeyword"
/>
```

用 `v-model` 保存选择后的 `option.value`，`select` 收到完整 `AutocompleteOption`。通过组件引用可调用 `focus()`、`blur()` 与 `reloadSuggestions()`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前输入和已选文本。 | `string` | — |
| `options` | 本地建议项；每项包含 `key`、`label`、可选 `value`、`description`、`disabled`。 | `AutocompleteOption[]` | `[]` |
| `fetchSuggestions` / `debounce` | 远程建议函数与防抖毫秒数。 | `AutocompleteFetchSuggestions` / `number` | `undefined` / `180` |
| `id` / `name` / `placeholder` | 原生字段标识、字段名和占位文本。 | `string` | `undefined` / `"请输入内容"` |
| `disabled` / `readonly` / `invalid` / `loading` | 禁用、只读、错误与外部加载状态。 | `boolean` | `false` |
| `clearable` / `filterable` / `triggerOnFocus` | 清空入口、本地过滤和聚焦即查询。 | `boolean` | `false` / `true` / `true` |
| `emptyText` | 没有匹配项时的说明。 | `string` | `"没有匹配的选项"` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"联想输入"` / `undefined` |

### 4.2 Slots

该组件没有插槽；建议项的标签和描述由 `options` 数据提供，保证键盘与鼠标选择使用同一数据源。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 输入值变化和原生确认变化。 |
| `query` | `(keyword: string)` | 用户输入或聚焦触发查询时发出。 |
| `select` | `(option: AutocompleteOption)` | 选择一条建议后发出。 |
| `clear` | — | 清空当前值。 |
| `focus` / `blur` | `(event: FocusEvent)` | 输入框聚焦与失焦。 |
| `fetch-success` / `fetch-error` | `(options, query)` / `(message)` | 远程建议成功或失败。 |
