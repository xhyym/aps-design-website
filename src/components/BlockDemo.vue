<script setup lang="ts">
import { computed, ref } from "vue";
import CodePanel from "@/components/CodePanel.vue";
import { getBlockDemo } from "@/demos/registry";

const props = defineProps<{
  demoId: string;
  source: string;
}>();

const demoDefinition = computed(() => getBlockDemo(props.demoId));
const isCodeVisible = ref(false);

function toggleCodePanel(): void {
  isCodeVisible.value = !isCodeVisible.value;
}
</script>

<template>
  <section class="block-demo" aria-label="组件演示">
    <div class="block-demo__preview">
      <button
        v-if="demoDefinition"
        class="block-demo__code-toggle"
        type="button"
        :aria-label="isCodeVisible ? '收起示例源码' : '展开示例源码'"
        :aria-expanded="isCodeVisible"
        @click="toggleCodePanel"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20" /></svg>
      </button>
      <component :is="demoDefinition.component" v-if="demoDefinition" />
      <p v-else class="block-demo__unavailable">未找到对应的演示组件，请检查 Markdown 中的 demo ID。</p>
    </div>

    <Transition name="code-disclosure">
      <CodePanel v-if="demoDefinition && isCodeVisible" label="示例源码" :code="props.source" />
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

.block-demo__preview {
  position: relative;
  display: grid;
  min-height: 146px;
  place-items: center;
  padding: 32px 52px;
  background: var(--aps-surface);
}

.block-demo__code-toggle {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-grid;
  width: 32px;
  height: 32px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--aps-muted);
  transition: background-color 180ms ease, color 180ms ease;
}

.block-demo__code-toggle:hover {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
}

.block-demo__code-toggle:focus-visible {
  outline: 3px solid rgba(0, 113, 227, 0.28);
  outline-offset: 2px;
}

.block-demo__code-toggle svg {
  display: block;
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
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
  .block-demo__preview {
    min-height: 126px;
    padding: 26px 44px;
  }
}
</style>
