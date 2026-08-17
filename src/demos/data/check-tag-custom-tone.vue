<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref(true);
</script>

<template>
  <div class="row">
    <AppCheckTag v-model="active" label="绿色选中" tone="green" />
    <AppCheckTag v-model="active" label="橙色选中" tone="orange" />
    <AppCheckTag v-model="active" label="红色选中" tone="red" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
