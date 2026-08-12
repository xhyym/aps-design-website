<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(7);
</script>

<template>
  <AppRate v-model="score" :max="10" show-score aria-label="十分制评分" />
</template>
