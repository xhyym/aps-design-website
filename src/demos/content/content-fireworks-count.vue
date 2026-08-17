<script setup lang="ts">
import { AppFireworksEffect } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="stage">
    <AppFireworksEffect :show="true" :count="60" />
  </div>
</template>

<style scoped>
.stage { height: 200px; border-radius: 8px; background: linear-gradient(180deg, #101a3a, #1b2a5e); }
</style>
