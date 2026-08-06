<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("请 @林晨 跟进课程封面");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
  { key: "zhou", label: "周宁", value: "周宁", description: "前端研发" },
  { key: "chen", label: "陈果", value: "陈果", description: "服务端研发" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" placeholder="输入评论，使用 @ 提及成员" aria-label="评论内容" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
