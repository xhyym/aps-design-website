<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const searchStatus = ref("等待搜索");

function searchCourses(value: string): void {
  searchStatus.value = value ? `正在搜索“${value}”` : "请输入搜索关键词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" placeholder="搜索课程、讲师或专题" @search="searchCourses" />
    <span>{{ searchStatus }}</span>
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
