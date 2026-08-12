<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const risk = ref(64);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="risk" :min="0" :max="100" :step="1" ariaLabel="账户安全风险阈值" :ariaValueText="`当前风险 ${risk} 分`" />
    <p class="demo-hint">读屏将播报：账户安全风险阈值，当前风险 {{ risk }} 分</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
.demo-hint { margin: 8px 0 0; color: #6b7280; font-size: 13px; }
</style>
