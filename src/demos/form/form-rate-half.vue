<script setup lang="ts">
import { ref } from "vue";
import { AppRate } from "aps-design-pro";
import "aps-design-pro/style.css";

const score = ref(4.5);
</script>

<template>
  <AppRate v-model="score" allow-half clearable show-text :texts="['很差', '较差', '一般', '满意', '很满意']" aria-label="服务评价" />
</template>
