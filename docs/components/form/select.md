---
title: 选择器
component: AppSelect
category: form
source: packages/ui/src/components/form/AppSelect.vue
---

# 选择器（AppSelect）

`AppSelect` 提供单选、多选、本地筛选、远程检索和大量选项虚拟渲染，返回值始终与选项展示文案分离。

## 1. 用处

- 用于状态、分类、成员、标签等受控枚举值选择。
- 支持单选、多选、可搜索、可创建及远程查询；各模式仍通过 `v-model` 输出稳定 `value`。
- 选项过多时启用 `virtual`，避免在筛选面板中一次渲染全部 DOM 节点。

## 2. 代码演示

### 2.1 单选状态

```vue demo:form-select-basic title="单选与清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { label: "进行中", value: "active", description: "正在学习或制作" },
  { label: "已完成", value: "completed", description: "已归档" },
  { label: "已暂停", value: "paused", description: "暂不显示" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="value" :options="options" clearable placeholder="选择课程状态" aria-label="课程状态" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.2 多选并折叠标签

```vue demo:form-select-multiple title="多选筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["vue"]);
const options = [
  { label: "Vue 3", value: "vue" },
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "node" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="values" :options="options" multiple filterable collapse-tags :multiple-limit="3" placeholder="选择技术标签" aria-label="技术标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.3 多档尺寸

```vue demo:select-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const size = ref("");
const options = [
  { label: "紧凑", value: "small" },
  { label: "默认", value: "default" },
  { label: "宽松", value: "large" },
];
</script>

<template>
  <div class="demo-stack">
    <AppSelect v-model="size" :options="options" size="small" placeholder="紧凑尺寸" aria-label="尺寸示例" />
    <AppSelect v-model="size" :options="options" size="default" placeholder="默认尺寸" aria-label="尺寸示例" />
    <AppSelect v-model="size" :options="options" size="large" placeholder="宽松尺寸" aria-label="尺寸示例" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 10px; width: min(100%, 360px); }
</style>
```

### 2.4 本地筛选

```vue demo:select-filterable title="可搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const city = ref("");
const options = [
  { label: "北京", value: "beijing" },
  { label: "上海", value: "shanghai" },
  { label: "广州", value: "guangzhou" },
  { label: "深圳", value: "shenzhen" },
  { label: "杭州", value: "hangzhou" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="city" :options="options" filterable placeholder="输入城市拼音或汉字筛选" aria-label="城市" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.5 禁用与错误态

```vue demo:select-disabled title="禁用与错误"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const status = ref("");
const options = [
  { label: "草稿", value: "draft" },
  { label: "已发布", value: "published" },
  { label: "已下架", value: "offline", disabled: true },
];
</script>

<template>
  <div class="demo-stack">
    <AppSelect v-model="status" :options="options" placeholder="禁用整个选择器" disabled aria-label="状态" />
    <AppSelect v-model="status" :options="options" placeholder="字段校验未通过" invalid aria-label="状态" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 10px; width: min(100%, 360px); }
</style>
```

### 2.6 可创建新项

```vue demo:select-allow-create title="允许创建"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>(["vue"]);
const options = [
  { label: "Vue 3", value: "vue" },
  { label: "React", value: "react" },
  { label: "Svelte", value: "svelte" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="tags" :options="options" multiple filterable allow-create clearable placeholder="选中或输入新标签" aria-label="技术栈" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.7 加载状态

```vue demo:select-loading title="加载中"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const member = ref("");
const options = [
  { label: "张讲师", value: "u1" },
  { label: "李助教", value: "u2" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="member" :options="options" loading placeholder="正在加载成员列表" aria-label="成员" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.8 远程搜索

```vue demo:select-remote title="远程检索"
<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const course = ref("");
const remoteOptions = ref<{ label: string; value: string }[]>([]);

async function searchCourses(keyword: string): Promise<{ label: string; value: string }[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
    { label: `${keyword} 入门`, value: `${keyword}-basic` },
    { label: `${keyword} 进阶`, value: `${keyword}-pro` },
  ];
}
</script>

<template>
  <div class="demo-field">
    <AppSelect
      v-model="course"
      :options="remoteOptions"
      remote
      filterable
      :remote-method="searchCourses"
      placeholder="搜索课程名称"
      aria-label="课程"
    />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

## 3. API 使用方式

```vue
<AppSelect
  v-model="form.memberIds"
  :options="memberOptions"
  multiple
  remote
  :remote-method="searchMembers"
  @remove-tag="unassignMember"
/>
```

远程模式由 `remoteMethod` 返回当前关键词对应的完整选项。业务层应只保存 `value`，并在数据回填时提供相同的选项数据以显示标签。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 单选值或多选值数组。 | `string \| string[]` | — |
| `options` | 选项数据，包含 `label`、`value`、可选描述、分组和禁用状态。 | `SelectOption[]` | — |
| `id` / `name` / `size` / `placeholder` | 原生标识、尺寸与占位文本。 | `string` / `ControlSize` | — / 继承全局配置 |
| `disabled` / `invalid` / `loading` | 禁用、错误和外部加载状态。 | `boolean` | `false` |
| `filterable` / `clearable` / `multiple` | 本地筛选、清空和多选。 | `boolean` | `false` |
| `remote` / `remoteMethod` / `remoteDebounce` | 远程搜索开关、请求函数和防抖毫秒数。 | `boolean` / `(keyword) => Promise<SelectOption[]>` / `number` | `false` / `undefined` / `220` |
| `allowCreate` | 本地可筛选模式中允许创建新项。 | `boolean` | `false` |
| `virtual` / `virtualItemHeight` / `virtualHeight` | 虚拟列表开关、行高和可视高度。 | `boolean` / `number` | `false` / `36` / `252` |
| `multipleLimit` / `collapseTags` / `maxTagCount` | 多选上限与标签折叠规则。 | `number` / `boolean` | `0` / `false` / `1` |
| `emptyText` / `showDescription` / `filterMethod` | 空数据文案、描述显示与本地自定义筛选。 | `string` / `boolean` / `Function` | `"暂无选项"` / `true` / `undefined` |
| `placement` / `ariaLabel` / `describedBy` | 面板位置和无障碍说明。 | `"top" \| "bottom"` / `string` | `"bottom"` / `"选择器"` |

### 4.2 Slots

该组件没有插槽。选项展示由 `label`、`description` 与 `group` 的数据结构统一管理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value)` | 选择结果变化。 |
| `search` / `select` | `(keyword)` / `(option)` | 搜索关键词和选中项。 |
| `clear` / `remove-tag` | — / `(option)` | 清空或删除一个多选标签。 |
| `create` / `limit-exceed` | `(option)` / `(option, limit)` | 创建选项或到达多选上限。 |
| `visible-change` / `focus` / `blur` | `(visible)` / `(event)` | 面板可见性与焦点事件。 |
| `load-error` | `(error, keyword)` | 远程搜索失败。 |
