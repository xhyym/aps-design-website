---
title: 图片裁剪
component: AppImageCropper
category: content
source: packages/ui/src/components/content/AppImageCropper.vue
---

# 图片裁剪（AppImageCropper）

`AppImageCropper` 允许用户选择图片、拖动定位、缩放旋转，并把裁剪结果通过事件交给业务层。

## 1. 用处

- 创建头像、课程封面或横向宣传图时，统一最终图片比例。
- 组件只生成 `Blob` 与 data URL；上传、存储和权限校验由接收 `crop` 事件的页面完成。
- 需要限制图片体积或格式时，应同时在业务上传接口校验，不能只依赖前端。

## 2. 代码演示

### 2.1 裁剪正方形头像

```vue demo:content-image-cropper-basic title="头像裁剪"
<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const image = ref("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80");
</script>

<template><AppImageCropper v-model="image" aspect="1 / 1" @crop="(result) => console.info('头像裁剪完成：', result.width, result.height)" /></template>
```

### 2.2 固定横向封面并禁用旋转

```vue demo:content-image-cropper-cover title="横向封面"
<script setup lang="ts">
import { ref } from "vue";
import { AppImageCropper } from "aps-design-pro";
import "aps-design-pro/style.css";

const image = ref("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80");
</script>

<template><AppImageCropper v-model="image" aspect="16 / 7" output-type="image/webp" :output-width="1600" :allow-rotate="false" /></template>
```

## 3. API 使用方式

外部传入 `modelValue` 时会作为当前图片 URL 使用；用户重新选择或移除图片时会触发对应的受控更新。`crop` 中的 `dataUrl` 适合立即预览，`blob` 适合交给 `FormData` 上传。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前图片地址。 | `string` | `""` |
| `aspect` | 裁剪区域宽高比 CSS 值。 | `string` | `"1 / 1"` |
| `disabled` | 是否禁用选择、拖动与导出。 | `boolean` | `false` |
| `outputType` | 导出图片格式。 | `"image/png" \| "image/jpeg" \| "image/webp"` | `"image/jpeg"` |
| `outputQuality` | 有损格式导出质量。 | `number` | `0.9` |
| `outputWidth` | 导出图宽度，最大 2400px。 | `number` | `1200` |
| `allowRotate` | 是否显示旋转控制。 | `boolean` | `true` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 选择或清空图片时触发。 | `(value: string)` |
| `change` | 选择新图片后触发。 | `(value: string)` |
| `clear` | 移除当前图片后触发。 | `()` |
| `crop` | 点击导出并生成裁剪结果。 | `(result: CropResult)` |
| `error` | 图片读取或导出失败。 | `(message: string)` |

`CropResult` 包含 `blob`、`dataUrl`、`width` 和 `height`。
