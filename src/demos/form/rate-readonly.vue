<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4.5);
</script>

<template>
  <AppRate v-model="score" readonly allow-half show-score aria-label="只读评分" />
</template>
