<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { AppButton, AppIcon } from "aps-design-pro";
import { componentDocuments } from "@/content/markdown";

const documentGroups = computed(() => {
  const groups = new Map<string, typeof componentDocuments>();
  for (const document of componentDocuments) {
    const group = groups.get(document.category) ?? [];
    group.push(document);
    groups.set(document.category, group);
  }
  return [...groups.entries()];
});
</script>

<template>
  <main class="catalog-view">
    <section class="catalog-view__hero" aria-labelledby="catalog-title">
      <p>组件目录</p>
      <h1 id="catalog-title">从 Markdown 文档出发，找到合适的组件。</h1>
      <span>当前已加载 {{ componentDocuments.length }} 篇组件说明；维护官网 docs 目录后，构建产物会自动更新目录与搜索索引。</span>
    </section>

    <section v-for="[category, documents] in documentGroups" :key="category" class="catalog-section" :aria-label="`${category} 组件`">
      <header>
        <div>
          <p>{{ category }}</p>
          <h2>{{ category === "base" ? "基础组件" : category }}</h2>
        </div>
        <span>{{ documents.length }} 个组件</span>
      </header>
      <div class="catalog-grid">
        <RouterLink v-for="document in documents" :key="document.id" class="catalog-card" :to="document.route">
          <span class="catalog-card__icon"><AppIcon name="grid" :size="19" /></span>
          <strong>{{ document.title }}</strong>
          <small>{{ document.componentName }}</small>
          <p>{{ document.description }}</p>
          <span class="catalog-card__action">查看文档 <AppIcon name="arrow-right" :size="14" /></span>
        </RouterLink>
      </div>
    </section>

    <section v-if="componentDocuments.length === 0" class="catalog-empty">
      <h2>尚未发现组件文档</h2>
      <p>将组件 Markdown 放到 `apps/aps-design-website/docs/components` 后，构建时会自动载入。</p>
      <RouterLink to="/guide/architecture"><AppButton>查看接入说明</AppButton></RouterLink>
    </section>
  </main>
</template>

<style scoped>
.catalog-view {
  width: min(100% - 48px, 1120px);
  margin: 0 auto;
  padding: 78px 0 104px;
}

.catalog-view__hero {
  max-width: 660px;
  margin-bottom: 74px;
}

.catalog-view__hero > p,
.catalog-section header p {
  margin: 0 0 12px;
  color: var(--aps-blue);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  font-weight: 700;
}

.catalog-view__hero h1 {
  margin: 0;
  color: var(--aps-ink);
  font-size: clamp(36px, 5vw, 54px);
  letter-spacing: -0.05em;
  line-height: 1.1;
}

.catalog-view__hero > span {
  display: block;
  margin-top: 18px;
  color: var(--aps-muted);
  font-size: 15px;
  line-height: 1.75;
}

.catalog-section + .catalog-section {
  margin-top: 68px;
}

.catalog-section header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.catalog-section header h2 {
  margin: 0;
  color: var(--aps-ink);
  font-size: 26px;
  letter-spacing: -0.03em;
}

.catalog-section header > span {
  color: var(--aps-faint);
  font-size: 13px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.catalog-card {
  display: grid;
  min-width: 0;
  min-height: 228px;
  align-content: start;
  padding: 22px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 16px;
  background: var(--aps-surface);
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.catalog-card:hover {
  border-color: var(--aps-line);
  box-shadow: 0 14px 28px rgba(29, 29, 31, 0.06);
  transform: translateY(-2px);
}

.catalog-card__icon {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  margin-bottom: 21px;
  border-radius: 11px;
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
}

.catalog-card strong {
  color: var(--aps-ink);
  font-size: 16px;
}

.catalog-card small {
  margin-top: 4px;
  color: var(--aps-faint);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
}

.catalog-card p {
  display: -webkit-box;
  margin: 14px 0 0;
  overflow: hidden;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.catalog-card__action {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: 20px;
  color: var(--aps-blue);
  font-size: 12px;
  font-weight: 650;
}

.catalog-empty {
  padding: 54px;
  border: 1px dashed var(--aps-line);
  border-radius: 16px;
  text-align: center;
}

.catalog-empty h2,
.catalog-empty p {
  margin: 0;
}

.catalog-empty p {
  margin: 10px auto 22px;
  color: var(--aps-muted);
}

@media (max-width: 860px) {
  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .catalog-view {
    width: min(100% - 40px, 1120px);
    padding-top: 52px;
  }

  .catalog-view__hero {
    margin-bottom: 52px;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .catalog-card {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .catalog-card {
    transition: none;
  }
}
</style>
