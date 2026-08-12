<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" empty-text="没有匹配的成员，换个关键词试试" placeholder="输入 @ 后搜索成员" aria-label="自定义空文案提及" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
