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

### 2.4 仅控制尺寸

只传 `size`，让该子树内的控件默认使用统一密度，子级仍可用自己的 `size` 覆盖。

```vue demo:config-provider-size title="仅控制尺寸"
<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider size="small">
    <AppButton>保存课程</AppButton>
    <AppButton variant="secondary">预览</AppButton>
    <AppButton variant="text">取消</AppButton>
  </AppConfigProvider>
</template>
```

### 2.5 嵌套覆盖

内层 Provider 只覆盖自己传入的字段，其余继承父级；适合在只读区域中保留个别可操作入口。

```vue demo:config-provider-nested title="嵌套覆盖"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfigProvider } from "aps-design-pro";

const locked = ref(true);
</script>

<template>
  <AppConfigProvider :disabled="locked">
    <AppButton>主操作</AppButton>
    <AppConfigProvider :disabled="false" size="large">
      <AppButton variant="secondary">始终可操作的查看入口</AppButton>
    </AppConfigProvider>
  </AppConfigProvider>
</template>
```

### 2.6 调整浮层层级

`zIndex` 写入 `--aps-layer-base` 变量，影响使用该层级令牌的下游浮层；适合在弹窗套弹窗时抬高内层。

```vue demo:config-provider-zindex title="调整浮层层级"
<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider :z-index="3000">
    <AppButton>浮层层级基准提升至 3000</AppButton>
  </AppConfigProvider>
</template>
```

### 2.7 切换语言环境

`locale` 通过 `useAppComponentConfig()` 向下传递，依赖语言的子组件会随 Provider 变化而更新。

```vue demo:config-provider-locale title="切换语言环境"
<script setup lang="ts">
import { ref } from "vue";
import { AppConfigProvider, useAppComponentConfig } from "aps-design-pro";

const locale = ref<"zh-CN" | "en-US">("zh-CN");
const config = useAppComponentConfig();
</script>

<template>
  <AppConfigProvider :locale="locale">
    <div class="config-provider-locale">
      <p>当前语言环境：{{ config.locale }}</p>
      <button type="button" @click="locale = locale === 'zh-CN' ? 'en-US' : 'zh-CN'">
        切换语言环境
      </button>
    </div>
  </AppConfigProvider>
</template>

<style scoped>
.config-provider-locale {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

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
