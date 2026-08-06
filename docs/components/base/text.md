---
title: 文本
component: AppText
category: base
source: packages/ui/src/components/base/AppText.vue
---

# 文本（AppText）

`AppText` 用于统一业务页面中的文字语义、字号、字重与截断策略。它不负责容器间距或标题层级；布局间隔由父容器决定，真正的页面标题仍应使用合适的原生语义标签。

## 1. 用处

`AppText` 用于统一业务页面中的字号、字重、语义色和文本截断策略。它不负责标题层级与区域间距：页面标题仍应使用合适的原生语义标签，布局由父容器控制。

## 2. 代码演示

### 2.1 语义色与文字载体

```vue demo:text-semantics title="语义文字"
<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>
    <AppText tag="strong" weight="semibold">课程审核已通过</AppText>
    <AppText type="info" size="small"> · 更新于 10:24</AppText>
  </p>
</template>
```

`tag` 决定渲染元素，默认为 `span`。`type` 用于辅助业务理解，例如成功、警告与危险状态；不要只依赖颜色传递关键错误信息，附近仍应有文字说明。

### 2.2 单行与多行截断

```vue demo:text-truncate title="长文本截断"
<script setup lang="ts">
import { AppText } from "aps-design-pro";

const courseDescription = "本课程覆盖 Vue 3 工程化、状态管理、权限模型和大型项目协作流程。";
</script>

<template>
  <div class="course-description">
    <AppText :truncated="true" :title="courseDescription">
      {{ courseDescription }}
    </AppText>
  </div>

  <AppText :line-clamp="2" :title="courseDescription">
    {{ courseDescription }}
  </AppText>
</template>

<style scoped>
.course-description {
  max-width: 240px;
}
</style>
```

`truncated` 是单行省略，必须由父容器或自身宽度约束才能生效；`lineClamp` 大于 `0` 时启用多行截断并优先于 `truncated`。长文本建议同步传入 `title`，让鼠标用户可查看完整内容；涉及关键数据时应提供可展开的详情，不应只依赖悬浮提示。

> 单行省略依赖宽度约束。示例用 CSS 类限定宽度；生产页面同样应使用项目的 CSS 类控制布局。

## 3. API 使用方式

使用 `tag` 选择合适的文本载体，`type` 只补充视觉语义，关键状态仍要有文字说明。需要截断时给外层提供稳定宽度；单行使用 `truncated`，多行使用 `lineClamp`，并在必要时提供查看完整内容的入口。

```vue
<AppText tag="p" type="info" size="small" :line-clamp="2" :title="description">
  {{ description }}
</AppText>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tag` | 渲染的文本元素。 | `"span" \| "p" \| "div" \| "strong" \| "em"` | `"span"` |
| `type` | 文本语义色。 | `"default" \| "primary" \| "success" \| "warning" \| "info" \| "danger"` | `"default"` |
| `size` | 文字尺寸；未传时继承 `AppConfigProvider`。 | `"small" \| "default" \| "large"` | 继承全局配置 |
| `weight` | 字重。 | `"regular" \| "medium" \| "semibold"` | `"regular"` |
| `italic` | 是否使用斜体。 | `boolean` | `false` |
| `truncated` | 是否使用单行省略；`lineClamp > 0` 时不生效。 | `boolean` | `false` |
| `lineClamp` | 最大显示行数；内部会取不小于 `0` 的整数。 | `number` | `0` |
| `title` | 写入原生 `title` 属性的完整文本。 | `string` | `""` |
| `ariaLabel` | 覆盖文本节点的辅助名称。 | `string` | `""` |

### 4.2 Slots

| 项目 | 说明 |
| --- | --- |
| `default` 插槽 | 需要排版的文字或行内内容。 |

### 4.3 Events

`AppText` 没有自定义事件；可按其实际 `tag` 使用原生事件。
