<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const opacity = ref(50);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="opacity" :min="0" :max="100" :step="10" ariaLabel="背景不透明度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
