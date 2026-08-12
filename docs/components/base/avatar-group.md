---
title: 头像组
component: AppAvatarGroup
category: base
source: packages/ui/src/components/base/AppAvatarGroup.vue
---

# 头像组（AppAvatarGroup）

`AppAvatarGroup` 处理成员头像的重叠排列和溢出计数。页面只提供成员数据，不必计算“显示前几人”或手动拼接 `+N`。

## 1. 用处

- 在成员列表、协作头像、审批参与人等横向区域展示一组头像。
- 由组件统一处理头像重叠、最多显示数量和剩余成员计数，业务层只需维护成员数组。
- 当头像需要附带姓名、状态或菜单时，用 `item` 插槽接管单项渲染。

## 2. 代码演示

### 2.1 成员数据与最小用法

```vue demo:avatar-group-basic title="评审成员"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const reviewers: AvatarGroupItem[] = [
  { key: "lin", name: "林知远", src: "https://example.com/avatars/lin.jpg" },
  { key: "chen", name: "陈雨晨", initials: "陈" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
];
</script>

<template>
  <AppAvatarGroup :items="reviewers" :max="3" aria-label="本次评审成员" />
</template>
```

前三位成员使用 `AppAvatar` 的同一套图片与文字回退策略，剩余成员自动显示为 `+1`。`max="0"` 表示不限制显示数量。

### 2.2 需要业务卡片时，接管单项渲染

头像组的重点是排列，不限制每一项必须是头像。通过 `item` 插槽可以替换单项内容，同时保留溢出统计：

```vue demo:avatar-group-slot title="自定义成员"
<script setup lang="ts">
import { AppAvatar, AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";

const reviewers: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨", initials: "陈" },
];
</script>

<template>
  <AppAvatarGroup :items="reviewers" :max="2" shape="square">
    <template #item="{ item }">
      <AppAvatar
        :src="item.src"
        :name="item.name"
        :initials="item.initials"
        shape="square"
      />
    </template>
  </AppAvatarGroup>
</template>
```

插槽接管后，业务侧应自行确保内容可辨识；`item` 槽仅接收当前成员对象。

### 2.3 尺寸

`size` 统一控制组内每个头像的尺寸，适合在工具条、卡片等不同密度区域复用同一组数据。

```vue demo:avatar-group-sizes title="成员组尺寸"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
];
</script>

<template>
  <div class="avatar-group-sizes">
    <AppAvatarGroup :items="members" size="small" aria-label="小尺寸成员组" />
    <AppAvatarGroup :items="members" size="large" aria-label="大尺寸成员组" />
  </div>
</template>

<style scoped>
.avatar-group-sizes {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
```

### 2.4 形状

`shape` 同时作用于头像与溢出计数，统一整组的视觉语言。

```vue demo:avatar-group-shapes title="成员组形状"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
];
</script>

<template>
  <AppAvatarGroup :items="members" shape="square" aria-label="方形成员组" />
</template>
```

### 2.5 重叠间距

`overlap` 控制相邻头像的重叠像素，越小时头像越紧凑。负数会按 `0` 处理。

```vue demo:avatar-group-overlap title="重叠间距"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
  { key: "qian", name: "钱多多" },
];
</script>

<template>
  <div class="avatar-group-overlap">
    <AppAvatarGroup :items="members" :overlap="4" aria-label="紧凑重叠" />
    <AppAvatarGroup :items="members" :overlap="14" aria-label="宽松重叠" />
  </div>
</template>

<style scoped>
.avatar-group-overlap {
  display: flex;
  align-items: center;
  gap: 28px;
}
</style>
```

### 2.6 最大展示数量

`max` 控制首屏展示人数，超过部分自动折叠为 `+N`。`max="0"` 表示展示全部成员。

```vue demo:avatar-group-max title="最大展示数量"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
  { key: "qian", name: "钱多多" },
];
</script>

<template>
  <div class="avatar-group-max">
    <AppAvatarGroup :items="members" :max="3" aria-label="最多展示 3 人" />
    <AppAvatarGroup :items="members" :max="0" aria-label="展示全部成员" />
  </div>
</template>

<style scoped>
.avatar-group-max {
  display: flex;
  align-items: center;
  gap: 28px;
}
</style>
```

### 2.7 自定义溢出文案

`moreLabel` 接收剩余人数并返回辅助说明，用于弱化“+N”的机械感，让读屏用户得到更友好的语义。

```vue demo:avatar-group-custom-more title="自定义溢出文案"
<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
  { key: "qian", name: "钱多多" },
  { key: "sun", name: "孙岚" },
];

function buildMoreLabel(count: number): string {
  return `还有 ${count} 位协作者未显示`;
}
</script>

<template>
  <AppAvatarGroup :items="members" :max="3" :more-label="buildMoreLabel" aria-label="项目协作者" />
</template>
```

## 3. API 使用方式

先准备带稳定 `key` 的成员数组，再把数组传给 `items`。`max` 控制首屏展示数量；超过数量的成员由组件生成溢出计数。需要自定义成员内容时，只替换 `item` 插槽，不要在业务层重新计算重叠位置。

```vue
<AppAvatarGroup :items="reviewers" :max="4" size="small" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 成员数组，每项必须有稳定的 `key`。 | `AvatarGroupItem[]` | — |
| `max` | 最多展示的成员数；`0` 表示展示全部，负数会按 `0` 处理。 | `number` | `0` |
| `size` | 每个头像的尺寸。 | `AvatarSize` | `"default"` |
| `shape` | 头像与溢出计数的形状。 | `"circle" \| "square"` | `"circle"` |
| `overlap` | 相邻头像的重叠像素；负数会按 `0` 处理。 | `number` | `10` |
| `ariaLabel` | 整个成员列表的辅助说明。 | `string` | `"用户头像组"` |
| `moreLabel` | 生成溢出成员辅助说明的函数。 | `(count: number) => string` | `count => \`还有 ${count} 位成员\`` |

### 4.2 `AvatarGroupItem`

| 字段 | 说明 |
| --- | --- |
| `key` | 必填，列表渲染的稳定唯一标识。 |
| `src`、`srcSet`、`sizes`、`alt` | 直接传递给单个头像的图片字段。 |
| `name`、`initials`、`icon`、`fit` | 直接传递给单个头像的回退和填充字段。 |

### 4.3 Slots

| 插槽 | 作用域 | 说明 |
| --- | --- | --- |
| `item` | `{ item: AvatarGroupItem }` | 自定义单个可见成员的内容。 |

### 4.4 Events

组件不提供自定义事件；成员点击应由 `item` 插槽内的业务元素处理。
