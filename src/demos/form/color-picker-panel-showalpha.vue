<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" show-alpha aria-label="带透明度面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
