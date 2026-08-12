<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const a = ref(30);
const b = ref(70);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="a" size="small" ariaLabel="紧凑尺寸" />
    <AppRangeControl v-model="b" size="default" ariaLabel="默认尺寸" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); display: flex; flex-direction: column; gap: 16px; }
</style>
