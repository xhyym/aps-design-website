# 快速开始

APS Design Pro 是一套面向 Vue 3 管理后台的组件库。本页带你在几分钟内完成安装、引入，并跑通第一个组件。

## 环境要求

- Vue 3（Composition API）
- 包管理器 pnpm / npm / yarn 均可
- 构建工具 Vite 或其他支持 ESM 的打包器

组件仅依赖 Vue 运行时，不强制引入第三方 UI 运行时。

## 安装

```bash
pnpm add aps-design-pro
```

使用 npm 时：

```bash
npm install aps-design-pro
```

## 引入样式与组件

在应用入口（或任意业务模块）引入一次全局样式，再按需导入组件：

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { AppButton, AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const app = createApp(App);
app.component("AppButton", AppButton);
app.component("AppIcon", AppIcon);
app.mount("#app");
```

样式只需引入一次。`aps-design-pro/style.css` 内部定义了全部设计令牌（`--aps-*`），主题与暗色模式都基于这些变量，详见[主题与令牌](/guide/theming)。

## 第一个组件

在模板中直接使用已注册的组件：

```vue
<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <AppButton type="primary" @click="count += 1">
    点击了 {{ count }} 次
  </AppButton>
</template>
```

组件只负责展示与交互；业务数据、接口契约与路由仍由你的应用管理，详见[组件架构](/guide/architecture)。

## 下一步

- 浏览[组件目录](/components)，按能力域挑选需要的组件。
- 阅读[主题与令牌](/guide/theming)，统一项目的视觉风格。
- 需要多语言时，参考[国际化](/guide/i18n)。
