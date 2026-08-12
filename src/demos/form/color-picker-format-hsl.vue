<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("hsl(210, 100%, 46%)");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" format="hsl" aria-label="HSL 格式颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
