<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect, type TreeOption, type TreeSelectLoadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const rootOptions: TreeOption[] = [{ label: "组织根", value: "root" }];

const loadData: TreeSelectLoadRequest = async ({ option, signal }) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (signal.aborted) return [];
  if (option.value === "root") {
    return [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }];
  }
  return [];
};
</script>

<template>
  <div class="demo-field">
    <AppTreeSelect v-model="value" :options="rootOptions" lazy :load-data="loadData" clearable placeholder="展开节点时加载子级" aria-label="组织架构" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 380px); }
</style>
