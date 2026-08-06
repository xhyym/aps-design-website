---
title: 全局配置
component: AppConfigProvider
category: base
source: packages/ui/src/components/base/AppConfigProvider.vue
---

# 全局配置（AppConfigProvider）

`AppConfigProvider` 为子组件提供默认尺寸、禁用态、层级基准和语言环境。它使用 `display: contents`，不会额外产生可见布局盒子，适合放在应用根部或某个局部工作区的边界。

## 1. 用处

`AppConfigProvider` 用于在应用根部或局部工作区统一控件尺寸、禁用态、浮层层级和语言环境。它不会创建额外布局盒子，适合包裹整棵组件树。

## 2. 代码演示

### 2.1 在应用根部统一控件密度

```vue demo:config-provider-density title="统一控件密度"
<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider size="small" locale="zh-CN" :z-index="2400">
    <AppButton>保存课程</AppButton>
    <AppButton variant="secondary">预览</AppButton>
  </AppConfigProvider>
</template>
```

未显式传入 `size` 的子组件会继承 `small`；子组件自己传入 `size="large"` 时会覆盖这一默认值。`zIndex` 会写入 `--aps-layer-base` CSS 变量，供使用该层级令牌的下游浮层使用。

### 2.2 局部禁用与嵌套覆盖

```vue demo:config-provider-disabled title="局部禁用与覆盖"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfigProvider } from "aps-design-pro";

const isReadonly = ref(true);
</script>

<template>
  <AppConfigProvider :disabled="isReadonly">
    <AppButton>保存</AppButton>

    <AppConfigProvider :disabled="false" size="small">
      <AppButton variant="secondary">查看变更记录</AppButton>
    </AppConfigProvider>
  </AppConfigProvider>
</template>
```

Provider 只覆盖自己明确传入的字段，其他字段继承最近的父级配置。适合把只读区域整体禁用，同时为少数查看类入口保留可操作状态。

### 2.3 在组合式逻辑中读取配置

组件库导出 `useAppComponentConfig()`，自定义组件可读取最近的 Provider：

```ts
import { useAppComponentConfig } from "aps-design-pro";

const componentConfig = useAppComponentConfig();
// componentConfig.value.size、disabled、zIndex、locale
```

未放置 Provider 时，Hook 返回稳定默认值：`default`、`false`、`2000`、`zh-CN`。

## 3. API 使用方式

通常只在应用入口设置一次默认值；局部只读区再嵌套 Provider 覆盖 `disabled`。自定义组件通过 `useAppComponentConfig()` 读取最近一层配置，未找到 Provider 时使用稳定默认值。

```vue
<AppConfigProvider size="small" :z-index="2400">
  <AppShell />
</AppConfigProvider>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 子控件默认尺寸。 | `"small" \| "default" \| "large"` | 继承父级或 `"default"` |
| `disabled` | 子控件默认禁用态。 | `boolean` | 继承父级或 `false` |
| `zIndex` | 下游层级变量基准，内部会取不小于 `0` 的整数。 | `number` | 继承父级或 `2000` |
| `locale` | 组件默认语言环境标识。 | `"zh-CN" \| "en-US"` | 继承父级或 `"zh-CN"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 需要继承配置的子树。 |

### 4.3 Events

配置 Provider 不提供自定义事件；配置更新由 Vue 的响应式 Props 自动向下传播。
