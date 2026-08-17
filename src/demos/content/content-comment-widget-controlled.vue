<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "1", author: "李雷", content: "接口设计清晰，值得学习。", time: "2026-08-12 14:05" },
  { id: "2", author: "韩梅梅", content: "示例丰富，直接可用。", time: "2026-08-12 15:40" },
]);
const onUpdate = (list: CommentItem[]) => {
  comments.value = list;
};
</script>

<template>
  <AppCommentWidget v-model="comments" @update:model-value="onUpdate" />
</template>
