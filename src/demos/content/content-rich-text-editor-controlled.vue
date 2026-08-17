<script setup lang="ts">
import { ref } from "vue";
import { AppRichTextEditor } from "aps-design-pro";
import "aps-design-pro/style.css";

const html = ref("<h2>标题</h2><p>这是一段<b>加粗</b>内容。</p>");
const log = ref("");
</script>

<template>
  <div>
    <AppRichTextEditor v-model="html" @update:model-value="(v: string) => (log = v.length + ' 字符')" />
    <p class="hint">{{ log || "等待输入" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
