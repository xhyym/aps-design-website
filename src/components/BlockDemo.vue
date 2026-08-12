<script setup lang="ts">
import { computed, ref } from "vue";
import CodePanel from "@/components/CodePanel.vue";
import { getBlockDemo } from "@/demos/registry";

const props = defineProps<{
  demoId: string;
  index: number;
  source: string;
  title: string;
}>();

type DemoPanel = "preview" | "source";

const demoDefinition = computed(() => getBlockDemo(props.demoId));
const activePanel = ref<DemoPanel>("preview");
const previewPanelId = computed(() => "demo-preview-" + props.demoId);
const sourcePanelId = computed(() => "demo-source-" + props.demoId);

/** 保持运行预览已挂载，切换源码时不丢失用户刚刚操作过的示例状态。 */
function switchPanel(panel: DemoPanel): void {
  activePanel.value = panel;
}
</script>

<template>
  <section class="block-demo" :aria-label="'示例' + index + '：' + title">
    <header class="block-demo__header">
      <div class="block-demo__title">
        <span>示例 {{ String(index).padStart(2, "0") }}</span>
        <strong>{{ title }}</strong>
      </div>
      <div class="block-demo__tabs" :aria-label="title + '视图切换'">
        <button
          type="button"
          :aria-controls="previewPanelId"
          :aria-pressed="activePanel === 'preview'"
          :class="{ 'is-active': activePanel === 'preview' }"
          @click="switchPanel('preview')"
        >
          运行示例
        </button>
        <button
          type="button"
          :aria-controls="sourcePanelId"
          :aria-pressed="activePanel === 'source'"
          :class="{ 'is-active': activePanel === 'source' }"
          @click="switchPanel('source')"
        >
          查看源码
        </button>
      </div>
    </header>

    <div :id="previewPanelId" class="block-demo__preview" :hidden="activePanel !== 'preview'">
      <component :is="demoDefinition.component" v-if="demoDefinition" />
      <p v-else class="block-demo__unavailable">未找到对应的演示组件，请检查 Markdown 中的 demo ID。</p>
    </div>

    <Transition name="code-disclosure" mode="out-in">
      <div v-if="activePanel === 'source'" :id="sourcePanelId">
        <CodePanel :label="title + ' · 示例源码'" :code="props.source" />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.block-demo {
  overflow: hidden;
  margin: 22px 0 30px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 14px;
  background: var(--aps-surface);
}

.block-demo__header {
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px 0 20px;
  border-bottom: 1px solid var(--aps-line-soft);
  background: linear-gradient(90deg, var(--aps-surface) 0%, var(--aps-surface-soft) 160%);
}

.block-demo__title {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.block-demo__title > span {
  color: var(--aps-blue);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.25;
  text-transform: uppercase;
}

.block-demo__title > strong {
  overflow: hidden;
  color: var(--aps-ink);
  font-size: 13px;
  font-weight: 680;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.block-demo__tabs {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 3px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 8px;
  background: var(--aps-surface);
}

.block-demo__tabs button {
  min-height: 28px;
  padding: 0 9px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--aps-muted);
  font: inherit;
  font-size: 12px;
  font-weight: 620;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease;
}

.block-demo__tabs button:hover {
  color: var(--aps-ink);
}

.block-demo__tabs button.is-active {
  background: var(--aps-surface-soft);
  box-shadow: 0 1px 2px rgba(25, 38, 61, 0.08);
  color: var(--aps-ink);
}

.block-demo__tabs button:focus-visible {
  outline: 3px solid rgba(0, 113, 227, 0.25);
  outline-offset: 2px;
}

.block-demo__preview {
  display: grid;
  min-height: 146px;
  place-items: center;
  padding: 32px 52px;
  background: var(--aps-surface);
}

.block-demo__unavailable {
  margin: 0;
  color: var(--aps-muted);
  font-size: 13px;
}

.block-demo :deep(.code-panel) {
  border-radius: 0;
  box-shadow: none;
}

.code-disclosure-enter-active,
.code-disclosure-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.code-disclosure-enter-from,
.code-disclosure-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 640px) {
  .block-demo__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 14px 14px 10px;
  }

  .block-demo__tabs {
    width: 100%;
  }

  .block-demo__tabs button {
    flex: 1 1 0;
  }

  .block-demo__preview {
    min-height: 126px;
    padding: 26px 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .block-demo__tabs button,
  .code-disclosure-enter-active,
  .code-disclosure-leave-active {
    transition: none;
  }
}
</style>
