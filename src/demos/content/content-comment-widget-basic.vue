<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CommentItem { id: string; author: string; content: string; time: string; }

const comments = ref<CommentItem[]>([
  { id: "1", author: "林知远", content: "这个排期我已经确认，可以继续推进。", time: "10 分钟前" },
]);
</script>

<template><AppCommentWidget v-model="comments" /></template>
