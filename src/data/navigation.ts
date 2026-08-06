export type WebsiteIcon = "search" | "grid" | "panel" | "users" | "shield" | "settings";

export interface WebsiteNavigationItem {
  label: string;
  path: string;
  icon: WebsiteIcon;
}

export interface WebsiteSearchEntry extends WebsiteNavigationItem {
  description: string;
}

export const WEBSITE_NAVIGATION: WebsiteNavigationItem[] = [
  { label: "首页", path: "/", icon: "grid" },
  { label: "指南", path: "/guide/architecture", icon: "panel" },
  { label: "组件", path: "/components", icon: "grid" },
  { label: "赞助", path: "/sponsor", icon: "users" },
  { label: "最佳实践", path: "/best-practices", icon: "shield" },
];

export const WEBSITE_SEARCH_ENTRIES: WebsiteSearchEntry[] = [
  { label: "首页", path: "/", icon: "grid", description: "了解 APS Design Pro 的定位与接入方式" },
  { label: "快速开始", path: "/guide/architecture", icon: "panel", description: "查看项目结构、导入方式与开发约定" },
  { label: "组件目录", path: "/components", icon: "grid", description: "按能力域浏览公开组件与使用说明" },
  { label: "赞助支持", path: "/sponsor", icon: "users", description: "了解项目维护与赞助方式" },
  { label: "最佳实践", path: "/best-practices", icon: "shield", description: "查看接入、组合与维护建议" },
];
