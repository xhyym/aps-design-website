<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { AppDialog, AppIcon, AppInput } from "aps-design-pro";
import { markdownDocuments } from "@/content/markdown";
import { WEBSITE_SEARCH_ENTRIES, type WebsiteIcon, type WebsiteSearchEntry } from "@/data/navigation";

interface SearchResult extends WebsiteSearchEntry {
  group: "页面" | "文档";
}

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();

const router = useRouter();
const query = ref("");
const searchInputId = "aps-website-search-input";

const documentEntries = computed<SearchResult[]>(() => markdownDocuments.map((document) => ({
  label: document.componentName ? `${document.title} · ${document.componentName}` : document.title,
  path: document.route,
  icon: "panel" as WebsiteIcon,
  description: document.description,
  group: "文档",
})));
const allEntries = computed<SearchResult[]>(() => [
  ...WEBSITE_SEARCH_ENTRIES.map((entry) => ({ ...entry, group: "页面" as const })),
  ...documentEntries.value,
]);
const filteredEntries = computed(() => {
  const normalizedQuery = query.value.trim().toLocaleLowerCase("zh-CN");
  if (!normalizedQuery) return allEntries.value;
  return allEntries.value.filter((entry) => `${entry.label} ${entry.description}`.toLocaleLowerCase("zh-CN").includes(normalizedQuery));
});

function closeSearch(): void {
  emit("update:modelValue", false);
}

function selectEntry(entry: SearchResult): void {
  closeSearch();
  query.value = "";
  if (entry.externalUrl) {
    window.open(entry.externalUrl, "_blank", "noopener,noreferrer");
    return;
  }
  void router.push(entry.path);
}

function handleGlobalShortcut(event: KeyboardEvent): void {
  if (event.key.toLocaleLowerCase("zh-CN") !== "k" || (!event.metaKey && !event.ctrlKey)) return;
  event.preventDefault();
  emit("update:modelValue", true);
}

watch(() => props.modelValue, async (isOpen) => {
  if (!isOpen) return;
  await nextTick();
  const searchInput = document.getElementById(searchInputId);
  if (searchInput instanceof HTMLInputElement) searchInput.focus();
});

onMounted(() => window.addEventListener("keydown", handleGlobalShortcut));
onBeforeUnmount(() => window.removeEventListener("keydown", handleGlobalShortcut));
</script>

<template>
  <AppDialog
    :model-value="modelValue"
    title="搜索 APS Design Pro"
    description="搜索页面、组件和已加载的 Markdown 文档"
    width="wide"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <div class="website-search">
      <AppInput
        :id="searchInputId"
        v-model="query"
        size="large"
        placeholder="输入组件名、指南或功能名称"
        aria-label="搜索页面、组件和文档"
        autocomplete="off"
      >
        <template #prefix>
          <AppIcon name="search" :size="18" />
        </template>
      </AppInput>

      <div class="website-search__results" role="listbox" aria-label="搜索结果">
        <button
          v-for="entry in filteredEntries"
          :key="`${entry.group}-${entry.path}`"
          class="website-search__result"
          type="button"
          role="option"
          @click="selectEntry(entry)"
        >
          <span class="website-search__icon"><AppIcon :name="entry.icon" :size="16" /></span>
          <span class="website-search__copy">
            <small>{{ entry.group }}</small>
            <strong>{{ entry.label }}</strong>
            <span>{{ entry.description }}</span>
          </span>
          <AppIcon name="arrow-right" :size="16" />
        </button>
        <p v-if="filteredEntries.length === 0" class="website-search__empty">没有找到匹配内容，试试组件名称或功能关键词。</p>
      </div>
    </div>

    <template #footer>
      <span class="website-search__hint"><kbd>Esc</kbd> 关闭　<kbd>⌘ K</kbd> / <kbd>Ctrl K</kbd> 唤起</span>
    </template>
  </AppDialog>
</template>

<style scoped>
.website-search {
  display: grid;
  gap: 18px;
}

.website-search__results {
  display: grid;
  max-height: min(48vh, 410px);
  gap: 4px;
  overflow-y: auto;
  padding-right: 2px;
}

.website-search__result {
  display: grid;
  width: 100%;
  grid-template-columns: 36px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 12px;
  min-height: 62px;
  padding: 9px;
  border: 0;
  border-radius: 11px;
  background: transparent;
  color: var(--aps-muted);
  font: inherit;
  text-align: left;
  transition: background-color 180ms ease, color 180ms ease;
}

.website-search__result:hover,
.website-search__result:focus-visible {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
  outline: 0;
}

.website-search__result:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(0, 113, 227, 0.35);
}

.website-search__icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 10px;
  background: var(--aps-blue-soft);
  color: var(--aps-blue);
}

.website-search__copy {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.website-search__copy small {
  color: var(--aps-faint);
  font-size: 11px;
  font-weight: 600;
}

.website-search__copy strong,
.website-search__copy span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.website-search__copy strong {
  color: var(--aps-ink);
  font-size: 14px;
}

.website-search__copy span {
  color: var(--aps-muted);
  font-size: 12px;
}

.website-search__empty {
  margin: 0;
  padding: 42px 16px;
  color: var(--aps-muted);
  font-size: 14px;
  text-align: center;
}

.website-search__hint {
  color: var(--aps-faint);
  font-size: 12px;
}

kbd {
  padding: 2px 5px;
  border: 1px solid var(--aps-line);
  border-radius: 5px;
  background: var(--aps-surface-soft);
  color: var(--aps-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
}

@media (prefers-reduced-motion: reduce) {
  .website-search__result {
    transition: none;
  }
}
</style>
