<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ["需求已确认", "视觉稿已通过", "开发中", "等待测试", "准备发布", "上线后复盘"];
</script>

<template>
  <AppContainerMain scrollable class="demo-main">
    <p v-for="item in items" :key="item">{{ item }}</p>
  </AppContainerMain>
</template>

<style scoped>
.demo-main { width: min(100%, 480px); height: 118px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
.demo-main p { margin: 0 0 12px; }
</style>
