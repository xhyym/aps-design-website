---
title: 上传
component: AppUpload
category: content
source: packages/ui/src/components/content/AppUpload.vue
---

# 上传（AppUpload）

`AppUpload` 负责本地选择、队列状态、进度、失败重试与可选分片流程，实际文件传输由业务层注入。

## 1. 用处

- 上传交付文档、图片封面或需要继续传输的大文件。
- 必须提供 `request` 或 `chunkService` 才能真正上传；组件不会假设任何后端地址。
- 前端 `accept`、体积和数量限制只改善体验，服务端仍必须再次校验文件类型、大小和权限。

## 2. 代码演示

### 2.1 文档上传请求

```vue demo:content-upload-basic title="文档上传"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ file, onProgress }) => {
  onProgress(30);
  await new Promise<void>((resolve) => window.setTimeout(resolve, 220));
  onProgress(100);
  return { url: `https://example.com/files/${encodeURIComponent(file.name)}` };
};
</script>

<template><AppUpload v-model="files" accept=".pdf,.doc,.docx" :request="request" upload-text="上传交付文档" /></template>
```

### 2.2 图片卡片列表

```vue demo:content-upload-picture title="图片卡片列表"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ file, onProgress }) => {
  onProgress(60);
  await new Promise<void>((resolve) => window.setTimeout(resolve, 180));
  onProgress(100);
  return { url: `https://example.com/images/${encodeURIComponent(file.name)}` };
};
</script>

<template><AppUpload v-model="files" accept="image/*" list-type="picture-card" :limit="4" :request="request" upload-text="上传封面" /></template>
```


### 2.3 拖拽上传

```vue demo:content-upload-drag title="拖拽上传"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppUpload v-model="files" drag />
</template>
```

### 2.4 数量限制

```vue demo:content-upload-limit title="数量限制"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppUpload v-model="files" :limit="3" />
</template>
```

### 2.5 类型限制

```vue demo:content-upload-accept title="类型限制"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppUpload v-model="files" accept=".png,.jpg,.jpeg" upload-text="选择图片" />
</template>
```

### 2.6 禁用状态

```vue demo:content-upload-disabled title="禁用状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppUpload v-model="files" disabled />
</template>
```

### 2.7 上传前校验

```vue demo:content-upload-before title="上传前校验"
<script setup lang="ts">
import { ref } from "vue";
import { AppUpload, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const beforeUpload = (file: File) => {
  if (file.size > 1024 * 1024) {
    console.warn("文件不能超过 1MB");
    return false;
  }
  return true;
};
</script>

<template>
  <AppUpload v-model="files" :before-upload="beforeUpload" upload-text="上传（限 1MB）" />
</template>
```
## 3. API 使用方式

`v-model` 保存 `UploadFileItem[]`，页面应把服务端返回 URL 回写进数组。小文件传 `request`；需要断点续传时传 `chunkService`，可用 `fileKey` 保证同一文件恢复同一会话。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 上传文件队列。 | `UploadFileItem[]` | — |
| `accept` | 接受的 MIME 或扩展名列表。 | `string` | `""` |
| `multiple` | 是否允许一次选择多个文件。 | `boolean` | `true` |
| `maxSize` | 单文件最大字节数。 | `number` | `10 * 1024 * 1024` |
| `limit` | 队列最大数量。 | `number` | `20` |
| `disabled` | 是否禁用选择和上传。 | `boolean` | `false` |
| `drag` | 是否启用拖拽选择区域。 | `boolean` | `true` |
| `autoUpload` | 选择文件后是否立即上传。 | `boolean` | `true` |
| `listType` | 文件列表展示形式。 | `"text" \| "picture" \| "picture-card"` | `"text"` |
| `showFileList` | 是否显示上传队列。 | `boolean` | `true` |
| `uploadText` | 选择区文案。 | `string` | `"选择文件"` |
| `request` | 单文件上传服务。 | `UploadRequest` | `undefined` |
| `chunkService` | 分片上传服务。 | `UploadChunkService` | `undefined` |
| `chunkSize` | 分片大小，最小 256KB。 | `number` | `5 * 1024 * 1024` |
| `chunkConcurrency` | 分片并发数，范围 1–6。 | `number` | `3` |
| `fileKey` | 计算文件指纹的方法。 | `UploadFileKey` | `undefined` |
| `beforeUpload` | 文件入队前的同步或异步校验。 | `UploadBeforeUpload` | `undefined` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 队列变化。 | `(value: UploadFileItem[])` |
| `change` | 文件入队或状态更新。 | `(file, files)` |
| `remove` / `exceed` | 删除文件或超过限制。 | `(file)` / `(files: File[])` |
| `retry` / `cancel` / `resume` | 用户请求重试、取消或恢复。 | `(file)` |
| `success` / `error` | 上传成功或失败。 | `(file, files)` / `(file, message)` |
| `preview` | 点击可预览文件。 | `(file)` |

组件实例还暴露 `add(files)`、`submit()`、`abort(uid?)`。
