<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
const refreshing = ref(false);
const onRefresh = async () => {
  refreshing.value = true;
  await new Promise((r) => setTimeout(r, 1000));
  refreshing.value = false;
};
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-refresh :refresh-disabled="refreshing" @refresh="onRefresh" />
</template>
