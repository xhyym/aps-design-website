<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const progress = ref(30);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="progress" :min="0" :max="100" :step="10" show-value label="进度（步长 10）" aria-label="进度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
