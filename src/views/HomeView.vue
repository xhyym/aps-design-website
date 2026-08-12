<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { AppBadge, AppButton, AppCard, AppCollapse, AppIcon, AppInput } from "aps-design-pro";
import CodePanel from "@/components/CodePanel.vue";
import { ADMIN_DEMO_URL } from "@/data/navigation";
import {
  CATEGORY_COUNT,
  COMPONENT_CATEGORIES,
  COMPONENT_COUNT,
  GITEE_ISSUES_URL,
  GITEE_URL,
  LIB_VERSION,
  LICENSE,
} from "@/data/site";

const heroHeadline = "一款简洁到极致的开源组件库";
const typedHeroHeadline = ref("");
let heroTypingTimerId: number | undefined;

const installCommand = "pnpm add aps-design-pro";

/** 首屏下方的事实指标：用单一数据源，避免像此前那样多处口径不一致。 */
const facts = [
  { value: String(COMPONENT_COUNT), label: "公开组件" },
  { value: String(CATEGORY_COUNT), label: "能力域覆盖" },
  { value: "Vue 3", label: "Composition API" },
  { value: LICENSE, label: "开源协议" },
];

/** 通用后台筛选场景：组件只负责展示，数据来自你的应用。 */
const keyword = ref("订单");
const orders = [
  "订单 1024 · 待发货",
  "订单 1025 · 已付款",
  "退款申请 88 · 待处理",
  "商品 201 · 库存预警",
  "订单 1031 · 待审核",
];
const matched = computed(() => orders.filter((order) => order.includes(keyword.value)));

/** 演示源码跟随实时筛选状态变化，避免展示代码与界面脱节。 */
const componentExampleCode = computed(() =>
  [
    "<" + "script setup lang=\"ts\">",
    'import { ref, computed } from "vue";',
    'import { AppInput, AppBadge } from "aps-design-pro";',
    'import "aps-design-pro/style.css";',
    "",
    `const keyword = ref(${JSON.stringify(keyword.value)});`,
    "// 数据由你的应用持有，组件只负责展示",
    "const orders = [/* 来自接口的订单数据 */];",
    "const matched = computed(() => orders.filter((o) => o.includes(keyword.value)));",
    "<" + "/script>",
    "",
    "<template>",
    '  <AppInput v-model="keyword" placeholder="搜索订单或商品" />',
    '  <AppBadge :value="matched.length">匹配结果</AppBadge>',
    "</template>",
  ].join("\n"),
);

type ResourceIcon = "grid" | "shield" | "users" | "panel";
interface Resource {
  label: string;
  description: string;
  href?: string;
  to?: string;
  icon: ResourceIcon;
}

/** 社区与资源入口，统一在此维护，避免在外链散落。 */
const resources: Resource[] = [
  { label: "Gitee 源码", description: "查看组件库完整源码与更新记录", href: GITEE_URL, icon: "grid" },
  { label: "提交 Issue", description: "反馈问题或提出需求", href: GITEE_ISSUES_URL, icon: "shield" },
  { label: "共建名单", description: "查看公开贡献记录", to: "/contributors", icon: "users" },
  { label: "管理后台演示", description: "打开 APS Design Pro 演示站点", href: ADMIN_DEMO_URL, icon: "panel" },
];

/** 各能力域的统一线性图标，保证视觉风格一致（不再混用真组件与手绘）。 */
const categoryGlyphs: Record<string, string> = {
  base: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>',
  form: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="8" rx="2"/><line x1="7" y1="12" x2="10" y2="12"/></svg>',
  data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="10" x2="9" y2="20"/></svg>',
  content: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h8l4 4v14H6z"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
  navigation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="13" y2="17"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><rect x="16" y="4" width="5" height="16" rx="1"/></svg>',
  charts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="4" y1="20" x2="20" y2="20"/><rect x="6" y="10" width="3" height="10"/><rect x="11" y="6" width="3" height="14"/><rect x="16" y="13" width="3" height="7"/></svg>',
  overlay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="12" height="12" rx="2"/><rect x="8" y="8" width="12" height="12" rx="2"/></svg>',
  feedback: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',
};

const questions = [
  {
    key: "element-plus",
    title: "与 Element Plus / Naive UI 有什么区别？",
    content: "APS Design Pro 面向管理后台的常见工作流，提供统一的表单、表格、导航、反馈与业务组合能力。它保持数据、路由和后端契约由你的应用管理，不替代现有工程架构。",
  },
  {
    key: "vue-version",
    title: "支持 Vue 2 吗？",
    content: "当前组件库基于 Vue 3 与 Composition API 构建。",
  },
  {
    key: "import",
    title: "可以按需引入吗？",
    content: "可以。业务代码按实际使用的组件从 aps-design-pro 导入，样式从 aps-design-pro/style.css 引入。",
  },
  {
    key: "server",
    title: "能接入任意后端吗？",
    content: "可以。组件只处理前端的展示与交互；请求、数据格式、鉴权和接口契约仍由你的应用或服务端决定。",
  },
  {
    key: "contribution",
    title: "如何反馈问题或参与共建？",
    content: "欢迎在 Gitee 仓库提交 Issue 或 Pull Request，并附上最小复现和预期表现，便于快速定位问题。",
  },
];
const openQuestions = ref<string[]>(["element-plus"]);

/** 逐字呈现首屏标题；减少动态效果时直接输出全文，避免干扰阅读。 */
function startHeroTyping(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typedHeroHeadline.value = heroHeadline;
    return;
  }

  let characterIndex = 0;
  const typeNextCharacter = (): void => {
    characterIndex += 1;
    typedHeroHeadline.value = heroHeadline.slice(0, characterIndex);
    if (characterIndex < heroHeadline.length) {
      heroTypingTimerId = window.setTimeout(typeNextCharacter, 76);
    }
  };

  typeNextCharacter();
}

onMounted(startHeroTyping);
onBeforeUnmount(() => window.clearTimeout(heroTypingTimerId));
</script>

<template>
  <main class="home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero__content">
        <span class="home-release"><i aria-hidden="true"></i> v{{ LIB_VERSION }} · 持续维护中</span>
        <h1 id="home-title" :aria-label="heroHeadline">
          <span aria-hidden="true">{{ typedHeroHeadline }}</span><span class="home-hero__caret" aria-hidden="true"></span>
        </h1>
        <p>
          为 Vue 3 管理后台的表单、表格、图表、导航与反馈<br class="home-hero__break" />
          建立统一、可组合的前端基础。
        </p>
        <div class="home-hero__actions">
          <RouterLink to="/guide/architecture">
            <AppButton size="large" trailing-icon="arrow-right">开始使用</AppButton>
          </RouterLink>
          <RouterLink to="/components">
            <AppButton size="large" variant="secondary">浏览组件</AppButton>
          </RouterLink>
        </div>
        <p class="home-hero__note">组件保持独立，业务数据和后端契约仍由你的应用决定。</p>
      </div>

      <CodePanel class="home-install-panel" label="快速安装" :code="installCommand" />
    </section>

    <section class="home-facts" aria-label="组件库基础信息">
      <article v-for="fact in facts" :key="fact.label">
        <strong>{{ fact.value }}</strong>
        <span>{{ fact.label }}</span>
      </article>
    </section>

    <section class="home-section home-purpose" aria-labelledby="purpose-title">
      <div class="home-section__heading">
        <h2 id="purpose-title">把日常后台工作流<br />做得更顺手</h2>
        <p>统一并不意味着限制。组件负责界面细节，页面仍然保持你的业务语言与数据结构。</p>
      </div>

      <div class="home-purpose__body">
        <AppCard class="home-workbench" padding="large" shadow="never">
          <div class="home-workbench__header">
            <div>
              <span>内容管理</span>
              <strong>订单与商品</strong>
            </div>
            <span class="home-workbench__status"><i aria-hidden="true"></i> 系统正常</span>
          </div>
          <div class="home-workbench__search">
            <label for="home-search">搜索订单或商品</label>
            <AppInput
              id="home-search"
              v-model="keyword"
              clearable
              placeholder="搜索订单或商品"
            >
              <template #prefix><AppIcon name="search" :size="16" /></template>
            </AppInput>
          </div>
          <div class="home-workbench__list">
            <p v-for="order in matched" :key="order">{{ order }}</p>
            <p v-if="matched.length === 0" class="home-workbench__empty">没有匹配的结果</p>
          </div>
          <div class="home-workbench__summary">
            <span>当前筛选</span>
            <strong>{{ keyword || "全部" }}</strong>
            <small>组件只负责展示，数据来自你的应用</small>
          </div>
        </AppCard>

        <CodePanel class="home-purpose__code" label="同源演示代码" :code="componentExampleCode" />
      </div>
      <p class="home-purpose__caption">修改上方关键词，右侧代码会同步更新。</p>
    </section>

    <section class="home-eco" aria-labelledby="eco-title">
      <div class="home-eco__intro">
        <div>
          <h2 id="eco-title">从一处开始，覆盖常见界面</h2>
          <p>基础能力、表单录入、数据操作、内容承载与反馈交互都可以在组件目录中按需查看。</p>
        </div>
        <RouterLink to="/components" class="home-text-link">查看全部组件 <AppIcon name="arrow-right" :size="16" /></RouterLink>
      </div>

      <div class="home-eco__grid">
        <RouterLink
          v-for="category in COMPONENT_CATEGORIES"
          :key="category.key"
          to="/components"
          class="home-eco__card"
        >
          <span class="home-eco__glyph" :class="`home-eco__glyph--${category.key}`" v-html="categoryGlyphs[category.key]" />
          <div class="home-eco__meta">
            <h3>{{ category.label }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="home-trust" aria-labelledby="trust-title">
      <div class="home-section__heading home-section__heading--center">
        <h2 id="trust-title">开放、可商用、持续维护</h2>
        <p>以 MIT 协议开源，源码托管于 Gitee，欢迎通过 Issue 与共建名单参与。</p>
      </div>

      <div class="home-trust__grid">
        <component
          :is="resource.href ? 'a' : RouterLink"
          v-for="resource in resources"
          :key="resource.label"
          class="home-trust__card"
          :href="resource.href"
          :target="resource.href ? '_blank' : undefined"
          :rel="resource.href ? 'noopener noreferrer' : undefined"
          :to="resource.to"
        >
          <AppIcon :name="resource.icon" :size="20" />
          <div>
            <h3>{{ resource.label }}</h3>
            <p>{{ resource.description }}</p>
          </div>
        </component>
      </div>

      <p class="home-trust__note">适用于中后台管理系统：ERP、CRM、数据看板与内部工具。</p>
    </section>

    <section class="home-section home-faq" aria-labelledby="faq-title">
      <div class="home-section__heading home-section__heading--center">
        <h2 id="faq-title">常见问题</h2>
        <p>在接入前，先了解这套组件库的适用边界。</p>
      </div>
      <AppCollapse v-model="openQuestions" class="home-faq__collapse" :items="questions" aria-label="常见问题" />
    </section>

    <section class="home-closing" aria-labelledby="closing-title">
      <div>
        <h2 id="closing-title">从第一个清晰的页面开始</h2>
        <p>阅读指南，了解如何把组件接入你自己的业务。</p>
      </div>
      <div class="home-closing__actions">
        <RouterLink to="/guide/architecture"><AppButton size="large" trailing-icon="arrow-right">阅读指南</AppButton></RouterLink>
        <RouterLink to="/contributors"><AppButton size="large" variant="ghost">参与共建</AppButton></RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  overflow: hidden;
  background: var(--aps-surface);
}

.home-hero,
.home-section,
.home-eco,
.home-trust,
.home-closing {
  width: min(100% - 48px, 1120px);
  margin: 0 auto;
}

.home-hero {
  display: grid;
  justify-items: center;
  padding: 112px 0 94px;
  text-align: center;
}

.home-hero__content {
  display: grid;
  justify-items: center;
}

.home-release {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 11px;
  border-radius: 999px;
  background: var(--aps-surface-soft);
  color: var(--aps-muted);
  font-size: 12px;
  font-weight: 600;
}

.home-release i,
.home-workbench__status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--aps-green);
}

h1,
h2,
h3,
p {
  margin: 0;
}

.home-hero h1 {
  max-width: 1000px;
  margin-top: 24px;
  color: var(--aps-ink);
  font-size: clamp(42px, 4.8vw, 60px);
  font-weight: 720;
  letter-spacing: -0.065em;
  line-height: 1.08;
}

.home-hero__caret {
  display: inline-block;
  width: 0.075em;
  height: 0.8em;
  margin-left: 0.08em;
  background: var(--aps-blue);
  vertical-align: -0.03em;
  animation: home-hero-caret 880ms steps(1, end) infinite;
}

@keyframes home-hero-caret {
  0%,
  48% {
    opacity: 1;
  }

  49%,
  100% {
    opacity: 0;
  }
}

.home-hero p {
  max-width: 620px;
  margin-top: 22px;
  color: var(--aps-muted);
  font-size: 17px;
  line-height: 1.72;
}

.home-hero__actions,
.home-closing__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.home-hero__actions {
  margin-top: 32px;
}

.home-hero__note {
  margin-top: 17px !important;
  color: var(--aps-faint) !important;
  font-size: 13px !important;
}

.home-install-panel {
  width: min(100%, 640px);
  margin-top: 48px;
  text-align: left;
}

.home-install-panel :deep(pre) {
  padding: 18px 20px;
  color: #8ee19d;
  font-size: 14px;
}

.home-install-panel :deep(pre)::before {
  margin-right: 10px;
  color: #8b8b91;
  content: "$";
}

.home-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--aps-line-soft);
  border-bottom: 1px solid var(--aps-line-soft);
  background: var(--aps-surface-soft);
}

.home-facts article {
  display: grid;
  justify-items: center;
  gap: 7px;
  padding: 50px 12px;
  text-align: center;
}

.home-facts strong {
  color: var(--aps-ink);
  font-size: 32px;
  font-weight: 720;
  letter-spacing: -0.045em;
}

.home-facts span {
  color: var(--aps-muted);
  font-size: 13px;
}

.home-section {
  padding: 132px 0;
}

.home-section__heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
  align-items: end;
  gap: 48px;
  margin-bottom: 48px;
}

.home-section__heading h2,
.home-eco h2,
.home-trust h2,
.home-closing h2 {
  color: var(--aps-ink);
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.16;
}

.home-section__heading p,
.home-eco__intro p,
.home-trust p,
.home-closing p {
  color: var(--aps-muted);
  font-size: 15px;
  line-height: 1.75;
}

.home-section__heading--center {
  grid-template-columns: minmax(0, 680px);
  justify-content: center;
  text-align: center;
}

.home-section__heading--center p {
  margin-top: 12px;
}

.home-purpose__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
  align-items: stretch;
  gap: 28px;
}

.home-workbench {
  min-height: 370px;
  border-color: var(--aps-line);
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
}

.home-workbench__header,
.home-workbench__summary {
  display: flex;
  align-items: center;
}

.home-workbench__header {
  justify-content: space-between;
}

.home-workbench__header > div {
  display: grid;
  gap: 2px;
}

.home-workbench__header span {
  color: var(--aps-faint);
  font-size: 12px;
}

.home-workbench__header strong {
  color: var(--aps-ink);
  font-size: 19px;
  letter-spacing: -0.025em;
}

.home-workbench__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 7px;
  background: var(--aps-green-soft);
  color: var(--aps-green) !important;
  font-size: 11px !important;
  font-weight: 650;
}

.home-workbench__search {
  display: grid;
  gap: 7px;
  margin-top: 34px;
}

.home-workbench__search label {
  color: var(--aps-muted);
  font-size: 12px;
  font-weight: 650;
}

.home-workbench__list {
  display: grid;
  gap: 8px;
  margin-top: 18px;
  max-height: 168px;
  overflow-y: auto;
  padding-right: 4px;
}

.home-workbench__list p {
  padding: 10px 12px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 9px;
  background: var(--aps-surface);
  color: var(--aps-ink);
  font-size: 13px;
}

.home-workbench__empty {
  color: var(--aps-faint) !important;
  border-style: dashed !important;
  text-align: center;
}

.home-workbench__summary {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 10px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--aps-line-soft);
}

.home-workbench__summary span,
.home-workbench__summary small {
  color: var(--aps-faint);
  font-size: 12px;
}

.home-workbench__summary strong {
  color: var(--aps-ink);
  font-size: 13px;
  font-weight: 680;
}

.home-workbench__summary small {
  grid-column: 1 / -1;
  margin-top: 4px;
}

.home-purpose__code {
  min-height: 370px;
}

.home-purpose__code :deep(pre) {
  height: calc(100% - 46px);
  padding: 20px 22px;
  font-size: 12px;
  line-height: 1.78;
}

.home-purpose__caption {
  margin-top: 16px;
  color: var(--aps-faint);
  font-size: 12px;
  text-align: center;
}

.home-eco {
  padding: 132px 0;
}

.home-eco__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 44px;
}

.home-eco__intro p {
  max-width: 600px;
  margin-top: 12px;
}

.home-text-link {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
  color: var(--aps-blue);
  font-size: 14px;
  font-weight: 650;
}

.home-eco__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.home-eco__card {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  padding: 22px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 16px;
  background: var(--aps-surface);
  color: inherit;
  text-decoration: none;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.home-eco__card:hover,
.home-eco__card:focus-visible {
  border-color: var(--aps-blue);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -18px rgba(0, 113, 227, 0.55);
  outline: 0;
}

.home-eco__glyph {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 11px;
  background: var(--aps-surface-soft);
  color: var(--aps-blue);
}

.home-eco__glyph :deep(svg) {
  width: 24px;
  height: 24px;
}

.home-eco__meta h3 {
  color: var(--aps-ink);
  font-size: 16px;
  font-weight: 700;
}

.home-eco__meta p {
  margin-top: 4px;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.6;
}

.home-trust {
  padding: 132px 0;
}

.home-trust__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.home-trust__card {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 16px;
  background: var(--aps-surface);
  color: var(--aps-blue);
  text-decoration: none;
  transition: border-color 180ms ease, transform 180ms ease;
}

.home-trust__card:hover,
.home-trust__card:focus-visible {
  border-color: var(--aps-blue);
  transform: translateY(-2px);
  outline: 0;
}

.home-trust__card :deep(svg) {
  width: 22px;
  height: 22px;
}

.home-trust__card h3 {
  margin: 0;
  color: var(--aps-ink);
  font-size: 16px;
  font-weight: 700;
}

.home-trust__card p {
  margin-top: 4px;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.6;
}

.home-trust__note {
  margin-top: 28px;
  text-align: center;
  color: var(--aps-faint);
  font-size: 13px;
}

.home-faq {
  max-width: 760px;
  padding-top: 0;
}

.home-faq__collapse {
  margin-top: 42px;
}

.home-closing {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 124px;
  padding: 56px 64px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 24px;
  background: var(--aps-surface-soft);
}

.home-closing p {
  margin-top: 10px;
}

.home-closing__actions {
  flex: 0 0 auto;
}

@media (max-width: 840px) {
  .home-hero,
  .home-section,
  .home-eco,
  .home-trust,
  .home-closing {
    width: min(100% - 40px, 1120px);
  }

  .home-hero {
    padding-top: 84px;
  }

  .home-purpose__body,
  .home-section__heading {
    grid-template-columns: 1fr;
  }

  .home-section__heading {
    gap: 16px;
  }

  .home-eco__intro {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
  }

  .home-eco__grid {
    grid-template-columns: 1fr;
  }

  .home-trust__grid {
    grid-template-columns: 1fr;
  }

  .home-closing {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .home-hero,
  .home-section,
  .home-eco,
  .home-trust,
  .home-closing {
    width: min(100% - 32px, 1120px);
  }

  .home-hero {
    padding: 68px 0 64px;
  }

  .home-hero h1 {
    font-size: 42px;
    letter-spacing: -0.055em;
    min-height: 2.16em;
  }

  .home-hero p {
    font-size: 15px;
  }

  .home-hero__break {
    display: none;
  }

  .home-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-facts article {
    padding: 30px 10px;
  }

  .home-facts strong {
    font-size: 25px;
  }

  .home-section,
  .home-eco,
  .home-trust {
    padding: 82px 0;
  }

  .home-workbench :deep(.card-content) {
    padding: 22px;
  }

  .home-purpose__code :deep(pre) {
    font-size: 11px;
  }

  .home-closing {
    gap: 28px;
    margin-bottom: 72px;
    padding: 38px 26px;
  }

  .home-closing__actions {
    justify-content: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-hero__caret {
    animation: none;
  }

  .home-eco__card,
  .home-trust__card {
    transition: none;
  }
}
</style>
