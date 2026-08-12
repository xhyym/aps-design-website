<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const enabled = ref(true);
</script>

<template>
  <div class="demo-stack">
    <AppCheckbox v-model="enabled" disabled label="不可更改的开关" />
    <AppCheckbox v-model="enabled" label="可操作的开关" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 8px; }
</style>
