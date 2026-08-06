<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeletonItem variant="circle" width="44px" height="44px" />
  <AppSkeletonItem variant="image" width="120px" height="68px" :animated="false" />
</template>
