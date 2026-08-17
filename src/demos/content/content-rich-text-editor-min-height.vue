<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const html = ref("<p>长文编辑区域。</p>");
</script>

<template>
  <AppRichTextEditor v-model="html" :min-height="320" />
</template>
