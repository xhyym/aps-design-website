<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("rgba(0, 113, 227, 0.5)");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" show-alpha format="hex" aria-label="透明 HEX 面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
