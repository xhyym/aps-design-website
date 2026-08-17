<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "创建活动", description: "新建营销活动并配置规则", path: "/campaign/new", icon: "plus" as const },
  { title: "活动列表", description: "查看进行中与历史活动", path: "/campaign/list", icon: "columns" as const },
];
</script>

<template>
  <div>
    <p class="hint">说明文字帮助用户区分相似入口。</p>
    <AppButton @click="visible = true">打开全局搜索</AppButton>
    <AppGlobalSearch v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
