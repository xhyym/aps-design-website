<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { label: "进行中", value: "active", description: "正在学习或制作" },
  { label: "已完成", value: "completed", description: "已归档" },
  { label: "已暂停", value: "paused", description: "暂不显示" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="value" :options="options" clearable placeholder="选择课程状态" aria-label="课程状态" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
