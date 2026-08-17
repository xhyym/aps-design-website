<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget, type CommentItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const comments = ref<CommentItem[]>([]);
</script>

<template>
  <AppCommentWidget v-model="comments" placeholder="来说点什么吧…" />
</template>
