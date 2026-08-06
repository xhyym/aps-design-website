<script setup lang="ts">
import { RouterLink } from "vue-router";
import { AppIcon } from "aps-design-pro";
import BrandMark from "./BrandMark.vue";
</script>

<template>
  <footer class="website-footer">
    <div class="website-footer__inner">
      <section class="website-footer__brand">
        <div class="website-footer__brand-name"><BrandMark /><strong>APS Design Pro</strong></div>
        <p>面向 Vue 3 管理后台的组件基础，保持业务逻辑与后端契约由你的应用掌控。</p>
        <a href="https://gitee.com/xhyym/aps-design-pro" target="_blank" rel="noopener noreferrer">
          在 Gitee 查看源码 <AppIcon name="arrow-right" :size="14" />
        </a>
      </section>

      <nav class="website-footer__links" aria-label="页脚导航">
        <section>
          <strong>文档</strong>
          <RouterLink to="/guide/architecture">开始使用</RouterLink>
          <RouterLink to="/best-practices">最佳实践</RouterLink>
        </section>
        <section>
          <strong>组件</strong>
          <RouterLink to="/components">组件目录</RouterLink>
          <RouterLink to="/components/base/badge">基础组件</RouterLink>
        </section>
        <section>
          <strong>社区</strong>
          <RouterLink to="/sponsor">赞助支持</RouterLink>
          <a href="https://gitee.com/xhyym/aps-design-pro/issues" target="_blank" rel="noopener noreferrer">反馈问题</a>
        </section>
      </nav>

      <div class="website-footer__legal">
        <span>© 2026 APS Design Pro</span>
        <span>MIT License</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.website-footer {
  border-top: 1px solid var(--aps-line-soft);
  background: var(--aps-surface);
}

.website-footer__inner {
  display: grid;
  width: min(100% - 48px, 1120px);
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.25fr);
  gap: 56px;
  margin: 0 auto;
  padding: 58px 0 20px;
}

.website-footer__brand {
  max-width: 330px;
}

.website-footer__brand-name,
.website-footer__brand a {
  display: inline-flex;
  align-items: center;
}

.website-footer__brand-name {
  gap: 9px;
  color: var(--aps-ink);
  font-size: 15px;
}

.website-footer__brand-name :deep(.app-brand-mark) {
  width: 27px;
  height: 27px;
}

.website-footer__brand p {
  margin: 13px 0 16px;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.7;
}

.website-footer__brand a {
  gap: 4px;
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 650;
}

.website-footer__links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.website-footer__links section {
  display: grid;
  align-content: start;
  gap: 11px;
}

.website-footer__links strong {
  margin-bottom: 2px;
  color: var(--aps-ink);
  font-size: 13px;
}

.website-footer__links a {
  color: var(--aps-muted);
  font-size: 13px;
  transition: color 180ms ease;
}

.website-footer__links a:hover {
  color: var(--aps-blue);
}

.website-footer__legal {
  display: flex;
  grid-column: 1 / -1;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--aps-line-soft);
  color: var(--aps-faint);
  font-size: 12px;
}

@media (max-width: 720px) {
  .website-footer__inner {
    width: min(100% - 40px, 1120px);
    grid-template-columns: 1fr;
    gap: 38px;
    padding-top: 42px;
  }

  .website-footer__links {
    gap: 18px;
  }
}

@media (max-width: 480px) {
  .website-footer__links {
    grid-template-columns: 1fr 1fr;
  }

  .website-footer__legal {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
