<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" :predefine="['#0071e3', '#34c759', '#ff3b30']" aria-label="预定义颜色面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
