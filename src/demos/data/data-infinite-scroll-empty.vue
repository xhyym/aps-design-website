<script setup lang="ts">
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: string[] = [];
</script>

<template><AppInfiniteScroll :items="items" finished empty-text="当前筛选条件下没有动态" /></template>
