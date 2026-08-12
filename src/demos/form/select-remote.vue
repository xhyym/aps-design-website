<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const course = ref("");
const remoteOptions = ref<{ label: string; value: string }[]>([]);

async function searchCourses(keyword: string): Promise<{ label: string; value: string }[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
    { label: `${keyword} 入门`, value: `${keyword}-basic` },
    { label: `${keyword} 进阶`, value: `${keyword}-pro` },
  ];
}
</script>

<template>
  <div class="demo-field">
    <AppSelect
      v-model="course"
      :options="remoteOptions"
      remote
      filterable
      :remote-method="searchCourses"
      placeholder="搜索课程名称"
      aria-label="课程"
    />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
