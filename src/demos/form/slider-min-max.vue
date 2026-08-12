<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const threshold = ref(50);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="threshold" :min="20" :max="80" show-value label="阈值区间 20–80" aria-label="阈值" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
