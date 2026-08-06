# 组件架构

仓库使用 pnpm Workspace：`packages/ui` 是唯一可发布包，`apps/admin-demo` 是保留接口适配、路由、状态和 JSON 数据的后台成品。组件源码按能力域物理组织；`packages/ui/src/components/index.ts` 是全量公共入口，分类目录中的 `index.ts` 是对应能力域的公共入口。组件根目录不再存放 `.vue` 源码文件，页面和业务模块的导入路径必须包含所属能力域。

| 分类目录 | 职责 | 代表组件 |
| --- | --- | --- |
| `packages/ui/src/components/base` | 按钮、图标与基础视觉原子 | `AppButton`、`AppIcon`、`AppBadge` |
| `packages/ui/src/components/form` | 表单录入、选择与校验 | `AppCalendar`、`AppDatePicker`、`AppTimePicker`、`AppDateTimePicker`、`AppSlider`、`AppForm` |
| `packages/ui/src/components/data` | 表格、分页、统计、状态、折叠内容与大数据列表 | `AppDataTable`、`AppPagination`、`AppStatistic`、`AppCollapse`、`AppVirtualList`、`AppInfiniteScroll` |
| `packages/ui/src/components/navigation` | 菜单、面包屑、页签、页面定位、吸顶和引导 | `AppSidebarMenu`、`AppTabs`、`AppBreadcrumb`、`AppAnchor`、`AppAffix`、`AppTour` |
| `packages/ui/src/components/feedback` | 加载、结果、提示与空状态 | `AppAlert`、`AppToast`、`AppStatePanel` |
| `packages/ui/src/components/overlay` | 抽屉、弹窗、浮层与提示 | `AppDrawer`、`AppDialog`、`AppPopover` |
| `packages/ui/src/components/content` | 上传、媒体、内容编辑与业务记录展示 | `AppUpload`、`AppVideoPlayer`、`AppRichTextEditor`、`AppTimeline` |
| `packages/ui/src/components/charts` | ECharts 数据图表 | `AppLineChart`、`AppBarChart`、`AppDonutChart` |
| `packages/ui/src/components/layout` | 卡片、页头和页面内容骨架 | `AppCard`、`AppPageHeader`、`AppPageContent` |

新增组件必须放入对应能力目录，并接入一个组件示例路由或真实业务页面。业务页面优先从分类 `index.ts` 导入；组件内部使用包内相对路径依赖，禁止引用后台的状态、路由、接口或业务类型。组件继续使用 Vue 原生能力和设计令牌实现，不强制引入第三方 UI 运行时。

## 导入约定

```ts
import { AppDatePicker, AppDataTable, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";
```

禁止新增页面直接从组件根目录引用 `.vue` 文件，也禁止在 `packages/ui/src/components` 根目录新增 `.vue` 文件。分类目录是唯一的组件源码归属与公开导入路径。

## 路由加载约定

`apps/admin-demo/src/router/index.ts` 只静态引入应用布局壳；登录、业务、组件案例和异常页面统一使用 `() => import(...)` 作为路由组件。这样首屏只加载当前访问所需的页面代码，新增案例不会扩大入口包。

页面路由不得额外使用 `defineAsyncComponent` 包装动态导入。`KeepAlive` 仍以路由 `meta.cacheName` 与 SFC 名称匹配为准，保持页签缓存、刷新和关闭缓存的既有行为。
