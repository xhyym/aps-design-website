<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("等待搜索");

function search(value: string): void {
  status.value = value ? `搜索：“${value}”` : "请输入关键词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :show-suggestions="false"
      placeholder="仅提交关键词，不展示建议"
      @search="search"
      aria-label="无建议搜索框"
    />
    <span>{{ status }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
