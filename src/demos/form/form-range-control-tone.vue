<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const risk = ref(72);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="risk" :min="0" :max="100" :step="5" tone="inverse" size="small" ariaLabel="风险阈值" :ariaValueText="`${risk}%`" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
