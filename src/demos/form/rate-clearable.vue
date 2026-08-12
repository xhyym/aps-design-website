<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(3);
</script>

<template>
  <AppRate v-model="score" clearable show-score aria-label="可清空评分" />
</template>
