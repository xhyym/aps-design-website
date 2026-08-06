<script setup lang="ts">
import { useRouter } from "vue-router";
import { AppButton, AppIcon } from "aps-design-pro";

const router = useRouter();
</script>

<template>
  <main class="practice-view">
    <section class="practice-view__hero" aria-labelledby="practice-title">
      <p>最佳实践</p>
      <h1 id="practice-title">组件负责界面，应用负责业务。</h1>
      <span>APS Design Pro 提供可组合的界面基础。请求、权限、数据契约和领域状态仍应明确地留在你的应用中。</span>
      <AppButton @click="router.push('/guide/architecture')">阅读架构约定</AppButton>
    </section>

    <section class="practice-view__grid" aria-label="接入边界">
      <article class="practice-card is-recommended">
        <header><span><AppIcon name="check" :size="16" /></span><strong>推荐</strong></header>
        <h2>组件只接收稳定的显示数据与交互回调。</h2>
        <p>页面在接口成功后更新数据，组件通过 Props 展示状态并通过 Events 回传用户操作。这样 Mock、真实接口与权限策略可以独立替换。</p>
      </article>
      <article class="practice-card is-avoid">
        <header><span><AppIcon name="close" :size="16" /></span><strong>避免</strong></header>
        <h2>把接口请求、路由跳转或权限判断塞进通用组件。</h2>
        <p>这些行为会让组件绑定特定业务，复用时需要绕过隐藏状态。将它们留在页面或业务组合函数中，才能保持组件边界清楚。</p>
      </article>
    </section>

    <section class="practice-view__checklist" aria-labelledby="practice-checklist-title">
      <div>
        <p>接入检查</p>
        <h2 id="practice-checklist-title">在引入一个新组件之前，先确认这三件事。</h2>
      </div>
      <ol>
        <li><strong>数据结构是否稳定：</strong>先定义组件需要的最小数据，而不是把整个接口响应直接透传。</li>
        <li><strong>状态是否可解释：</strong>加载、空态、失败与可恢复操作应该由页面和组件共同呈现。</li>
        <li><strong>文档是否同步：</strong>新增或修改公开能力时，同步更新对应 Markdown 和可运行示例。</li>
      </ol>
    </section>
  </main>
</template>

<style scoped>
.practice-view {
  width: min(100% - 48px, 1040px);
  margin: 0 auto;
  padding: 92px 0 112px;
}

.practice-view__hero {
  display: grid;
  justify-items: start;
  max-width: 720px;
}

.practice-view__hero > p,
.practice-view__checklist p {
  margin: 0 0 14px;
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 700;
}

.practice-view__hero h1,
.practice-view__checklist h2 {
  margin: 0;
  color: var(--aps-ink);
  letter-spacing: -0.045em;
}

.practice-view__hero h1 {
  font-size: clamp(38px, 5vw, 56px);
  line-height: 1.08;
}

.practice-view__hero > span {
  margin-top: 20px;
  color: var(--aps-muted);
  font-size: 16px;
  line-height: 1.75;
}

.practice-view__hero :deep(.app-button-control) {
  margin-top: 28px;
}

.practice-view__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 86px;
}

.practice-card {
  min-height: 282px;
  padding: 28px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 18px;
  background: var(--aps-surface);
}

.practice-card header {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--aps-ink);
  font-size: 13px;
}

.practice-card header span {
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border-radius: 8px;
}

.practice-card.is-recommended header span {
  background: var(--aps-green-soft);
  color: var(--aps-green);
}

.practice-card.is-avoid header span {
  background: var(--aps-red-soft);
  color: var(--aps-red);
}

.practice-card h2,
.practice-card p {
  margin: 0;
}

.practice-card h2 {
  margin-top: 25px;
  color: var(--aps-ink);
  font-size: 21px;
  letter-spacing: -0.025em;
  line-height: 1.4;
}

.practice-card p {
  margin-top: 12px;
  color: var(--aps-muted);
  font-size: 14px;
  line-height: 1.75;
}

.practice-view__checklist {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 72px;
  margin-top: 88px;
  padding: 42px 0;
  border-top: 1px solid var(--aps-line-soft);
  border-bottom: 1px solid var(--aps-line-soft);
}

.practice-view__checklist h2 {
  font-size: 28px;
  line-height: 1.25;
}

.practice-view__checklist ol {
  display: grid;
  gap: 18px;
  margin: 0;
  padding-left: 20px;
  color: var(--aps-muted);
}

.practice-view__checklist li {
  padding-left: 6px;
  font-size: 14px;
  line-height: 1.75;
}

.practice-view__checklist strong {
  color: var(--aps-ink);
}

@media (max-width: 760px) {
  .practice-view {
    width: min(100% - 40px, 1040px);
    padding-top: 58px;
  }

  .practice-view__grid,
  .practice-view__checklist {
    grid-template-columns: 1fr;
  }

  .practice-view__grid {
    margin-top: 56px;
  }

  .practice-view__checklist {
    gap: 32px;
    margin-top: 56px;
  }
}
</style>
