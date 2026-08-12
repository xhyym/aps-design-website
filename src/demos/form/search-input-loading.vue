<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions: SearchSuggestion[] = [
  { key: "a", label: "进行中的请求会保留建议面板", value: "a", description: "提示" },
  { key: "b", label: "适合配合远程搜索展示等待状态", value: "b", description: "提示" },
];
const loading = ref(true);
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      :loading="loading"
      placeholder="加载中（建议面板保持展开）"
      aria-label="加载态搜索框"
    />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
