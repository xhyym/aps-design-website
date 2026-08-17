<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSplitter } from "aps-design-pro";
import "aps-design-pro/style.css";

const ratio = ref(50);
</script>

<template>
  <div>
    <div class="bar">
      <AppButton size="small" @click="ratio = 30">30%</AppButton>
      <AppButton size="small" @click="ratio = 50">50%</AppButton>
      <AppButton size="small" @click="ratio = 70">70%</AppButton>
    </div>
    <AppSplitter v-model="ratio">
      <template #first><div class="pane">第一面板 {{ ratio }}%</div></template>
      <template #second><div class="pane">第二面板</div></template>
    </AppSplitter>
  </div>
</template>

<style scoped>
.bar { display: flex; gap: 8px; margin-bottom: 10px; }
.pane { height: 140px; display: flex; align-items: center; justify-content: center; }
</style>
