<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const brightness = ref(60);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="brightness" :min="0" :max="100" :step="5" show-input label="亮度" aria-label="亮度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
