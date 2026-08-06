---
title: 链接
component: AppLink
category: base
source: packages/ui/src/components/base/AppLink.vue
---

# 链接（AppLink）

`AppLink` 用于文案中的跳转入口，统一文本色、下划线策略、键盘焦点与新窗口安全属性。它渲染原生 `<a>`，并不替代 Vue Router 的路由组件。

## 1. 用处

`AppLink` 用于文案中的页面内跳转和外部链接。它渲染原生锚点并统一色调、下划线、焦点样式以及新窗口安全属性；无刷新路由仍由应用中的 `RouterLink` 负责。

## 2. 代码演示

### 2.1 页面内或外部跳转

```vue demo:link-basic title="链接语义"
<script setup lang="ts">
import { AppLink } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>
    查看
    <AppLink to="/orders" tone="primary">交易订单</AppLink>
    或
    <AppLink href="https://gitee.com/xhyym/aps-design-pro" target="_blank">
      组件库仓库
    </AppLink>
  </p>
</template>
```

`to` 只是 `href` 的语义别名，并且优先级高于 `href`；当前版本仍输出原生锚点。若应用需要无刷新路由、路由守卫或预取，应在业务中使用 `RouterLink`。

### 2.2 禁用不是拦截点击

```vue demo:link-disabled title="不可用链接"
<script setup lang="ts">
import { AppLink } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLink disabled tone="muted">正在生成下载地址</AppLink>
</template>
```

禁用时组件改为渲染带 `role="link"`、`aria-disabled="true"` 的 `span`，不会保留可访问的地址。因此异步地址准备好后应重新传入 `href` 或 `to`，而不是在点击事件里绕过禁用态跳转。

## 3. API 使用方式

页面内跳转传 `to`，外部链接传 `href`。以新窗口打开外站时使用 `target="_blank"`，组件会自动补上安全的 `rel` 属性。地址尚未准备好时，通过 `disabled` 明确反馈状态，不要用空链接占位。

```vue
<AppLink
  href="https://gitee.com/xhyym/aps-design-pro"
  target="_blank"
  underline="always"
>
  在 Gitee 查看源码
</AppLink>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `href` | 原生链接地址。 | `string` | `""` |
| `to` | 链接地址别名；有值时优先于 `href`。 | `string` | `undefined` |
| `target` | 打开目标。传入 `_blank` 时自动添加 `noopener noreferrer`。 | `"_self" \| "_blank" \| "_parent" \| "_top"` | `"_self"` |
| `disabled` | 是否展示为不可用链接。 | `boolean` | `false` |
| `tone` | 文本色调。 | `"default" \| "primary" \| "muted"` | `"primary"` |
| `underline` | 下划线策略。 | `"none" \| "hover" \| "always"` | `"hover"` |
| `ariaLabel` | 覆盖链接的辅助名称。 | `string` | `""` |
| `external` | 当前为兼容保留字段，不改变实际渲染或跳转行为。 | `boolean` | `false` |

### 4.2 Slots

| 项目 | 说明 |
| --- | --- |
| `default` 插槽 | 链接文字或行内内容。 |

### 4.3 Events

未禁用时根节点为 `a`，可监听 `@click`、`@focus` 等原生事件；组件没有额外定义自定义事件。
