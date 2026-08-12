<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(75);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="score" label="综合评分" show-value aria-label="综合评分" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
