<script setup lang="ts">
import { ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const filterOpen = ref(true);
</script>

<template>
  <AppIconButton
    icon="filter"
    label="筛选交易订单"
    variant="secondary"
    :active="filterOpen"
    @click="filterOpen = !filterOpen"
  />
</template>
