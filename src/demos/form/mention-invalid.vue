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
    <AppMention v-model="content" :options="options" invalid described-by="mention-error" placeholder="输入评论，使用 @ 提及成员" aria-label="错误提及" />
    <p id="mention-error" class="demo-error">评论内容不能为空。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
