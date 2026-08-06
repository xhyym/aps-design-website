<script setup lang="ts">
import { computed, createApp, nextTick, onBeforeUnmount, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { AppButton, AppIcon } from "aps-design-pro";
import { getMarkdownDocument, markdownDocuments, renderMarkdownDocument } from "@/content/markdown";
import BlockDemo from "@/components/BlockDemo.vue";

const props = defineProps<{
  kind: "component" | "guide";
}>();

const route = useRoute();
const documentContent = computed(() => getMarkdownDocument(route.path));
const sectionDocuments = computed(() => markdownDocuments.filter((document) => document.kind === props.kind));
const componentCategoryLabels: Record<string, string> = {
  base: "基础组件",
  form: "表单组件",
  data: "数据组件",
  navigation: "导航组件",
  feedback: "反馈组件",
  content: "内容组件",
  layout: "布局组件",
  overlay: "浮层组件",
};
const componentGroups = computed(() => {
  if (props.kind !== "component") return [];

  const groups = new Map<string, typeof sectionDocuments.value>();
  for (const document of sectionDocuments.value) {
    const documents = groups.get(document.category) ?? [];
    documents.push(document);
    groups.set(document.category, documents);
  }

  return [...groups.entries()].map(([key, documents]) => ({
    key,
    label: componentCategoryLabels[key] ?? `${key} 组件`,
    documents,
  }));
});
const renderedContent = computed(() => documentContent.value ? renderMarkdownDocument(documentContent.value) : "");
const pageTitle = computed(() => props.kind === "component" ? "组件" : "指南");
const documentHeadings = computed(() => props.kind === "component" ? documentContent.value?.headings ?? [] : []);
const activeHeadingId = ref("");
const markdownBody = ref<HTMLElement | null>(null);
const mountedDemoApps: ReturnType<typeof createApp>[] = [];
let headingObserver: IntersectionObserver | undefined;

function unmountDemos(): void {
  while (mountedDemoApps.length) mountedDemoApps.pop()?.unmount();
}

function disconnectHeadingObserver(): void {
  headingObserver?.disconnect();
  headingObserver = undefined;
}

/** 根据阅读位置更新右侧目录，目录本身不参与页面路由。 */
function observeDocumentHeadings(): void {
  disconnectHeadingObserver();
  const headings = documentHeadings.value;
  activeHeadingId.value = headings[0]?.id ?? "";
  if (!headings.length || !("IntersectionObserver" in window)) return;

  headingObserver = new IntersectionObserver((entries) => {
    const visibleHeading = entries
      .filter((entry) => entry.isIntersecting)
      .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
    if (visibleHeading instanceof HTMLElement) activeHeadingId.value = visibleHeading.id;
    else if (visibleHeading?.target instanceof HTMLElement) activeHeadingId.value = visibleHeading.target.id;
  }, { rootMargin: "-96px 0px -68%", threshold: 0 });

  for (const heading of headings) {
    const headingElement = document.getElementById(heading.id);
    if (headingElement) headingObserver.observe(headingElement);
  }
}

function scrollToHeading(headingId: string): void {
  const headingElement = document.getElementById(headingId);
  if (!headingElement) return;

  activeHeadingId.value = headingId;
  headingElement.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}

async function mountDemos(): Promise<void> {
  await nextTick();
  unmountDemos();
  if (!markdownBody.value || !documentContent.value) {
    disconnectHeadingObserver();
    return;
  }

  for (const demo of documentContent.value.demos) {
    const placeholder = markdownBody.value.querySelector<HTMLElement>(`[data-demo-id="${demo.id}"]`);
    if (!placeholder) continue;
    const demoApp = createApp(BlockDemo, {
      demoId: demo.id,
      source: demo.source,
    });
    demoApp.mount(placeholder);
    mountedDemoApps.push(demoApp);
  }

  observeDocumentHeadings();
}

watch(renderedContent, () => void mountDemos(), { immediate: true });
onBeforeUnmount(() => {
  unmountDemos();
  disconnectHeadingObserver();
});
</script>

<template>
  <main class="documentation-view">
    <div class="documentation-view__inner" :class="{ 'has-outline': documentHeadings.length > 0 }">
      <aside class="documentation-sidebar" :aria-label="`${pageTitle}目录`">
        <p v-if="props.kind === 'guide'">{{ pageTitle }}</p>
        <nav>
          <template v-if="props.kind === 'component'">
            <section v-for="group in componentGroups" :key="group.key" class="documentation-sidebar__group" :aria-labelledby="`sidebar-group-${group.key}`">
              <h2 :id="`sidebar-group-${group.key}`">{{ group.label }}</h2>
              <div class="documentation-sidebar__links">
                <RouterLink
                  v-for="entry in group.documents"
                  :key="entry.route"
                  :to="entry.route"
                  :class="{ 'is-active': entry.route === $route.path }"
                >
                  {{ entry.title }}
                </RouterLink>
              </div>
            </section>
          </template>
          <RouterLink
            v-else
            v-for="entry in sectionDocuments"
            :key="entry.route"
            :to="entry.route"
            :class="{ 'is-active': entry.route === $route.path }"
          >
            {{ entry.title }}
          </RouterLink>
        </nav>
      </aside>

      <template v-if="documentContent">
        <article class="markdown-content">
          <header class="markdown-content__header">
            <p v-if="documentContent.componentName" class="markdown-content__component-name">{{ documentContent.componentName }}</p>
            <h1>{{ documentContent.title }}</h1>
            <p>{{ documentContent.description }}</p>
            <div class="markdown-content__actions">
              <a v-if="documentContent.source" :href="`https://gitee.com/xhyym/aps-design-pro/blob/main/${documentContent.source}`" target="_blank" rel="noopener noreferrer">
                查看源码 <AppIcon name="arrow-right" :size="14" />
              </a>
              <RouterLink v-if="props.kind === 'guide'" to="/components">浏览组件目录 <AppIcon name="arrow-right" :size="14" /></RouterLink>
            </div>
          </header>
          <div ref="markdownBody" class="markdown-content__body" v-html="renderedContent"></div>
        </article>

        <aside v-if="documentHeadings.length" class="documentation-outline" aria-label="当前组件目录">
          <nav>
            <button
              v-for="heading in documentHeadings"
              :key="heading.id"
              type="button"
              :class="[`is-level-${heading.level}`, { 'is-active': activeHeadingId === heading.id }]"
              @click="scrollToHeading(heading.id)"
            >
              {{ heading.title }}
            </button>
          </nav>
        </aside>
      </template>

      <section v-else class="documentation-empty" aria-labelledby="documentation-empty-title">
        <p>文档未找到</p>
        <h1 id="documentation-empty-title">这篇文档还没有准备好</h1>
        <RouterLink to="/components"><AppButton>回到组件目录</AppButton></RouterLink>
      </section>
    </div>
  </main>
</template>

<style scoped>
.documentation-view {
  min-height: calc(100vh - 62px);
  background: var(--aps-surface);
}

.documentation-view__inner {
  display: grid;
  width: min(100% - 48px, 1280px);
  grid-template-columns: 190px minmax(0, 760px);
  align-items: start;
  gap: 64px;
  margin: 0 auto;
  padding: 62px 0 104px;
}

.documentation-view__inner.has-outline {
  grid-template-columns: 180px minmax(0, 760px) 166px;
  gap: 52px;
}

.documentation-sidebar {
  position: sticky;
  top: 86px;
  display: grid;
  gap: 12px;
}

.documentation-sidebar > p {
  margin: 0;
  color: var(--aps-ink);
  font-size: 13px;
  font-weight: 700;
}

.documentation-sidebar nav {
  display: grid;
  gap: 22px;
}

.documentation-outline {
  position: sticky;
  top: 88px;
  min-width: 0;
}

.documentation-outline nav {
  display: grid;
  gap: 3px;
  padding-left: 12px;
  border-left: 1px solid var(--aps-line-soft);
}

.documentation-outline button {
  overflow: hidden;
  padding: 5px 0;
  border: 0;
  background: transparent;
  color: var(--aps-muted);
  font: inherit;
  font-size: 12px;
  line-height: 1.45;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 180ms ease;
}

.documentation-outline button.is-level-3 {
  padding-left: 10px;
}

.documentation-outline button:hover,
.documentation-outline button.is-active {
  color: var(--aps-blue);
}

.documentation-outline button:focus-visible {
  outline: 3px solid rgba(0, 113, 227, 0.25);
  outline-offset: 2px;
}

.documentation-sidebar__group,
.documentation-sidebar__links {
  display: grid;
}

.documentation-sidebar__group {
  gap: 7px;
}

.documentation-sidebar__group h2 {
  margin: 0 10px;
  color: var(--aps-ink);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
}

.documentation-sidebar__links {
  gap: 2px;
}

.documentation-sidebar a {
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--aps-muted);
  font-size: 13px;
  transition: background-color 180ms ease, color 180ms ease;
}

.documentation-sidebar a:hover {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
}

.documentation-sidebar a.is-active {
  background: var(--aps-blue-soft);
  color: var(--aps-blue);
  font-weight: 650;
}

.markdown-content {
  min-width: 0;
}

.markdown-content__header {
  padding-bottom: 34px;
  border-bottom: 1px solid var(--aps-line-soft);
}

.markdown-content__component-name {
  margin: 0 0 10px;
  color: var(--aps-blue);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  font-weight: 650;
}

.markdown-content__header h1 {
  margin: 0;
  color: var(--aps-ink);
  font-size: clamp(32px, 4vw, 44px);
  letter-spacing: -0.04em;
  line-height: 1.12;
}

.markdown-content__header > p:not(.markdown-content__component-name) {
  max-width: 650px;
  margin: 16px 0 0;
  color: var(--aps-muted);
  font-size: 15px;
  line-height: 1.75;
}

.markdown-content__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
}

.markdown-content__actions a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 650;
}

.markdown-content__body {
  padding-top: 42px;
}

.markdown-content__body :deep(h1),
.markdown-content__body :deep(h2),
.markdown-content__body :deep(h3),
.markdown-content__body :deep(p),
.markdown-content__body :deep(ul),
.markdown-content__body :deep(ol),
.markdown-content__body :deep(pre),
.markdown-content__body :deep(table) {
  margin-top: 0;
}

.markdown-content__body :deep(h1) {
  display: none;
}

.markdown-content__body :deep(h2) {
  margin-bottom: 16px;
  padding-top: 36px;
  scroll-margin-top: 96px;
  color: var(--aps-ink);
  font-size: 25px;
  letter-spacing: -0.025em;
  line-height: 1.28;
}

.markdown-content__body :deep(h3) {
  margin-bottom: 12px;
  padding-top: 26px;
  scroll-margin-top: 96px;
  color: var(--aps-ink);
  font-size: 18px;
  line-height: 1.35;
}

.markdown-content__body :deep(p),
.markdown-content__body :deep(li) {
  color: var(--aps-muted);
  font-size: 14px;
  line-height: 1.8;
}

.markdown-content__body :deep(p) {
  margin-bottom: 14px;
}

.markdown-content__body :deep(ul),
.markdown-content__body :deep(ol) {
  margin-bottom: 18px;
  padding-left: 22px;
}

.markdown-content__body :deep(code) {
  padding: 2px 5px;
  border-radius: 5px;
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;
}

.markdown-content__body :deep(pre) {
  margin-bottom: 22px;
  overflow-x: auto;
  padding: 18px 20px;
  border-radius: 14px;
  background: #1d1d1f;
  color: #f5f5f7;
  font-size: 13px;
  line-height: 1.75;
}

.markdown-content__body :deep(pre code) {
  padding: 0;
  background: transparent;
  color: inherit;
}

.markdown-content__body :deep(.code-token-comment) {
  color: #8b8b91;
}

.markdown-content__body :deep(.code-token-string) {
  color: #a6da95;
}

.markdown-content__body :deep(.code-token-tag) {
  color: #8aadf4;
}

.markdown-content__body :deep(.code-token-keyword) {
  color: #c6a0f6;
}

.markdown-content__body :deep(.code-token-number) {
  color: #f5a97f;
}

.markdown-content__body :deep(table) {
  display: block;
  width: 100%;
  margin-bottom: 22px;
  overflow-x: auto;
  border: 1px solid var(--aps-line-soft);
  border-collapse: separate;
  border-radius: 12px;
  border-spacing: 0;
}

.markdown-content__body :deep(th),
.markdown-content__body :deep(td) {
  min-width: 100px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--aps-line-soft);
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.55;
  text-align: left;
  vertical-align: top;
}

.markdown-content__body :deep(th) {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
  font-weight: 680;
}

.markdown-content__body :deep(tr:last-child td) {
  border-bottom: 0;
}

.markdown-content__body :deep(blockquote) {
  margin: 18px 0;
  padding: 12px 16px;
  border-left: 3px solid var(--aps-blue);
  background: var(--aps-blue-soft);
  color: var(--aps-muted);
}

.documentation-empty {
  display: grid;
  justify-items: start;
  gap: 14px;
  padding: 80px 0;
}

.documentation-empty p,
.documentation-empty h1 {
  margin: 0;
}

.documentation-empty p {
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 700;
}

.documentation-empty h1 {
  color: var(--aps-ink);
  font-size: 34px;
}

@media (max-width: 840px) {
  .documentation-view__inner {
    width: min(100% - 40px, 760px);
    grid-template-columns: 1fr;
    gap: 36px;
    padding-top: 40px;
  }

  .documentation-view__inner.has-outline {
    grid-template-columns: 1fr;
  }

  .documentation-sidebar {
    position: static;
    overflow-x: auto;
  }

  .documentation-sidebar nav {
    gap: 18px;
    min-width: max-content;
  }

  .documentation-sidebar__group {
    min-width: max-content;
  }

  .documentation-sidebar__links {
    display: flex;
  }

  .documentation-outline {
    display: none;
  }
}

@media (max-width: 1120px) and (min-width: 841px) {
  .documentation-view__inner.has-outline {
    width: min(100% - 48px, 980px);
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 52px;
  }

  .documentation-outline {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .documentation-sidebar a,
  .documentation-outline button {
    transition: none;
  }
}
</style>
