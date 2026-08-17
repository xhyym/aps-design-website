<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([
  { id: "a", author: "张三", content: "第一条评论", time: "昨天 10:00" },
  { id: "b", author: "李四", content: "第二条评论", time: "昨天 11:30" },
  { id: "c", author: "王五", content: "第三条评论", time: "今天 08:12" },
]);
</script>

<template>
  <AppCommentWidget v-model="comments" />
</template>
