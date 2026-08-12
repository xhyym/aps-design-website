<script setup lang="ts">
import { ref } from "vue";
import { AppSlider } from "aps-design-pro";
import "aps-design-pro/style.css";

const volume = ref(40);
</script>

<template>
  <div class="demo-field">
    <AppSlider v-model="volume" disabled label="音量" show-value aria-label="禁用音量" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 440px); }
</style>
