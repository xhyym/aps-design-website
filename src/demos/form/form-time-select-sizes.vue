<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppTimeSelect v-model="small" size="small" clearable placeholder="小型" aria-label="小型时间" />
    <AppTimeSelect v-model="medium" size="default" clearable placeholder="默认" aria-label="默认时间" />
    <AppTimeSelect v-model="large" size="large" clearable placeholder="大型" aria-label="大型时间" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 200px); }
</style>
