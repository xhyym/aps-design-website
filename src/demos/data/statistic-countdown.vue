<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 4 * 60 * 60 * 1000;
</script>

<template><AppStatistic title="限时优惠结束" :value="0" :countdown-at="deadline" countdown-format="HH:mm:ss" status="活动价即将结束" tone="warning" /></template>
