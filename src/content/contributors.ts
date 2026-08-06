import MarkdownIt from "markdown-it";
import contributorSource from "../../docs/contributors.md?raw";

export type ContributorCategoryId = "website" | "components" | "admin-demo";

export interface ContributorCategory {
  id: ContributorCategoryId;
  title: string;
  description: string;
  content: string;
}

export interface ContributorRoster {
  title: string;
  introduction: string;
  updatedAt: string;
  categories: ContributorCategory[];
}

interface ContributorCategoryDefinition {
  id: ContributorCategoryId;
  title: string;
  description: string;
}

interface ParsedContributorSource {
  frontmatter: Record<string, string>;
  body: string;
}

const CONTRIBUTOR_CATEGORY_DEFINITIONS: readonly ContributorCategoryDefinition[] = [
  {
    id: "website",
    title: "官网建设",
    description: "记录官网的信息架构、视觉设计、交互实现与文档站能力建设。",
  },
  {
    id: "components",
    title: "组件拓展",
    description: "记录组件、类型、主题、测试与组件文档的新增和维护。",
  },
  {
    id: "admin-demo",
    title: "后台管理模板",
    description: "记录业务页面、管理后台模板、数据适配与组合场景的贡献。",
  },
];

const contributorRenderer = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
}).enable("table");

/** 贡献名单是一份独立内容，不参与指南和组件文档的常规路由收集。 */
export const CONTRIBUTOR_DOCUMENT_PATH = "contributors.md";

/** 解析轻量 frontmatter，让更新时间可由贡献名单 Markdown 自行维护。 */
function parseContributorSource(rawSource: string): ParsedContributorSource {
  const source = rawSource.replace(/^\uFEFF/, "");
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!frontmatterMatch) return { frontmatter: {}, body: source };

  const frontmatter: Record<string, string> = {};
  for (const line of frontmatterMatch[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex <= 0) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key && value) frontmatter[key] = value;
  }

  return {
    frontmatter,
    body: source.slice(frontmatterMatch[0].length),
  };
}

/** 获取顶级标题后的首段说明，缺失时使用稳定的默认文案。 */
function resolveIntroduction(body: string): string {
  const lines = body.split(/\r?\n/);
  const titleIndex = lines.findIndex((line) => /^#\s+/.test(line));
  if (titleIndex < 0) return "记录为 APS Design Pro 提供实际价值的每一位共建者。";

  for (let index = titleIndex + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;
    if (/^##\s+/.test(line)) break;
    return line.replace(/^>\s*/, "");
  }

  return "记录为 APS Design Pro 提供实际价值的每一位共建者。";
}

/** 按二级标题拆分 Markdown，保留表格和链接等原始内容供页面渲染。 */
function extractCategoryBodies(body: string): Map<string, string> {
  const headingMatches = [...body.matchAll(/^##\s+(.+?)\s*$/gm)];
  const categoryBodies = new Map<string, string>();

  for (let index = 0; index < headingMatches.length; index += 1) {
    const heading = headingMatches[index];
    const title = heading[1]?.trim();
    const startOffset = (heading.index ?? 0) + heading[0].length;
    const endOffset = headingMatches[index + 1]?.index ?? body.length;
    if (title) categoryBodies.set(title, body.slice(startOffset, endOffset).trim());
  }

  return categoryBodies;
}

/** 所有展示内容来自本地 Markdown；缺少分类时保留可读提示，避免页面整体失效。 */
function createContributorRoster(rawSource: string): ContributorRoster {
  const parsedSource = parseContributorSource(rawSource);
  const categoryBodies = extractCategoryBodies(parsedSource.body);
  const titleMatch = parsedSource.body.match(/^#\s+(.+)$/m);

  return {
    title: titleMatch?.[1]?.trim() || "APS Design Pro 共建名单",
    introduction: resolveIntroduction(parsedSource.body),
    updatedAt: parsedSource.frontmatter.updatedAt || "待更新",
    categories: CONTRIBUTOR_CATEGORY_DEFINITIONS.map((definition) => {
      const categoryBody = categoryBodies.get(definition.title);
      return {
        ...definition,
        content: contributorRenderer.render(categoryBody || "暂无登记贡献，请在本地贡献名单中补充。"),
      };
    }),
  };
}

export const contributorRoster = createContributorRoster(contributorSource);
