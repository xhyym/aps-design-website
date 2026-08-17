<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "c1", author: "王小明", content: "组件文档写得很详细！", time: "2026-08-10 09:20" },
]);
const onSubmit = (comment: CommentItem) => {
  comments.value = [...comments.value, comment];
};
</script>

<template>
  <AppCommentWidget v-model="comments" @submit="onSubmit" />
</template>
