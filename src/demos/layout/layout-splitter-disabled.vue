<script setup lang="ts">
import { ref } from "vue";
import { AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(40);
</script>

<template>
  <AppSplitter v-model="ratio" disabled>
    <template #first><div class="pane">不可拖动的面板</div></template>
    <template #second><div class="pane">第二面板</div></template>
  </AppSplitter>
</template>

<style scoped>
.pane { height: 140px; display: flex; align-items: center; justify-content: center; }
</style>
