<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const status = ref("");
const options = [
  { label: "草稿", value: "draft" },
  { label: "已发布", value: "published" },
  { label: "已下架", value: "offline", disabled: true },
];
</script>

<template>
  <div class="demo-stack">
    <AppSelect v-model="status" :options="options" placeholder="禁用整个选择器" disabled aria-label="状态" />
    <AppSelect v-model="status" :options="options" placeholder="字段校验未通过" invalid aria-label="状态" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 10px; width: min(100%, 360px); }
</style>
