/**
 * 官网首页与全局展示使用的单一数据源。
 * 把版本、组件数、协议、外链等“事实”集中在此，避免像此前那样
 * 在多处硬编码导致口径不一致（曾经同时出现 0.1.1 / 175 / 177 / 185 多种说法）。
 *
 * 注意：LIB_VERSION 需与 aps-design-website 依赖的 aps-design-pro 版本保持一致。
 */

/** 组件库当前版本，需与依赖的 aps-design-pro 版本对齐。 */
export const LIB_VERSION = "0.3.1";

/** 公开组件数量，以组件库 README 的“公开组件”口径为准。 */
export const COMPONENT_COUNT = 175;

/** 组件能力域（分类）数量。 */
export const CATEGORY_COUNT = 9;

/** 开源协议。 */
export const LICENSE = "MIT";

/** Gitee 仓库地址（组件库源码托管处）。 */
export const GITEE_URL = "https://gitee.com/xhyym/aps-design-pro";

/** Gitee Issue 入口，用于反馈问题与参与共建。 */
export const GITEE_ISSUES_URL = "https://gitee.com/xhyym/aps-design-pro/issues";

export interface ComponentCategory {
  /** 与组件库 packages/ui/src/components/<key> 目录对应。 */
  key: string;
  label: string;
  description: string;
}

/**
 * 组件能力域，覆盖组件库全部 9 大类，用于首页生态区展示。
 * 顺序即首页呈现顺序；新增分类时同步更新此处即可。
 */
export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  { key: "base", label: "基础组件", description: "按钮、徽标、图标与文字基础。" },
  { key: "form", label: "表单与选择", description: "输入、选择、日期、校验与搜索控制。" },
  { key: "data", label: "数据展示", description: "表格、分页、图表与统计视图。" },
  { key: "content", label: "内容承载", description: "卡片、标签、描述与富文本。" },
  { key: "navigation", label: "导航", description: "菜单、标签页与面包屑。" },
  { key: "layout", label: "布局", description: "容器、栅格与间距体系。" },
  { key: "charts", label: "图表", description: "折线、柱状与饼图可视化。" },
  { key: "overlay", label: "浮层", description: "弹窗、抽屉与通知。" },
  { key: "feedback", label: "反馈", description: "提示、加载与结果状态。" },
];
