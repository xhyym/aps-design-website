<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref(40);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="value" :min="0" :max="100" disabled ariaLabel="禁用范围" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
