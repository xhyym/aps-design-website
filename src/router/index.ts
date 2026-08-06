import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { componentDocuments } from "@/content/markdown";

/** 官网初期使用 Hash 路由，静态部署时不要求服务器额外配置重写规则。 */
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Vue 3 管理后台组件库" },
  },
  {
    path: "/guide",
    redirect: "/guide/architecture",
  },
  {
    path: "/guide/:slug",
    name: "guide-document",
    component: () => import("@/views/DocumentView.vue"),
    props: { kind: "guide" },
    meta: { title: "指南" },
  },
  {
    path: "/components",
    name: "components",
    redirect: () => componentDocuments[0]?.route ?? "/",
    meta: { title: "组件" },
  },
  {
    path: "/components/:category/:slug",
    name: "component-document",
    component: () => import("@/views/DocumentView.vue"),
    props: { kind: "component" },
    meta: { title: "组件" },
  },
  {
    path: "/sponsor",
    name: "sponsor",
    component: () => import("@/views/SponsorView.vue"),
    meta: { title: "赞助" },
  },
  {
    path: "/best-practices",
    name: "best-practices",
    component: () => import("@/views/BestPracticesView.vue"),
    meta: { title: "最佳实践" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.afterEach((to) => {
  document.title = `${String(to.meta.title ?? "APS Design Pro")} · APS Design Pro`;
});

export default router;
