<script setup lang="ts">
import { useRouter } from "vue-router";
import { AppButton, AppCard, AppIcon } from "aps-design-pro";

const router = useRouter();

function openGiteeProject(): void {
  window.open("https://gitee.com/xhyym/aps-design-pro", "_blank", "noopener,noreferrer");
}
</script>

<template>
  <main class="support-view">
    <section class="support-view__hero" aria-labelledby="support-title">
      <p>赞助项目</p>
      <h1 id="support-title">让组件维护有持续的时间和反馈。</h1>
      <span>赞助用于支持组件维护、文档完善、问题排查与示例建设。当前赞助方式将在项目仓库持续更新。</span>
      <div>
        <AppButton @click="openGiteeProject">前往 Gitee 项目</AppButton>
        <AppButton variant="secondary" @click="router.push('/best-practices')">查看最佳实践</AppButton>
      </div>
    </section>

    <section class="support-view__details" aria-label="参与方式">
      <AppCard shadow="never">
        <AppIcon name="users" :size="22" />
        <h2>提出真实场景</h2>
        <p>组件库优先解决实际管理后台的重复问题。清晰描述业务上下文、期望行为和复现步骤，比泛泛的需求更有价值。</p>
      </AppCard>
      <AppCard shadow="never">
        <AppIcon name="shield" :size="22" />
        <h2>帮助验证边界</h2>
        <p>复杂表格、表单与浮层需要不同浏览器、屏幕和业务组合的反馈，才能持续保持稳定的交互契约。</p>
      </AppCard>
      <AppCard shadow="never">
        <AppIcon name="panel" :size="22" />
        <h2>完善文档与示例</h2>
        <p>每个高质量案例都会沉淀为可以直接使用的 Markdown、真实预览和源码，减少后来者的试错成本。</p>
      </AppCard>
    </section>
  </main>
</template>

<style scoped>
.support-view {
  width: min(100% - 48px, 1120px);
  margin: 0 auto;
  padding: 92px 0 108px;
}

.support-view__hero {
  max-width: 700px;
}

.support-view__hero > p {
  margin: 0 0 14px;
  color: var(--aps-blue);
  font-size: 13px;
  font-weight: 700;
}

.support-view__hero h1 {
  margin: 0;
  color: var(--aps-ink);
  font-size: clamp(38px, 5vw, 56px);
  letter-spacing: -0.05em;
  line-height: 1.08;
}

.support-view__hero > span {
  display: block;
  max-width: 620px;
  margin-top: 20px;
  color: var(--aps-muted);
  font-size: 16px;
  line-height: 1.75;
}

.support-view__hero > div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.support-view__details {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 88px;
}

.support-view__details :deep(.app-card-control) {
  min-height: 246px;
}

.support-view__details :deep(.card-content) {
  display: grid;
  align-content: start;
}

.support-view__details :deep(svg) {
  margin-bottom: 36px;
  color: var(--aps-blue);
}

.support-view__details h2,
.support-view__details p {
  margin: 0;
}

.support-view__details h2 {
  color: var(--aps-ink);
  font-size: 19px;
  letter-spacing: -0.02em;
}

.support-view__details p {
  margin-top: 11px;
  color: var(--aps-muted);
  font-size: 14px;
  line-height: 1.75;
}

@media (max-width: 760px) {
  .support-view {
    width: min(100% - 40px, 1120px);
    padding-top: 58px;
  }

  .support-view__details {
    grid-template-columns: 1fr;
    margin-top: 54px;
  }
}
</style>
