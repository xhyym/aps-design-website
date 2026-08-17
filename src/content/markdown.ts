import MarkdownIt from "markdown-it";
import { highlightCode } from "@/utils/codeHighlight";
import { CONTRIBUTOR_DOCUMENT_PATH } from "@/content/contributors";

export type MarkdownDocumentKind = "component" | "guide";

export interface MarkdownDocument {
  id: string;
  kind: MarkdownDocumentKind;
  title: string;
  description: string;
  category: string;
  componentName: string;
  source: string;
  route: string;
  relativePath: string;
  body: string;
  headings: MarkdownHeading[];
  demos: MarkdownDemo[];
}

export interface MarkdownHeading {
  id: string;
  level: 2 | 3;
  title: string;
}

export interface MarkdownDemo {
  id: string;
  title: string;
  source: string;
}

type Frontmatter = Record<string, string>;

interface ParsedMarkdown {
  frontmatter: Frontmatter;
  body: string;
}

interface MarkdownRenderEnvironment {
  headingIds?: string[];
  headingIndex?: number;
}

const componentCategoryLabels: Record<string, string> = {
  base: "基础组件",
  form: "表单组件",
  data: "数据组件",
  navigation: "导航组件",
  feedback: "反馈组件",
  content: "内容组件",
  layout: "布局组件",
  overlay: "浮层组件",
  charts: "图表组件",
};

const componentCategoryOrder = ["base", "form", "data", "navigation", "feedback", "overlay", "content", "charts", "layout"];

/** 指南侧边栏的阅读顺序，避免按中文标题字母序排列时顺序失真。 */
const guideOrder: Record<string, number> = {
  "quick-start": 1,
  "architecture": 2,
  "theming": 3,
  "i18n": 4,
  "changelog": 5,
  "ai-coding-skill": 6,
};

/** 组件目录和左侧文档导航共用分类名称，避免同一组件在不同页面出现不同归属。 */
export function getComponentCategoryLabel(category: string): string {
  return componentCategoryLabels[category] ?? `${category} 组件`;
}

export function getComponentCategoryOrder(category: string): number {
  const order = componentCategoryOrder.indexOf(category);
  return order === -1 ? componentCategoryOrder.length : order;
}

/**
 * 文档演示约定：
 * ```vue demo:button-basic title="基础操作"
 * // 与 src/demos 中同名示例完全一致的 Vue 源码
 * ```
 *
 * demo ID 用于定位可运行的预览组件；围栏中的源码仍保留在 Markdown，
 * 由校验脚本与演示文件逐字对比，避免预览与源码在后续维护中分叉。
 */
function parseDemoInfo(info: string): { id: string; title: string } | undefined {
  const idMatch = info.match(/\bdemo:([A-Za-z0-9_-]+)/);
  if (!idMatch) return undefined;

  const titleMatch = info.match(/\btitle=(?:"([^"]+)"|'([^']+)'|([^\s]+))/);
  return {
    id: idMatch[1],
    title: titleMatch?.[1] || titleMatch?.[2] || titleMatch?.[3] || "示例",
  };
}

function extractDemoBlocks(body: string): MarkdownDemo[] {
  const demos: MarkdownDemo[] = [];
  const demoFencePattern = /^```([^\n]*)\r?\n([\s\S]*?)^```\s*$/gm;

  for (const match of body.matchAll(demoFencePattern)) {
    const info = parseDemoInfo(match[1].trim());
    if (!info) continue;
    demos.push({ id: info.id, title: info.title, source: match[2].trim() });
  }

  return demos;
}

/** 官网文档随应用打包，后续只需维护 apps/aps-design-website/docs。 */
const websiteDocumentModules = import.meta.glob<string>("../../docs/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const markdownRenderer = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
  highlight: (code) => `<pre><code>${highlightCode(code)}</code></pre>`,
}).enable("table");

/** 为二、三级标题注入稳定锚点，供组件页右侧目录定位。 */
markdownRenderer.renderer.rules.heading_open = (tokens, index, options, environment, renderer) => {
  const token = tokens[index];
  if (token.tag === "h2" || token.tag === "h3") {
    const renderEnvironment = environment as MarkdownRenderEnvironment;
    const headingIndex = renderEnvironment.headingIndex ?? 0;
    const headingId = renderEnvironment.headingIds?.[headingIndex];
    if (headingId) token.attrSet("id", headingId);
    renderEnvironment.headingIndex = headingIndex + 1;
  }

  return renderer.renderToken(tokens, index, options);
};

markdownRenderer.renderer.rules.fence = (tokens, index) => {
  const token = tokens[index];
  const demo = parseDemoInfo(token.info.trim());
  if (demo) return `<div class="markdown-demo-placeholder" data-demo-id="${demo.id}"></div>`;

  const language = (token.info.trim().split(/\s+/)[0] || "text").replace(/[^A-Za-z0-9_-]/g, "");
  return `<pre><code class="language-${language}">${highlightCode(token.content)}</code></pre>`;
};

/** 组件页只收录二、三级标题，避免目录被文档主标题和源码标题干扰。 */
function extractDocumentHeadings(body: string): MarkdownHeading[] {
  const tokens = markdownRenderer.parse(body, {});
  const headings: MarkdownHeading[] = [];

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.type !== "heading_open" || (token.tag !== "h2" && token.tag !== "h3")) continue;

    const title = tokens[index + 1]?.content.trim();
    if (!title) continue;
    headings.push({
      id: `section-${headings.length + 1}`,
      level: token.tag === "h2" ? 2 : 3,
      title,
    });
  }

  return headings;
}

function getRelativeDocumentPath(modulePath: string): string {
  const marker = "docs/";
  const markerIndex = modulePath.lastIndexOf(marker);
  return markerIndex === -1 ? modulePath : modulePath.slice(markerIndex + marker.length);
}

function parseFrontmatter(rawSource: string): ParsedMarkdown {
  const source = rawSource.replace(/^\uFEFF/, "");
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!frontmatterMatch) return { frontmatter: {}, body: source };

  const frontmatter: Frontmatter = {};
  for (const line of frontmatterMatch[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex <= 0) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key && value) frontmatter[key] = value;
  }

  return { frontmatter, body: source.slice(frontmatterMatch[0].length) };
}

function resolveTitle(frontmatter: Frontmatter, body: string, fallback: string): string {
  if (frontmatter.title) return frontmatter.title;
  const headingMatch = body.match(/^#\s+(.+)$/m);
  return headingMatch?.[1].trim() || fallback;
}

function resolveDescription(body: string): string {
  const tokens = markdownRenderer.parse(body, {});
  for (let index = 0; index < tokens.length; index += 1) {
    if (tokens[index].type !== "paragraph_open") continue;

    const paragraph = tokens[index + 1]?.content.trim();
    if (paragraph) return paragraph.replace(/`([^`]+)`/g, "$1");
  }

  return "查看组件使用说明与 API。";
}

/**
 * 文档页的组件名、标题和首段简介由页面页头统一渲染。
 * 移除 Markdown 中对应的首屏内容，避免正文再次出现同一份标题与描述。
 */
function removeDocumentHero(body: string): string {
  const lines = body.split(/\r?\n/);
  const headingIndex = lines.findIndex((line) => line.trim().length > 0);
  if (headingIndex === -1 || !/^#\s+/.test(lines[headingIndex])) return body;

  let contentStart = headingIndex + 1;
  while (contentStart < lines.length && !lines[contentStart].trim()) contentStart += 1;
  if (contentStart >= lines.length || /^##\s+/.test(lines[contentStart])) {
    return lines.slice(contentStart).join("\n");
  }

  let paragraphEnd = contentStart;
  while (paragraphEnd < lines.length && lines[paragraphEnd].trim()) paragraphEnd += 1;
  while (paragraphEnd < lines.length && !lines[paragraphEnd].trim()) paragraphEnd += 1;
  return lines.slice(paragraphEnd).join("\n");
}

function createDocument(modulePath: string, rawSource: string): MarkdownDocument {
  const relativePath = getRelativeDocumentPath(modulePath);
  const pathWithoutExtension = relativePath.replace(/\.md$/, "");
  const segments = pathWithoutExtension.split("/").filter(Boolean);
  const slug = segments.at(-1) || "introduction";
  const isComponent = segments[0] === "components";
  const category = isComponent ? segments[1] || "base" : "guide";
  const parsed = parseFrontmatter(rawSource);
  const title = resolveTitle(parsed.frontmatter, parsed.body, slug);
  const body = removeDocumentHero(parsed.body);

  return {
    id: pathWithoutExtension,
    kind: isComponent ? "component" : "guide",
    title,
    description: resolveDescription(parsed.body),
    category: parsed.frontmatter.category || category,
    componentName: parsed.frontmatter.component || "",
    source: parsed.frontmatter.source || "",
    route: isComponent ? `/components/${category}/${slug}` : `/guide/${slug}`,
    relativePath,
    body,
    headings: extractDocumentHeadings(body),
    demos: extractDemoBlocks(body),
  };
}

function collectDocuments(): MarkdownDocument[] {
  return Object.entries(websiteDocumentModules)
    // 共建名单由独立页面渲染，不应作为普通指南出现在组件/指南目录中。
    .filter(([modulePath]) => getRelativeDocumentPath(modulePath) !== CONTRIBUTOR_DOCUMENT_PATH)
    .map(([modulePath, rawSource]) => createDocument(modulePath, rawSource))
    .sort((left, right) => {
    if (left.kind === right.kind && left.kind === "guide") {
      const leftOrder = guideOrder[left.id] ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = guideOrder[right.id] ?? Number.MAX_SAFE_INTEGER;
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    }

    return left.title.localeCompare(right.title, "zh-CN");
  });
}

export const markdownDocuments = collectDocuments();

export const componentDocuments = markdownDocuments.filter((document) => document.kind === "component");
export const guideDocuments = markdownDocuments.filter((document) => document.kind === "guide");

export function getMarkdownDocument(route: string): MarkdownDocument | undefined {
  return markdownDocuments.find((document) => document.route === route);
}

export function renderMarkdownDocument(document: MarkdownDocument): string {
  return markdownRenderer.render(document.body, { headingIds: document.headings.map((heading) => heading.id) });
}
