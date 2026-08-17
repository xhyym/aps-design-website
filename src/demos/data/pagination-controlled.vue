<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(2);
const pageSize = ref(10);
const log = ref("");
</script>

<template>
  <div>
    <AppPagination v-model:page="page" v-model:page-size="pageSize" :total="200" @update:page="(v: number) => (log = '跳转到第 ' + v + ' 页')" />
    <p class="hint">{{ log || "当前第 " + page + " 页" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
