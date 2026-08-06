<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 2 * 60 * 60 * 1000;
</script>

<template><AppCountdown :value="deadline" prefix="活动结束还有" /></template>
