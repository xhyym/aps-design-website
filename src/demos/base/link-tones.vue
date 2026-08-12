<script setup lang="ts">
import { AppLink } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>
    <AppLink to="/primary" tone="primary">主要链接</AppLink>
    <AppLink to="/default" tone="default">默认链接</AppLink>
    <AppLink to="/muted" tone="muted">弱化链接</AppLink>
  </p>
</template>
