<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const a = ref(false);
const b = ref(false);
const c = ref(false);
</script>

<template>
  <div class="demo-stack">
    <AppCheckbox v-model="a" size="small" label="紧凑尺寸" />
    <AppCheckbox v-model="b" size="default" label="默认尺寸" />
    <AppCheckbox v-model="c" size="large" label="宽松尺寸" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 8px; }
</style>
