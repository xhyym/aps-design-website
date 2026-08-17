<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(50);
</script>

<template>
  <AppSplitter v-model="ratio" :step="5">
    <template #first><div class="pane">聚焦分隔条，用方向键调整</div></template>
    <template #second><div class="pane">每次 5%</div></template>
  </AppSplitter>
</template>

<style scoped>
.pane { height: 140px; display: flex; align-items: center; justify-content: center; }
</style>
