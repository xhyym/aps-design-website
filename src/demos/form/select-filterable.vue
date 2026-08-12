<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const city = ref("");
const options = [
  { label: "北京", value: "beijing" },
  { label: "上海", value: "shanghai" },
  { label: "广州", value: "guangzhou" },
  { label: "深圳", value: "shenzhen" },
  { label: "杭州", value: "hangzhou" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="city" :options="options" filterable placeholder="输入城市拼音或汉字筛选" aria-label="城市" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
