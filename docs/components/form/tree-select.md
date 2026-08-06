---
title: 树选择器
component: AppTreeSelect
category: form
source: packages/ui/src/components/form/AppTreeSelect.vue
---

# 树选择器（AppTreeSelect）

`AppTreeSelect` 在下拉选择器中呈现可展开的树结构，适合部门、权限与分类等层级对象的单项或多项选择。

## 1. 用处

- 需要浏览父子关系、又不希望占用完整树面板空间时使用。
- 支持筛选、默认展开、手风琴展开、多选与按节点点击勾选。
- 懒加载场景通过 `loadData` 延后获取子节点，组件不会绑定具体请求实现。

## 2. 代码演示

### 2.1 单选团队

```vue demo:form-tree-select-basic title="筛选树选择"
<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { label: "产品中心", value: "product", children: [{ label: "产品设计", value: "design" }, { label: "产品运营", value: "operation" }] },
  { label: "研发中心", value: "engineering", children: [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppTreeSelect v-model="value" :options="options" filterable clearable placeholder="选择所属团队" aria-label="所属团队" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 380px); }
</style>
```

### 2.2 多选权限节点

```vue demo:form-tree-select-multiple title="多选权限"
<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["dashboard"]);
const options = [
  { label: "内容管理", value: "content", children: [{ label: "文章编辑", value: "article" }, { label: "素材管理", value: "asset" }] },
  { label: "数据中心", value: "data", children: [{ label: "数据看板", value: "dashboard" }, { label: "导出报表", value: "export" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppTreeSelect v-model="values" :options="options" multiple check-on-click-node collapse-tags placeholder="分配权限" aria-label="权限范围" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

## 3. API 使用方式

```vue
<AppTreeSelect
  v-model="form.organizationId"
  :options="organizationTree"
  lazy
  :load-data="loadOrganizationChildren"
  :default-expanded-keys="[\"root\"]"
  @node-expand="recordExpand"
/>
```

单选输出一个 `string`，多选输出 `string[]`。如数据由接口异步返回，请保持各节点 `value` 在整个树内唯一。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` / `options` | 已选节点值与树数据。 | `string \| string[]` / `TreeOption[]` | — |
| `id` / `name` / `size` / `placeholder` | 字段标识、尺寸与占位文本。 | `string` / `ControlSize` | — / 继承全局配置 |
| `disabled` / `invalid` / `clearable` / `filterable` | 基本交互状态。 | `boolean` | `false` |
| `multiple` / `checkStrictly` / `checkOnClickNode` | 多选、父节点选择和文本点击勾选。 | `boolean` | `false` |
| `lazy` / `loadData` | 异步节点加载开关和函数。 | `boolean` / `TreeSelectLoadRequest` | `false` / `undefined` |
| `collapseTags` / `maxTagCount` | 多选标签折叠规则。 | `boolean` / `number` | `false` / `1` |
| `defaultExpandedKeys` / `accordion` | 默认展开节点与手风琴模式。 | `string[]` / `boolean` | `[]` / `false` |
| `filterMethod` | 自定义树筛选函数。 | `Function` | `undefined` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"树选择器"` / `undefined` |

### 4.2 Slots

该组件没有插槽。节点由 `TreeOption` 的 `label`、`value`、`children` 和 `disabled` 定义。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value)` | 选择结果变化。 |
| `clear` / `visible-change` | — / `(visible)` | 清空及面板开关。 |
| `node-expand` / `node-collapse` | `(option, path)` | 节点展开或收起。 |
| `check-change` / `remove-tag` | `(option, checked, value)` / `(option)` | 多选勾选或删除标签。 |
| `load` / `load-error` | `(option, path)` / `(error, option, path)` | 懒加载开始与失败。 |
