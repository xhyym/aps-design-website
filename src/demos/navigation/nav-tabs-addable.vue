<script setup lang="ts">
import { ref } from "vue";
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref([
  { key: "a", label: "页签一" },
  { key: "b", label: "页签二" },
]);
let seq = 2;
</script>

<template>
  <AppTabs :items="items" :addable="true" model-value="a" @tab-add="() => (items = [...items, { key: 'n' + (++seq), label: '新页签' }])" />
</template>
