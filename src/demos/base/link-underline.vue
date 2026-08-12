<script setup lang="ts">
import { AppLink } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>
    <AppLink to="/always" underline="always">始终带下划线</AppLink>
    <AppLink to="/hover" underline="hover">悬停显示下划线</AppLink>
    <AppLink to="/none" underline="none">不显示下划线</AppLink>
  </p>
</template>
