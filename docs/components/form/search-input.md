---
title: 搜索输入框
component: AppSearchInput
category: form
source: packages/ui/src/components/form/AppSearchInput.vue
---

# 搜索输入框（AppSearchInput）

`AppSearchInput` 用于页面内的关键词搜索和搜索建议选择。它处理 Enter 提交、清空、键盘导航、建议面板和输入防抖；实际查询、建议数据与权限过滤由业务页面提供。

## 1. 用处

- 在表格工具栏、资源列表、帮助中心中提交关键词搜索。
- 传入 `suggestions` 在输入时展示可选的课程、人员或标签建议。
- 对远程搜索使用 `debounce`，避免每次输入都立即发起请求。

如果搜索用于跨模块快速跳转，应使用 `AppGlobalSearch`；复杂条件检索应使用 `AppFilterBar` 或独立筛选区。

## 2. 代码演示

### 2.1 Enter 提交关键词搜索

```vue demo:search-input-basic title="关键词搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const searchStatus = ref("等待搜索");

function searchCourses(value: string): void {
  searchStatus.value = value ? `正在搜索“${value}”` : "请输入搜索关键词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" placeholder="搜索课程、讲师或专题" @search="searchCourses" />
    <span>{{ searchStatus }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

按 Enter 会触发 `search`，参数是已去除首尾空格的关键词。清空按钮会同步更新 `v-model` 并触发 `clear`，但不会自动提交一次空搜索。

### 2.2 键盘选择搜索建议

```vue demo:search-input-suggestion title="搜索建议"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const selectedCourse = ref("尚未选择建议项");
const suggestions = [
  { key: "vue", label: "Vue 3 工程化实战", value: "Vue 3", description: "课程" },
  { key: "typescript", label: "TypeScript 类型系统", value: "TypeScript", description: "课程" },
  { key: "lin", label: "林知远", value: "林知远", description: "讲师" },
];

function selectSuggestion(item: { label: string }): void {
  selectedCourse.value = `已选择：${item.label}`;
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      placeholder="输入关键词后按方向键选择"
      @select="selectSuggestion"
    />
    <span>{{ selectedCourse }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

聚焦后可以用上、下方向键跳过禁用建议项，按 Enter 选择当前建议；按 Escape 关闭面板。建议项的 `value` 缺省时会使用 `label` 写回输入框。

### 2.3 远程搜索（真实 API）

下面示例直接调用公开的 **GitHub 用户搜索 API**，输入时按 300ms 防抖拉取建议，无需任何后端。

```vue demo:search-input-remote title="远程搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions = ref<SearchSuggestion[]>([]);
const loading = ref(false);
const picked = ref("尚未选择");

async function searchUsers(value: string): Promise<void> {
  const query = value.trim();
  if (!query) {
    suggestions.value = [];
    return;
  }
  loading.value = true;
  try {
    const res = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=8`);
    const data = await res.json();
    suggestions.value = (data.items ?? []).map((user: { login: string }) => ({
      key: user.login,
      label: user.login,
      value: user.login,
      description: "GitHub 用户",
    }));
  } catch {
    suggestions.value = [];
  } finally {
    loading.value = false;
  }
}

function onSelect(item: SearchSuggestion): void {
  picked.value = `已选择：${item.label}`;
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      :loading="loading"
      :debounce="300"
      placeholder="搜索 GitHub 用户名"
      @debounced-search="searchUsers"
      @select="onSelect"
      aria-label="GitHub 用户搜索"
    />
    <span>{{ picked }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 360px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

`debounced-search` 在输入停止达到 `debounce` 后触发；请求失败时清空建议并隐藏加载态，不会阻塞输入。GitHub 匿名接口有速率限制，仅作演示用途。

### 2.4 禁用状态

```vue demo:search-input-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("只读的搜索词");
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" disabled aria-label="禁用搜索框" />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
```

### 2.5 加载状态

```vue demo:search-input-loading title="加载中"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions: SearchSuggestion[] = [
  { key: "a", label: "进行中的请求会保留建议面板", value: "a", description: "提示" },
  { key: "b", label: "适合配合远程搜索展示等待状态", value: "b", description: "提示" },
];
const loading = ref(true);
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      :loading="loading"
      placeholder="加载中（建议面板保持展开）"
      aria-label="加载态搜索框"
    />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
```

`loading` 为 `true` 时右侧显示等待图标，同时保留已展开的建议面板，便于在远程搜索过程中提示用户。

### 2.6 仅提交不展示建议

```vue demo:search-input-no-suggestions title="无建议"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("等待搜索");

function search(value: string): void {
  status.value = value ? `搜索：“${value}”` : "请输入关键词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :show-suggestions="false"
      placeholder="仅提交关键词，不展示建议"
      @search="search"
      aria-label="无建议搜索框"
    />
    <span>{{ status }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

`showSuggestions="false"` 完全关闭建议面板，组件退化为“输入即提交”的搜索框，按 Enter 触发 `search`。

### 2.7 清空事件

```vue demo:search-input-clear title="清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("等待操作");

function onClear(): void {
  status.value = "已清空搜索词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" placeholder="点击清空按钮试试" @clear="onClear" aria-label="可清空搜索框" />
    <span>{{ status }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

点击清空按钮会同步 `v-model` 为空并触发 `clear`，可在此重置关联的状态或重新拉取全量数据。

### 2.8 含禁用建议项

```vue demo:search-input-with-disabled title="禁用建议项"
<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions: SearchSuggestion[] = [
  { key: "vue", label: "Vue 3 工程化实战", value: "Vue 3", description: "课程", disabled: true },
  { key: "ts", label: "TypeScript 类型系统", value: "TypeScript", description: "课程" },
  { key: "lin", label: "林知远", value: "林知远", description: "讲师" },
];
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" :suggestions="suggestions" placeholder="含禁用建议项，键盘会跳过" aria-label="含禁用项搜索框" />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
```

标记为 `disabled` 的建议项在视觉上置灰，且键盘方向键会自动跳过，点击也不会触发 `select`。

## 3. API 使用方式

页面负责将 `v-model` 绑定到筛选条件，并在 `search` 或 `debounced-search` 中调用数据查询。建议数据改变后直接传入新数组，组件不缓存业务查询结果。

```vue
<AppSearchInput
  v-model="filters.keyword"
  :suggestions="courseSuggestions"
  :debounce="300"
  @search="loadCourses"
  @debounced-search="loadSuggestions"
  @select="applySuggestion"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前关键词，配合 `v-model` 使用。 | `string` | — |
| `suggestions` | 搜索建议列表；禁用项不会被键盘选中。 | `SearchSuggestion[]` | `[]` |
| `id` | 原生输入框 ID。 | `string` | `undefined` |
| `placeholder` | 空值提示文本。 | `string` | `"请输入搜索内容"` |
| `disabled` | 是否禁用输入与建议选择。 | `boolean` | `false` |
| `loading` | 是否显示加载状态；加载时保留建议面板。 | `boolean` | `false` |
| `debounce` | `debounced-search` 的延迟毫秒数；`0` 表示不触发防抖事件。 | `number` | `0` |
| `showSuggestions` | 是否在聚焦时展示建议面板。 | `boolean` | `true` |
| `ariaLabel` | 搜索框的辅助名称。 | `string` | `"搜索"` |

### 4.2 Slots

`AppSearchInput` 不提供插槽。搜索图标、清空入口与建议项结构由组件统一控制；需要完全自定义结果行时使用业务搜索面板组合。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | 输入值变化时触发。 |
| `search` | `(value: string)` | 按 Enter 或选择建议项时触发。 |
| `debounced-search` | `(value: string)` | 输入停止达到 `debounce` 时触发。 |
| `select` | `(suggestion: SearchSuggestion)` | 选择未禁用建议项后触发。 |
| `clear` / `focus` | `()` | 点击清空或输入框聚焦时触发。 |
