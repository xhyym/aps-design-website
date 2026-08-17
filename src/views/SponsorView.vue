<script setup lang="ts">
import { ref } from "vue";
import { AppAvatar, AppButton, AppCard, AppIcon } from "aps-design-pro";
import { ADMIN_DEMO_URL } from "@/data/navigation";
import { SPONSOR_QR_CODES, SPONSORS, type SponsorItem } from "@/content/sponsors";

function openGiteeProject(): void {
  window.open("https://gitee.com/xhyym/aps-design-pro", "_blank", "noopener,noreferrer");
}

/** 收款码主图加载失败时回退到占位图。 */
function onQrError(event: Event, fallback: string): void {
  const image = event.target as HTMLImageElement;
  if (image.src !== fallback && !image.dataset.fallback) {
    image.dataset.fallback = "1";
    image.src = fallback;
  }
}

/** 赞助墙双份渲染实现无缝滚动。 */
const marqueeItems: SponsorItem[] = [...SPONSORS, ...SPONSORS];

/** 公司赞助默认展示 Logo，个人或缺失时展示名称首字母。 */
function initialsOf(sponsor: SponsorItem): string {
  return sponsor.name.trim().slice(0, 1);
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
        <a :href="ADMIN_DEMO_URL" target="_blank" rel="noopener noreferrer">
          <AppButton variant="secondary">查看最佳实践</AppButton>
        </a>
      </div>
    </section>

    <section class="support-view__qrcode" aria-labelledby="qrcode-title">
      <div class="support-view__section-head">
        <p>扫码支持</p>
        <h2 id="qrcode-title">你的每一笔支持，都会让项目走得更远。</h2>
        <span>金额随心，备注随意。赞助记录会以公开方式展示在下方名单中。</span>
      </div>
      <div class="support-view__qrcode-grid">
        <AppCard
          v-for="code in SPONSOR_QR_CODES"
          :key="code.label"
          class="qr-card"
          shadow="hover"
          interactive
        >
          <div class="qr-card__body">
            <AppIcon name="shield" :size="20" />
            <h3>{{ code.label }}</h3>
            <span>{{ code.hint }}</span>
          </div>
          <div class="qr-card__image">
            <img :src="code.image" :alt="code.label + '收款码'" @error="onQrError($event, code.fallback)" />
          </div>
        </AppCard>
      </div>
    </section>

    <section class="support-view__sponsors" aria-labelledby="sponsors-title">
      <div class="support-view__section-head">
        <p>赞助名单</p>
        <h2 id="sponsors-title">感谢每一位支持者。</h2>
        <span>点击公司卡片可前往其官网；个人赞助以首字母展示，无跳转。</span>
      </div>
      <div class="sponsor-marquee" aria-label="赞助列表走马灯">
        <div class="sponsor-marquee__track">
          <a
            v-for="(sponsor, index) in marqueeItems"
            :key="sponsor.name + '-' + index"
            class="sponsor-card"
            :class="{ 'sponsor-card--link': sponsor.url }"
            :href="sponsor.url || undefined"
            :target="sponsor.url ? '_blank' : undefined"
            :rel="sponsor.url ? 'noopener noreferrer' : undefined"
          >
            <AppAvatar
              :src="sponsor.avatar || undefined"
              :initials="initialsOf(sponsor)"
              :size="44"
            />
            <div class="sponsor-card__meta">
              <strong>{{ sponsor.name }}</strong>
              <span>{{ sponsor.description || (sponsor.tier === 'company' ? '企业赞助' : '个人赞助') }}</span>
            </div>
            <AppIcon
              v-if="sponsor.url"
              class="sponsor-card__arrow"
              name="arrow-right"
              :size="14"
            />
          </a>
        </div>
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

.support-view__hero > p,
.support-view__section-head > p {
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

.support-view__hero > span,
.support-view__section-head > span {
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

.support-view__section-head {
  max-width: 640px;
}

.support-view__section-head h2 {
  margin: 0;
  color: var(--aps-ink);
  font-size: clamp(24px, 3vw, 32px);
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.support-view__qrcode {
  margin-top: 96px;
}

.support-view__qrcode-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 320px));
  gap: 20px;
  margin-top: 40px;
}

.qr-card :deep(.app-card-control) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 200px;
  align-items: center;
  gap: 20px;
  min-height: 220px;
  padding: 24px;
}

.qr-card__body {
  display: grid;
  justify-items: start;
  gap: 6px;
}

.qr-card__body :deep(svg) {
  color: var(--aps-blue);
  margin-bottom: 8px;
}

.qr-card__body h3 {
  margin: 0;
  color: var(--aps-ink);
  font-size: 18px;
  letter-spacing: -0.02em;
}

.qr-card__body span {
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.6;
}

.qr-card__image {
  border: 1px solid var(--aps-line-soft);
  border-radius: 12px;
  overflow: hidden;
  background: var(--aps-surface-soft);
}

.qr-card__image img {
  display: block;
  width: 100%;
  height: auto;
}

.support-view__sponsors {
  margin-top: 96px;
}

.sponsor-marquee {
  margin-top: 40px;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

.sponsor-marquee__track {
  display: flex;
  gap: 16px;
  width: max-content;
  padding: 8px 0;
  animation: sponsor-marquee 32s linear infinite;
}

.sponsor-marquee:hover .sponsor-marquee__track {
  animation-play-state: paused;
}

@keyframes sponsor-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 8px));
  }
}

.sponsor-card {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 280px;
  padding: 14px 18px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 14px;
  background: var(--aps-surface-soft);
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.sponsor-card--link:hover {
  border-color: var(--aps-blue);
  transform: translateY(-2px);
}

.sponsor-card__meta {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.sponsor-card__meta strong {
  color: var(--aps-ink);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sponsor-card__meta span {
  color: var(--aps-faint);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sponsor-card__arrow {
  margin-left: auto;
  color: var(--aps-blue);
  flex-shrink: 0;
}

.support-view__details {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 96px;
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

  .support-view__qrcode {
    margin-top: 64px;
  }

  .support-view__qrcode-grid {
    grid-template-columns: 1fr;
  }

  .qr-card :deep(.app-card-control) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .qr-card__body {
    justify-items: center;
  }

  .qr-card__image {
    width: 180px;
  }

  .support-view__details {
    grid-template-columns: 1fr;
    margin-top: 64px;
  }
}
</style>
