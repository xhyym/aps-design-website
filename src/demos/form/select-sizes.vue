<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const size = ref("");
const options = [
  { label: "紧凑", value: "small" },
  { label: "默认", value: "default" },
  { label: "宽松", value: "large" },
];
</script>

<template>
  <div class="demo-stack">
    <AppSelect v-model="size" :options="options" size="small" placeholder="紧凑尺寸" aria-label="尺寸示例" />
    <AppSelect v-model="size" :options="options" size="default" placeholder="默认尺寸" aria-label="尺寸示例" />
    <AppSelect v-model="size" :options="options" size="large" placeholder="宽松尺寸" aria-label="尺寸示例" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 10px; width: min(100%, 360px); }
</style>
