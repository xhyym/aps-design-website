<script setup lang="ts">
import { ref } from "vue";
import { AppCommentWidget } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CommentItem { id: string; author: string; content: string; time: string; }

const comments = ref<CommentItem[]>([]);
</script>

<template><AppCommentWidget v-model="comments" placeholder="补充一次交付说明…" /></template>
