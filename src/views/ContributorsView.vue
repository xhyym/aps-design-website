<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import { contributorRoster } from "@/content/contributors";

const contributorSourceUrl = "https://gitee.com/xhyym/aps-design-website/blob/main/docs/contributors.md";

/** 目录按钮仅滚动页面，不改变当前路由，便于连续浏览三类贡献。 */
function scrollToCategory(categoryId: string): void {
  const categoryElement = document.getElementById(`contributor-category-${categoryId}`);
  if (!categoryElement) return;

  categoryElement.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}
</script>

<template>
  <main class="contributors-view">
    <section class="contributors-hero" aria-labelledby="contributors-title">
      <div class="contributors-hero__copy">
        <p>开源共建</p>
        <h1 id="contributors-title">{{ contributorRoster.title }}</h1>
        <span>{{ contributorRoster.introduction }}</span>
      </div>
      <aside class="contributors-hero__meta" aria-label="贡献名单维护信息">
        <AppIcon name="users" :size="20" />
        <div>
          <strong>本地 Markdown 维护</strong>
          <span>更新于 {{ contributorRoster.updatedAt }}</span>
        </div>
        <a :href="contributorSourceUrl" target="_blank" rel="noopener noreferrer">
          查看源文件 <AppIcon name="arrow-right" :size="14" />
        </a>
      </aside>
    </section>

    <nav class="contributors-index" aria-label="贡献分类">
      <button
        v-for="(category, index) in contributorRoster.categories"
        :key="category.id"
        type="button"
        @click="scrollToCategory(category.id)"
      >
        <span>0{{ index + 1 }}</span>
        <strong>{{ category.title }}</strong>
        <AppIcon name="arrow-right" :size="15" />
      </button>
    </nav>

    <section class="contributors-list" aria-label="贡献名单详情">
      <article
        v-for="(category, index) in contributorRoster.categories"
        :id="`contributor-category-${category.id}`"
        :key="category.id"
        class="contributor-category"
      >
        <header>
          <span class="contributor-category__number">0{{ index + 1 }}</span>
          <div>
            <p>贡献方向</p>
            <h2>{{ category.title }}</h2>
            <span>{{ category.description }}</span>
          </div>
        </header>
        <div class="contributor-category__content" v-html="category.content"></div>
      </article>
    </section>

    <section class="contributors-closing" aria-label="参与共建">
      <div>
        <p>从一个明确的改动开始</p>
        <h2>每一次被采用的贡献，都会留在这里。</h2>
      </div>
      <a href="https://gitee.com/xhyym/aps-design-pro/issues" target="_blank" rel="noopener noreferrer">
        提交 Issue <AppIcon name="arrow-right" :size="16" />
      </a>
    </section>
  </main>
</template>

<style scoped>
.contributors-view {
  width: min(100% - 48px, 1040px);
  margin: 0 auto;
  padding: 92px 0 112px;
}

.contributors-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 252px;
  align-items: end;
  gap: 56px;
}

.contributors-hero__copy {
  max-width: 700px;
}

.contributors-hero__copy > p,
.contributor-category header p,
.contributors-closing p {
  margin: 0 0 14px;
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 700;
}

.contributors-hero h1,
.contributors-closing h2 {
  margin: 0;
  color: var(--aps-ink);
  letter-spacing: -0.05em;
}

.contributors-hero h1 {
  font-size: clamp(38px, 5vw, 56px);
  line-height: 1.08;
}

.contributors-hero__copy > span {
  display: block;
  max-width: 680px;
  margin-top: 20px;
  color: var(--aps-muted);
  font-size: 16px;
  line-height: 1.75;
}

.contributors-hero__meta {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: start;
  gap: 2px 10px;
  padding: 18px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 14px;
  background: var(--aps-surface-soft);
  color: var(--aps-blue);
}

.contributors-hero__meta > svg {
  margin-top: 2px;
}

.contributors-hero__meta div {
  display: grid;
  gap: 3px;
}

.contributors-hero__meta strong {
  color: var(--aps-ink);
  font-size: 13px;
}

.contributors-hero__meta div span {
  color: var(--aps-faint);
  font-size: 12px;
}

.contributors-hero__meta a,
.contributors-closing > a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--aps-blue);
  font-size: 12px;
  font-weight: 650;
}

.contributors-hero__meta a {
  grid-column: 2;
  margin-top: 8px;
}

.contributors-index {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin-top: 76px;
  border-top: 1px solid var(--aps-line-soft);
  border-bottom: 1px solid var(--aps-line-soft);
}

.contributors-index button {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 11px;
  min-height: 78px;
  padding: 0 18px;
  border: 0;
  border-right: 1px solid var(--aps-line-soft);
  background: transparent;
  color: var(--aps-muted);
  font: inherit;
  text-align: left;
  transition: background-color 180ms ease, color 180ms ease;
}

.contributors-index button:last-child {
  border-right: 0;
}

.contributors-index button:hover,
.contributors-index button:focus-visible {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
  outline: 0;
}

.contributors-index button:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(0, 113, 227, 0.35);
}

.contributors-index button span,
.contributor-category__number {
  color: var(--aps-faint);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.contributors-index button strong {
  overflow: hidden;
  color: inherit;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contributors-list {
  display: grid;
  gap: 0;
  margin-top: 42px;
}

.contributor-category {
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr);
  gap: 48px;
  padding: 44px 0;
  border-bottom: 1px solid var(--aps-line-soft);
  scroll-margin-top: 82px;
}

.contributor-category:first-child {
  padding-top: 20px;
}

.contributor-category header {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 14px;
}

.contributor-category header p {
  margin-bottom: 10px;
}

.contributor-category h2 {
  margin: 0;
  color: var(--aps-ink);
  font-size: 24px;
  letter-spacing: -0.03em;
}

.contributor-category header div > span {
  display: block;
  margin-top: 9px;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.65;
}

.contributor-category__content {
  min-width: 0;
  color: var(--aps-muted);
  font-size: 14px;
  line-height: 1.7;
}

.contributor-category__content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid var(--aps-line-soft);
  border-radius: 12px;
}

.contributor-category__content :deep(th),
.contributor-category__content :deep(td) {
  padding: 14px 16px;
  border-bottom: 1px solid var(--aps-line-soft);
  text-align: left;
  vertical-align: top;
}

.contributor-category__content :deep(th) {
  background: var(--aps-surface-soft);
  color: var(--aps-ink);
  font-size: 12px;
  font-weight: 700;
}

.contributor-category__content :deep(td) {
  color: var(--aps-muted);
}

.contributor-category__content :deep(tr:last-child td) {
  border-bottom: 0;
}

.contributor-category__content :deep(a) {
  color: var(--aps-blue);
  font-weight: 620;
}

.contributors-closing {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  padding: 52px 0 0;
}

.contributors-closing h2 {
  max-width: 590px;
  font-size: clamp(28px, 3.5vw, 38px);
  line-height: 1.18;
}

.contributors-closing > a {
  flex: 0 0 auto;
  padding-bottom: 5px;
  font-size: 14px;
}

@media (max-width: 760px) {
  .contributors-view {
    width: min(100% - 40px, 1040px);
    padding-top: 58px;
  }

  .contributors-hero,
  .contributor-category {
    grid-template-columns: 1fr;
  }

  .contributors-hero {
    gap: 28px;
  }

  .contributors-index {
    grid-template-columns: 1fr;
    margin-top: 54px;
  }

  .contributors-index button,
  .contributors-index button:last-child {
    min-height: 64px;
    border-right: 0;
    border-bottom: 1px solid var(--aps-line-soft);
  }

  .contributors-index button:last-child {
    border-bottom: 0;
  }

  .contributor-category {
    gap: 25px;
    padding: 34px 0;
  }

  .contributors-closing {
    align-items: start;
    flex-direction: column;
    gap: 22px;
  }
}

@media (max-width: 540px) {
  .contributor-category__content {
    overflow-x: auto;
  }

  .contributor-category__content :deep(table) {
    min-width: 540px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contributors-index button {
    transition: none;
  }
}
</style>
