<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const end = new Date(Date.now() + 1000 * 60 * 5).toISOString();
</script>

<template>
  <AppCountdown :value="end" format="HH:mm:ss" prefix="活动剩余 " suffix=" 后结束" />
</template>
