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
