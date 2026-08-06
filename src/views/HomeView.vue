<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import {
  AppBadge,
  AppButton,
  AppCard,
  AppCollapse,
  AppIcon,
  AppInput,
} from "aps-design-pro";
import CodePanel from "@/components/CodePanel.vue";

const pendingReviewCount = ref(7);
const courseKeyword = ref("Vue 3");
const openQuestions = ref<string[]>(["element-plus"]);
const installCommand = "pnpm add aps-design-pro";
const heroHeadline = "一款简洁到极致的开源组件库";
const typedHeroHeadline = ref("");
let heroTypingTimerId: number | undefined;

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

/** 演示源码跟随实时预览的状态变化，避免展示代码与界面脱节。 */
const componentExampleCode = computed(() => [
  "<" + "script setup lang=\"ts\">",
  "import { ref } from \"vue\";",
  "import { AppBadge, AppButton, AppInput } from \"aps-design-pro\";",
  "import \"aps-design-pro/style.css\";",
  "",
  `const courseKeyword = ref(${JSON.stringify(courseKeyword.value)});`,
  `const pendingReviewCount = ref(${pendingReviewCount.value});`,
  "<" + "/script>",
  "",
  "<template>",
  "  <AppInput v-model=\"courseKeyword\" placeholder=\"搜索课程或讲师\" />",
  "",
  "  <AppBadge :value=\"pendingReviewCount\" :max=\"99\" tone=\"orange\">",
  "    <AppButton variant=\"secondary\">待审核课程</AppButton>",
  "  </AppBadge>",
  "",
  "  <AppButton @click=\"pendingReviewCount += 1\">新建课程</AppButton>",
  "</template>",
].join("\n"));

function increasePendingReviewCount(): void {
  pendingReviewCount.value = Math.min(99, pendingReviewCount.value + 1);
}

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
        <span class="home-release"><i aria-hidden="true"></i> v0.1.1 · 持续维护中</span>
        <h1 id="home-title" :aria-label="heroHeadline">
          <span aria-hidden="true">{{ typedHeroHeadline }}</span><span class="home-hero__caret" aria-hidden="true"></span>
        </h1>
        <p>
          一款果子风味儿的 Vue 3 管理后台组件库。<br class="home-hero__break" />
          为表单、表格、图表、导航和反馈建立统一的前端基础。
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
      <article>
        <strong>177</strong>
        <span>组件导出入口</span>
      </article>
      <article>
        <strong>Vue 3</strong>
        <span>Composition API</span>
      </article>
      <article>
        <strong>TypeScript</strong>
        <span>完整类型定义</span>
      </article>
      <article>
        <strong>按需导入</strong>
        <span>按业务需要接入</span>
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
              <span>课程中心</span>
              <strong>内容审核</strong>
            </div>
            <span class="home-workbench__status"><i aria-hidden="true"></i> 系统正常</span>
          </div>
          <div class="home-workbench__search">
            <label for="home-course-search">搜索待处理内容</label>
            <AppInput
              id="home-course-search"
              v-model="courseKeyword"
              clearable
              placeholder="搜索课程或讲师"
            >
              <template #prefix><AppIcon name="search" :size="16" /></template>
            </AppInput>
          </div>
          <div class="home-workbench__actions">
            <AppBadge :value="pendingReviewCount" :max="99" tone="orange">
              <AppButton variant="secondary">待审核课程</AppButton>
            </AppBadge>
            <AppButton leading-icon="plus" @click="increasePendingReviewCount">新建课程</AppButton>
          </div>
          <div class="home-workbench__summary">
            <span>当前筛选</span>
            <strong>{{ courseKeyword || "全部课程" }}</strong>
            <small>组件表现与业务数据彼此独立</small>
          </div>
        </AppCard>

        <CodePanel class="home-purpose__code" label="同源演示代码" :code="componentExampleCode" />
      </div>
      <p class="home-purpose__caption">修改左侧的关键词或点击“新建课程”，右侧代码会同步更新。</p>
    </section>

    <section class="home-section home-design" aria-labelledby="design-title">
      <div class="home-section__heading home-section__heading--center">
        <h2 id="design-title">让界面保持克制<br />让业务自由生长</h2>
        <p>设计系统应减少重复决策，而不是把应用锁进固定模板。</p>
      </div>

      <div class="home-design__principles">
        <article class="home-design__principle">
          <span class="home-design__signal is-positive"><AppIcon name="check" :size="16" /></span>
          <div>
            <h3>从基础层开始</h3>
            <p>表单、数据展示、导航和反馈共享同一套尺度、状态与交互节奏，业务页面不再各自修补细节。</p>
          </div>
        </article>
        <article class="home-design__principle">
          <span class="home-design__signal is-positive"><AppIcon name="check" :size="16" /></span>
          <div>
            <h3>组件可单独使用</h3>
            <p>按页面实际需求导入，不要求把路由、状态管理、请求封装或项目骨架一并替换。</p>
          </div>
        </article>
        <article class="home-design__principle">
          <span class="home-design__signal is-neutral"><AppIcon name="close" :size="16" /></span>
          <div>
            <h3>不隐藏业务状态</h3>
            <p>请求、权限、数据加载和错误恢复由业务应用明确管理，组件只提供清楚的呈现与操作边界。</p>
          </div>
        </article>
        <article class="home-design__principle">
          <span class="home-design__signal is-neutral"><AppIcon name="close" :size="16" /></span>
          <div>
            <h3>不绑定特定后端</h3>
            <p>对接 REST、RPC 或既有服务均可；数据结构和接口格式始终留在你的项目内。</p>
          </div>
        </article>
      </div>
    </section>

    <section class="home-ecosystem" aria-labelledby="ecosystem-title">
      <div class="home-ecosystem__intro">
        <div>
          <h2 id="ecosystem-title">从一处开始，覆盖常见界面</h2>
          <p>基础能力、表单录入、数据操作、内容承载与反馈交互都可以在组件目录中按需查看。</p>
        </div>
        <RouterLink to="/components" class="home-text-link">查看全部组件 <AppIcon name="arrow-right" :size="16" /></RouterLink>
      </div>

      <div class="home-ecosystem__rows">
        <article>
          <span class="home-ecosystem__icon"><AppButton size="small">按钮</AppButton></span>
          <div><h3>基础组件</h3><p>按钮、徽标、图标、文字与布局基础。</p></div>
          <span class="home-ecosystem__name">AppButton · AppBadge</span>
        </article>
        <article>
          <span class="home-ecosystem__icon"><AppInput model-value="" size="small" placeholder="输入内容" aria-label="输入框预览" /></span>
          <div><h3>表单与选择</h3><p>输入、选择、日期、校验与搜索控制。</p></div>
          <span class="home-ecosystem__name">AppInput · AppSelect</span>
        </article>
        <article>
          <span class="home-ecosystem__icon home-ecosystem__icon--table"><i></i><i></i><i></i></span>
          <div><h3>数据展示</h3><p>表格、分页、图表、统计与视图配置。</p></div>
          <span class="home-ecosystem__name">AppTable · AppChart</span>
        </article>
        <article>
          <span class="home-ecosystem__icon home-ecosystem__icon--notice"><AppIcon name="check" :size="16" /></span>
          <div><h3>反馈与浮层</h3><p>弹窗、抽屉、通知、确认与任务引导。</p></div>
          <span class="home-ecosystem__name">AppDialog · AppMessage</span>
        </article>
      </div>
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
        <p>安装组件库，查看指南，再根据自己的业务逐步扩展。</p>
      </div>
      <div class="home-closing__actions">
        <RouterLink to="/guide/architecture"><AppButton size="large" trailing-icon="arrow-right">阅读指南</AppButton></RouterLink>
        <RouterLink to="/components"><AppButton size="large" variant="ghost">查看组件目录</AppButton></RouterLink>
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
.home-ecosystem,
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
  width: .075em;
  height: .8em;
  margin-left: .08em;
  background: var(--aps-blue);
  vertical-align: -.03em;
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
.home-workbench__actions,
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
  grid-template-columns: minmax(0, 1fr) minmax(0, .72fr);
  align-items: end;
  gap: 48px;
  margin-bottom: 48px;
}

.home-section__heading h2,
.home-ecosystem h2,
.home-closing h2 {
  color: var(--aps-ink);
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.16;
}

.home-section__heading p,
.home-ecosystem__intro p,
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
  grid-template-columns: minmax(0, 1fr) minmax(0, .92fr);
  align-items: stretch;
  gap: 28px;
}

.home-workbench {
  min-height: 370px;
  border-color: var(--aps-line);
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
}

.home-workbench__header,
.home-workbench__actions,
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

.home-workbench__actions {
  justify-content: flex-start;
  margin-top: 20px;
}

.home-workbench__summary {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 10px;
  margin-top: 38px;
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

.home-design {
  width: 100%;
  padding: 128px max(24px, calc((100% - 1120px) / 2));
  background: var(--aps-surface-soft);
}

.home-design__principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--aps-line-soft);
  border-radius: 20px;
  background: var(--aps-line-soft);
}

.home-design__principle {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 14px;
  min-height: 158px;
  padding: 28px;
  background: var(--aps-surface);
}

.home-design__signal {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 8px;
}

.home-design__signal.is-positive {
  background: var(--aps-green-soft);
  color: var(--aps-green);
}

.home-design__signal.is-neutral {
  background: var(--aps-red-soft);
  color: var(--aps-red);
}

.home-design__principle h3 {
  color: var(--aps-ink);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.home-design__principle p {
  margin-top: 8px;
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.75;
}

.home-ecosystem {
  padding: 132px 0;
}

.home-ecosystem__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 44px;
}

.home-ecosystem__intro p {
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

.home-ecosystem__rows {
  border-top: 1px solid var(--aps-line-soft);
}

.home-ecosystem__rows article {
  display: grid;
  grid-template-columns: 126px minmax(0, 1fr) minmax(180px, .65fr);
  align-items: center;
  gap: 32px;
  min-height: 114px;
  border-bottom: 1px solid var(--aps-line-soft);
}

.home-ecosystem__icon {
  display: grid;
  width: 126px;
  min-height: 54px;
  place-items: center;
}

.home-ecosystem__icon :deep(.app-input-field) {
  width: 118px;
}

.home-ecosystem__icon--table {
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 76px;
  min-height: 42px;
  padding: 5px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 8px;
  background: var(--aps-surface-soft);
}

.home-ecosystem__icon--table i {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: repeating-linear-gradient(to bottom, rgba(29, 29, 31, .12) 0 4px, transparent 4px 9px);
}

.home-ecosystem__icon--notice {
  width: 38px;
  min-height: 38px;
  border-radius: 10px;
  background: var(--aps-blue);
  color: #ffffff;
}

.home-ecosystem__rows h3 {
  color: var(--aps-ink);
  font-size: 16px;
  font-weight: 700;
}

.home-ecosystem__rows p,
.home-ecosystem__name {
  color: var(--aps-muted);
  font-size: 13px;
  line-height: 1.65;
}

.home-ecosystem__rows p {
  margin-top: 4px;
}

.home-ecosystem__name {
  justify-self: end;
  color: var(--aps-faint);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  text-align: right;
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
  .home-ecosystem,
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

  .home-ecosystem__rows article {
    grid-template-columns: 100px minmax(0, 1fr);
    gap: 20px;
  }

  .home-ecosystem__name {
    display: none;
  }

  .home-closing {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .home-hero,
  .home-section,
  .home-ecosystem,
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
  .home-ecosystem {
    padding: 82px 0;
  }

  .home-design {
    padding: 82px 16px;
  }

  .home-design__principles {
    grid-template-columns: 1fr;
  }

  .home-design__principle {
    min-height: auto;
    padding: 22px;
  }

  .home-ecosystem__intro {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
  }

  .home-ecosystem__rows article {
    grid-template-columns: 78px minmax(0, 1fr);
    gap: 12px;
    min-height: 98px;
  }

  .home-ecosystem__icon {
    width: 78px;
  }

  .home-ecosystem__icon :deep(.app-input-field) {
    width: 76px;
  }

  .home-workbench :deep(.card-content) {
    padding: 22px;
  }

  .home-workbench__header {
    align-items: flex-start;
    gap: 12px;
  }

  .home-workbench__status {
    flex: 0 0 auto;
  }

  .home-workbench__actions {
    justify-content: flex-start;
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
  .home-workbench {
    background: var(--aps-surface);
  }

  .home-hero__caret {
    animation: none;
  }
}
</style>
