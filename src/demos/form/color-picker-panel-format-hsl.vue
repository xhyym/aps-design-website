<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("hsl(210, 100%, 46%)");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" format="hsl" aria-label="HSL 格式面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
