<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const confirmed = ref("尚未确认");
</script>

<template>
  <div class="demo-stack">
    <AppTimePanel v-model="value" :show-footer="true" @confirm="(val: string) => (confirmed = `已确认：${val}`)" aria-label="时间面板" />
    <span>{{ confirmed }}</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; }
</style>
