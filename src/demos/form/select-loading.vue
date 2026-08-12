<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const member = ref("");
const options = [
  { label: "张讲师", value: "u1" },
  { label: "李助教", value: "u2" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="member" :options="options" loading placeholder="正在加载成员列表" aria-label="成员" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
