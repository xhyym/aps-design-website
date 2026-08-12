<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4);
</script>

<template>
  <AppRate v-model="score" disabled show-score aria-label="禁用评分" />
</template>
