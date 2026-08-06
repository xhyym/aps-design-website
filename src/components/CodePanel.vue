<script setup lang="ts">
import { computed, ref } from "vue";
import { AppButton } from "aps-design-pro";
import { highlightCode } from "@/utils/codeHighlight";

const props = defineProps<{
  code: string;
  label: string;
}>();

const copyMessage = ref("");
let clearMessageTimerId: number | undefined;
const highlightedCode = computed(() => highlightCode(props.code));

/** 复制失败时保留源码可选中状态，用户仍可手动复制。 */
async function copyCode(): Promise<void> {
  window.clearTimeout(clearMessageTimerId);
  try {
    await navigator.clipboard.writeText(props.code);
    copyMessage.value = "已复制";
  } catch {
    copyMessage.value = "复制失败，请手动复制";
  }
  clearMessageTimerId = window.setTimeout(() => {
    copyMessage.value = "";
  }, 1800);
}
</script>

<template>
  <section class="code-panel" :aria-label="label">
    <header class="code-panel__header">
      <span>{{ label }}</span>
      <AppButton variant="text" size="small" @click="copyCode">复制</AppButton>
    </header>
    <pre><code v-html="highlightedCode"></code></pre>
    <span class="visually-hidden" aria-live="polite">{{ copyMessage }}</span>
  </section>
</template>

<style scoped>
.code-panel {
  overflow: hidden;
  border-radius: 16px;
  background: #1d1d1f;
  box-shadow: 0 18px 42px rgba(29, 29, 31, 0.16);
  color: #f5f5f7;
}

.code-panel__header {
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #a1a1a6;
  font-size: 12px;
  font-weight: 600;
}

.code-panel__header :deep(.app-button-control) {
  color: #d2d2d7;
}

.code-panel__header :deep(.app-button-control:hover:not(:disabled)) {
  color: #ffffff;
}

pre {
  max-width: 100%;
  margin: 0;
  overflow-x: auto;
  padding: 20px;
  color: #f5f5f7;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  line-height: 1.8;
}

code {
  color: inherit;
}

code :deep(.code-token-comment) {
  color: #8b8b91;
}

code :deep(.code-token-string) {
  color: #a6da95;
}

code :deep(.code-token-tag) {
  color: #8aadf4;
}

code :deep(.code-token-keyword) {
  color: #c6a0f6;
}

code :deep(.code-token-number) {
  color: #f5a97f;
}

@media (prefers-reduced-motion: reduce) {
  .code-panel {
    box-shadow: none;
  }
}
</style>
