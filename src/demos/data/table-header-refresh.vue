<script setup lang="ts">
import { ref } from "vue";
import { AppTableHeader } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ id: true });
const loading = ref(false);
const onRefresh = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 1200));
  loading.value = false;
};
</script>

<template>
  <AppTableHeader v-model="visible" title="实时报表" :loading="loading" :column-options="[]" @refresh="onRefresh" />
</template>
