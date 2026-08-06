<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 3 * 24 * 60 * 60 * 1000;
</script>

<template><AppCountdown :value="deadline" format="DD 天 HH:mm" suffix=" 后恢复原价" /></template>
