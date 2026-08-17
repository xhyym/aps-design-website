<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCountTo :value="98.76" :decimals="2" suffix="%" />
</template>
