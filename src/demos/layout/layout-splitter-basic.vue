<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(40);
</script>

<template>
  <AppSplitter v-model="ratio" :min="25" :max="70" class="demo-splitter">
    <template #first><strong>文件目录</strong><p>当前占比：{{ ratio }}%</p></template>
    <template #second><strong>编辑区域</strong><p>拖动中间分隔条调整宽度。</p></template>
  </AppSplitter>
</template>

<style scoped>
.demo-splitter { width: min(100%, 600px); }
.demo-splitter p { color: var(--aps-muted); font-size: 13px; }
</style>
