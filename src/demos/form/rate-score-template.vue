<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4);
</script>

<template>
  <AppRate v-model="score" :max="5" show-score score-template="{value} / 5 星" aria-label="自定义分数模板" />
</template>
