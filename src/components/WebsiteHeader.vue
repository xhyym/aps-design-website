<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { AppButton, AppIcon, AppIconButton } from "aps-design-pro";
import BrandMark from "./BrandMark.vue";
import { WEBSITE_NAVIGATION } from "@/data/navigation";

const emit = defineEmits<{ openSearch: [] }>();

const route = useRoute();
const isMobileMenuOpen = ref(false);
const shortcutLabel = computed(() => navigator.userAgent.includes("Mac") ? "⌘ K" : "Ctrl K");

function isActive(path: string): boolean {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false;
}

function openSearch(): void {
  closeMobileMenu();
  emit("openSearch");
}
</script>

<template>
  <header class="website-header">
    <div class="website-header__inner">
      <RouterLink class="website-header__brand" to="/" aria-label="APS Design Pro 首页" @click="closeMobileMenu">
        <BrandMark />
        <span>APS Design Pro</span>
      </RouterLink>

      <nav class="website-header__navigation" :class="{ 'is-open': isMobileMenuOpen }" aria-label="主导航">
        <RouterLink
          v-for="item in WEBSITE_NAVIGATION"
          :key="item.path"
          :to="item.path"
          :class="{ 'is-active': isActive(item.path) }"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="website-header__actions">
        <AppButton class="website-search-trigger" variant="ghost" size="small" aria-label="搜索网站内容" @click="openSearch">
          <AppIcon name="search" :size="16" />
          <span>搜索</span>
          <kbd>{{ shortcutLabel }}</kbd>
        </AppButton>
        <a class="website-source-link" href="https://gitee.com/xhyym/aps-design-pro" target="_blank" rel="noopener noreferrer">
          <span>Gitee</span>
          <AppIcon name="arrow-right" :size="15" />
        </a>
      </div>

      <AppIconButton
        class="website-header__menu-button"
        :icon="isMobileMenuOpen ? 'close' : 'menu'"
        :label="isMobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'"
        size="small"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      />
    </div>
  </header>
</template>

<style scoped>
.website-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid rgba(29, 29, 31, 0.08);
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(16px) saturate(155%);
}

.website-header__inner {
  display: grid;
  width: min(100% - 40px, 1200px);
  min-height: 62px;
  grid-template-columns: minmax(192px, 1fr) auto minmax(192px, 1fr);
  align-items: center;
  margin: 0 auto;
}

.website-header__brand,
.website-header__actions,
.website-header__navigation,
.website-source-link {
  display: flex;
  align-items: center;
}

.website-header__brand {
  gap: 10px;
  color: var(--aps-ink);
  font-size: 15px;
  font-weight: 720;
  letter-spacing: -0.02em;
}

.website-header__brand :deep(.app-brand-mark) {
  width: 28px;
  height: 28px;
}

.website-header__navigation {
  gap: 4px;
}

.website-header__navigation a {
  position: relative;
  padding: 21px 13px 19px;
  color: var(--aps-muted);
  font-size: 13px;
  font-weight: 560;
  transition: color 180ms ease;
}

.website-header__navigation a::after {
  position: absolute;
  right: 13px;
  bottom: 0;
  left: 13px;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background: var(--aps-blue);
  content: "";
  opacity: 0;
  transform: scaleX(0.5);
  transition: opacity 180ms ease, transform 180ms ease;
}

.website-header__navigation a:hover,
.website-header__navigation a.is-active {
  color: var(--aps-ink);
}

.website-header__navigation a.is-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.website-header__actions {
  justify-content: flex-end;
  gap: 12px;
}

.website-search-trigger :deep(.app-button-control) {
  gap: 6px;
  color: var(--aps-muted);
}

.website-search-trigger kbd {
  margin-left: 2px;
  padding: 1px 4px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 4px;
  color: var(--aps-faint);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  line-height: 1.3;
}

.website-source-link {
  gap: 3px;
  color: var(--aps-muted);
  font-size: 13px;
  font-weight: 600;
  transition: color 180ms ease;
}

.website-source-link:hover {
  color: var(--aps-blue);
}

.website-header__menu-button {
  display: none !important;
  justify-self: end;
}

@media (max-width: 800px) {
  .website-header__inner {
    width: min(100% - 32px, 1200px);
    grid-template-columns: 1fr auto;
  }

  .website-header__navigation {
    position: absolute;
    top: calc(100% + 8px);
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 8px;
    border: 1px solid var(--aps-line-soft);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 16px 38px rgba(29, 29, 31, 0.12);
  }

  .website-header__navigation.is-open {
    display: flex;
  }

  .website-header__navigation a {
    padding: 11px 12px;
    border-radius: 9px;
  }

  .website-header__navigation a:hover,
  .website-header__navigation a.is-active {
    background: var(--aps-surface-soft);
  }

  .website-header__navigation a::after,
  .website-header__actions {
    display: none;
  }

  .website-header__menu-button {
    display: inline-flex !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .website-header__navigation a,
  .website-header__navigation a::after,
  .website-source-link {
    transition: none;
  }
}
</style>
