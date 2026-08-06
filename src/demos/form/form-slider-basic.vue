<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const progress = ref(32);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="progress" label="课程进度" show-value aria-label="课程进度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
