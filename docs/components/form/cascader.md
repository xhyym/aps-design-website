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
