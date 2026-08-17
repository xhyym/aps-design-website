---
title: 无限滚动
component: AppInfiniteScroll
category: data
source: packages/ui/src/components/data/AppInfiniteScroll.vue
---

# 无限滚动（AppInfiniteScroll）

`AppInfiniteScroll` 在滚动接近底部时发出加载请求，并管理加载、失败、空数据与到底提示。

## 1. 用处

- 适用于按页增量追加的动态、消息或内容流。
- 父级负责请求下一页、合并 `items`、设置 `loading` 与 `finished`。
- 不应用无限滚动替代需要快速随机跳页的后台数据表格。

## 2. 代码演示

### 2.1 接近底部自动追加

```vue demo:data-infinite-scroll-basic title="自动追加"
<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref(Array.from({ length: 12 }, (_, index) => `动态记录 ${index + 1}`));
const loading = ref(false);
const finished = ref(false);
function load(): void { loading.value = true; window.setTimeout(() => { const next = items.value.length; items.value.push(...Array.from({ length: 8 }, (_, index) => `动态记录 ${next + index + 1}`)); loading.value = false; if (items.value.length >= 28) finished.value = true; }, 300); }
</script>

<template><AppInfiniteScroll :items="items" :loading="loading" :finished="finished" @load="load"><p v-for="item in items" :key="item">{{ item }}</p></AppInfiniteScroll></template>
```

### 2.2 已完成的空结果

```vue demo:data-infinite-scroll-empty title="空结果"
<script setup lang="ts">
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: string[] = [];
</script>

<template><AppInfiniteScroll :items="items" finished empty-text="当前筛选条件下没有动态" /></template>
```


### 2.3 失败重试

```vue demo:infinite-scroll-retry title="失败重试"
<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 20 }, (_, i) => "条目 " + (i + 1)));
const loading = ref(false);
const error = ref("请求失败，请重试");
const failed = ref(0);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 800));
  if (failed.value < 1) { failed.value++; error.value = "请求失败，请重试"; }
  else { error.value = ""; items.value = items.value.concat(Array.from({ length: 10 }, (_, i) => "更多 " + (items.value.length + i + 1))); }
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :error-message="error" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.4 加载完成

```vue demo:infinite-scroll-finished title="加载完成"
<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 30 }, (_, i) => "记录 " + (i + 1)));
const loading = ref(false);
const finished = ref(true);
const load = async () => {};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :finished="finished" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.5 自定义状态文案

```vue demo:infinite-scroll-custom-slot title="自定义状态文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 25 }, (_, i) => "动态 " + (i + 1)));
const loading = ref(false);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 600));
  items.value = items.value.concat(Array.from({ length: 8 }, (_, i) => "动态 " + (items.value.length + i + 1)));
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" loading-text="正在拼命加载…" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
```

### 2.6 滚动高度

```vue demo:infinite-scroll-height title="滚动高度"
<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 12 }, (_, i) => "日志 " + (i + 1)));
const loading = ref(false);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 500));
  items.value = items.value.concat(Array.from({ length: 6 }, (_, i) => "日志 " + (items.value.length + i + 1)));
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :height="160" :distance="24" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 8px 12px; border-bottom: 1px solid var(--aps-border); font-size: 13px; }
</style>
```
## 3. API 使用方式

每次 `load` 后要及时更新 `loading`，否则组件会阻止下一次边界请求。请求失败时传入 `errorMessage`，用户点击重试会以 `reason: "retry"` 再次触发 `load`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 已加载项目。 | `T[]` | — |
| `loading` / `finished` / `disabled` | 请求中、已无更多、禁用状态。 | `boolean` | `false` |
| `errorMessage` | 请求失败说明。 | `string` | `""` |
| `height` / `distance` | 滚动容器高度和触发距离。 | `number \| string` / `number` | `420` / `48` |
| `loadingText` / `finishedText` / `emptyText` / `ariaLabel` | 各状态文案。 | `string` | 内置文案 |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 列表内容区；调用方自行循环 `items` 渲染项目。 |

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `load` | 首次、滚动或重试需要加载时触发。 | `(reason: "initial" \| "scroll" \| "retry")` |
