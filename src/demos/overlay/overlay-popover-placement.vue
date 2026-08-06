<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopover v-model="visible" label="筛选帮助" placement="right-start" :offset="12">
    <template #trigger="{ toggle }"><AppButton @click="toggle">筛选规则</AppButton></template>
    <template #default>多个筛选条件会按“同时满足”组合。</template>
  </AppPopover>
</template>
