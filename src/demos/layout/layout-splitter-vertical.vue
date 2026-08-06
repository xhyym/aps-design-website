<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(55);
</script>

<template>
  <AppSplitter v-model="ratio" direction="vertical" :step="5" class="demo-splitter">
    <template #first>预览区</template>
    <template #second>日志区：可使用方向键微调分隔位置。</template>
  </AppSplitter>
</template>

<style scoped>
.demo-splitter { width: min(100%, 480px); height: 260px; }
</style>
