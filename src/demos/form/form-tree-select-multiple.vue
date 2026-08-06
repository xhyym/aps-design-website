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
