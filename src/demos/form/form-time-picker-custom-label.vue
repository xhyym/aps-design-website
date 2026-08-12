<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" placeholder="请选择开播时间" aria-label="课程开播时间" clearable /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
