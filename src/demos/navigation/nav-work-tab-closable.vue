<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref([
  { key: "a", label: "订单", closable: true },
  { key: "b", label: "退款", closable: true },
]);
</script>

<template>
  <AppWorkTab :items="items" model-value="a" @close="(key: string) => (items = items.filter((t) => t.key !== key))" />
</template>
