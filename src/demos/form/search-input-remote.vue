<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions = ref<SearchSuggestion[]>([]);
const loading = ref(false);
const picked = ref("尚未选择");

async function searchUsers(value: string): Promise<void> {
  const query = value.trim();
  if (!query) {
    suggestions.value = [];
    return;
  }
  loading.value = true;
  try {
    const res = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=8`);
    const data = await res.json();
    suggestions.value = (data.items ?? []).map((user: { login: string }) => ({
      key: user.login,
      label: user.login,
      value: user.login,
      description: "GitHub 用户",
    }));
  } catch {
    suggestions.value = [];
  } finally {
    loading.value = false;
  }
}

function onSelect(item: SearchSuggestion): void {
  picked.value = `已选择：${item.label}`;
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      :loading="loading"
      :debounce="300"
      placeholder="搜索 GitHub 用户名"
      @debounced-search="searchUsers"
      @select="onSelect"
      aria-label="GitHub 用户搜索"
    />
    <span>{{ picked }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 360px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
