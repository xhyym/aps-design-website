export type WebsiteIcon = "search" | "grid" | "panel" | "users" | "shield" | "settings";

export interface WebsiteNavigationItem {
  label: string;
  path: string;
  icon: WebsiteIcon;
  /** 外部站点地址；设置后由导航以普通链接打开，不参与站内路由匹配。 */
  externalUrl?: string;
}

export interface WebsiteSearchEntry extends WebsiteNavigationItem {
  description: string;
}

/** 管理后台演示地址，官网所有最佳实践入口共用这一份配置。 */
export const ADMIN_DEMO_URL = "https://admin.apsdesignpro.com/";

export const WEBSITE_NAVIGATION: WebsiteNavigationItem[] = [
  { label: "首页", path: "/", icon: "grid" },
  { label: "指南", path: "/guide/architecture", icon: "panel" },
  { label: "组件", path: "/components", icon: "grid" },
  { label: "赞助", path: "/sponsor", icon: "users" },
  { label: "最佳实践", path: "/best-practices", icon: "shield", externalUrl: ADMIN_DEMO_URL },
  { label: "共建", path: "/contributors", icon: "users" },
];

export const WEBSITE_SEARCH_ENTRIES: WebsiteSearchEntry[] = [
  { label: "首页", path: "/", icon: "grid", description: "了解 APS Design Pro 的定位与接入方式" },
  { label: "快速开始", path: "/guide/architecture", icon: "panel", description: "查看项目结构、导入方式与开发约定" },
  { label: "组件目录", path: "/components", icon: "grid", description: "按能力域浏览公开组件与使用说明" },
  { label: "赞助支持", path: "/sponsor", icon: "users", description: "了解项目维护与赞助方式" },
  { label: "最佳实践", path: "/best-practices", icon: "shield", externalUrl: ADMIN_DEMO_URL, description: "打开 APS Design Pro 管理后台演示" },
  { label: "共建名单", path: "/contributors", icon: "users", description: "查看官网、组件与后台模板的公开贡献记录" },
];
