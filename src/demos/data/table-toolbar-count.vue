<script setup lang="ts">
import { AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTableToolbar :selected-count="5">
    <template #bulk>
      <span>已选 5 项</span>
    </template>
  </AppTableToolbar>
</template>
