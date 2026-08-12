<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("只读的搜索词");
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" disabled aria-label="禁用搜索框" />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
