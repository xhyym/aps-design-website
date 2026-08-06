<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("<p><strong>审批说明：</strong>该记录已归档，不允许继续编辑。</p>");
</script>

<template><AppRichTextEditor v-model="content" disabled :min-height="120" /></template>
