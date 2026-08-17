<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-fullscreen />
</template>
