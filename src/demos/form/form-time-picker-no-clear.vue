<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("20:00");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" :clearable="false" aria-label="固定时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
