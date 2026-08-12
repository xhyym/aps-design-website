<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const beta = ref(false);
</script>

<template>
  <AppCheckbox
    v-model="beta"
    label="加入体验计划"
    description="抢先体验未稳定的新功能，可能会影响正常使用"
  />
</template>
