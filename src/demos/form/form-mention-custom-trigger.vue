<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("关联 #课程运营");
const options = [
  { key: "operation", label: "课程运营", value: "课程运营" },
  { key: "design", label: "产品设计", value: "产品设计" },
  { key: "research", label: "用户研究", value: "用户研究" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" trigger="#" :rows="3" placeholder="输入 # 关联专题" aria-label="专题说明" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
