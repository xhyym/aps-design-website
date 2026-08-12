<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" min="13:00" clearable placeholder="下午时段起" aria-label="下午时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
