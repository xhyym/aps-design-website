<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(50);
const collapsed = ref(false);
</script>

<template>
  <AppSplitter v-model="ratio" v-model:collapsed="collapsed" collapsible>
    <template #first><div class="pane">可收起的第一面板</div></template>
    <template #second><div class="pane">第二面板</div></template>
  </AppSplitter>
</template>

<style scoped>
.pane { height: 160px; display: flex; align-items: center; justify-content: center; }
</style>
