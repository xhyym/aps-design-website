<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const volume = ref(48);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="volume" ariaLabel="播放音量" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
