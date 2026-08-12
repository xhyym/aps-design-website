<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("等待操作");

function onClear(): void {
  status.value = "已清空搜索词";
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" placeholder="点击清空按钮试试" @clear="onClear" aria-label="可清空搜索框" />
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
