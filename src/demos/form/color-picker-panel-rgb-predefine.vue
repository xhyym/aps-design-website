<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" format="rgb" :predefine="['#0071e3', '#1d1d1f', '#f5f5f7']" aria-label="RGB 预定义面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
