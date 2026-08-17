<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(40);
</script>

<template>
  <AppSplitter v-model="ratio" :min="30" :max="70">
    <template #first><div class="pane">第一面板（30% - 70%）</div></template>
    <template #second><div class="pane">第二面板</div></template>
  </AppSplitter>
</template>

<style scoped>
.pane { height: 160px; display: flex; align-items: center; justify-content: center; }
</style>
