<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const level = ref(2);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="level" :min="1" :max="4" :step="1" show-input :marks="[{ value: 1, label: '初级' }, { value: 2, label: '中级' }, { value: 3, label: '高级' }, { value: 4, label: '专家' }]" aria-label="课程难度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
