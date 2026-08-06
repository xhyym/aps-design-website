<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("<p>本周完成了 <strong>权限中心</strong> 的交付验收。</p>");
</script>

<template><AppRichTextEditor v-model="content" placeholder="输入周报内容…" /></template>
