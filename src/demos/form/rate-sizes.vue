<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref(3);
const medium = ref(3);
const large = ref(3);
</script>

<template>
  <div class="rate-demo-stack">
    <AppRate v-model="small" size="small" show-score aria-label="小尺寸评分" />
    <AppRate v-model="medium" show-score aria-label="默认尺寸评分" />
    <AppRate v-model="large" size="large" show-score aria-label="大尺寸评分" />
  </div>
</template>

<style scoped>
.rate-demo-stack {
  display: grid;
  gap: 12px;
}
</style>
