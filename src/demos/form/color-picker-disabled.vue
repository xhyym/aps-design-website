<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" disabled aria-label="禁用颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
