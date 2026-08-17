<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
const onPrint = () => {
  window.print();
};
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-print show-fullscreen @print="onPrint" />
</template>
