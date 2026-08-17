<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const html = ref("");
</script>

<template>
  <AppRichTextEditor v-model="html" placeholder="在这里撰写公告内容…" />
</template>
