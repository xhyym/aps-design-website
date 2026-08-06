import { readdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const websiteDirectory = resolve(currentDirectory, "..");
const registryPath = "src/demos/registry.ts";

/** 每个演示代码块必须引用真实预览文件，确保页面效果与展示源码同源。 */
const demoMappings = [
  ["badge-count", "docs/components/base/badge.md", "src/demos/base/BadgeCountDemo.vue"],
  ["badge-limit", "docs/components/base/badge.md", "src/demos/base/BadgeLimitDemo.vue"],
  ["badge-dot", "docs/components/base/badge.md", "src/demos/base/BadgeDotDemo.vue"],
  ["button-basic", "docs/components/base/button.md", "src/demos/base/ButtonBasicDemo.vue"],
  ["button-loading", "docs/components/base/button.md", "src/demos/base/ButtonLoadingDemo.vue"],
  ["avatar-fallback", "docs/components/base/avatar.md", "src/demos/base/AvatarFallbackDemo.vue"],
  ["avatar-slot", "docs/components/base/avatar.md", "src/demos/base/AvatarSlotDemo.vue"],
  ["icon-status", "docs/components/base/icon.md", "src/demos/base/IconStatusDemo.vue"],
  ["icon-gallery", "docs/components/base/icon.md", "src/demos/base/IconGalleryDemo.vue"],
  ["avatar-group-basic", "docs/components/base/avatar-group.md", "src/demos/base/AvatarGroupBasicDemo.vue"],
  ["avatar-group-slot", "docs/components/base/avatar-group.md", "src/demos/base/AvatarGroupSlotDemo.vue"],
  ["button-group-basic", "docs/components/base/button-group.md", "src/demos/base/ButtonGroupBasicDemo.vue"],
  ["button-group-vertical", "docs/components/base/button-group.md", "src/demos/base/ButtonGroupVerticalDemo.vue"],
  ["button-more-basic", "docs/components/base/button-more.md", "src/demos/base/ButtonMoreBasicDemo.vue"],
  ["button-more-controlled", "docs/components/base/button-more.md", "src/demos/base/ButtonMoreControlledDemo.vue"],
  ["button-table-basic", "docs/components/base/button-table.md", "src/demos/base/ButtonTableDemo.vue"],
  ["button-table-inline", "docs/components/base/button-table.md", "src/demos/base/ButtonTableInlineDemo.vue"],
  ["config-provider-density", "docs/components/base/config-provider.md", "src/demos/base/ConfigProviderDensityDemo.vue"],
  ["config-provider-disabled", "docs/components/base/config-provider.md", "src/demos/base/ConfigProviderDisabledDemo.vue"],
  ["global-component-boundary", "docs/components/base/global-component.md", "src/demos/base/GlobalComponentDemo.vue"],
  ["global-component-grid", "docs/components/base/global-component.md", "src/demos/base/GlobalComponentGridDemo.vue"],
  ["icon-button-basic", "docs/components/base/icon-button.md", "src/demos/base/IconButtonBasicDemo.vue"],
  ["icon-button-loading", "docs/components/base/icon-button.md", "src/demos/base/IconButtonLoadingDemo.vue"],
  ["link-basic", "docs/components/base/link.md", "src/demos/base/LinkBasicDemo.vue"],
  ["link-disabled", "docs/components/base/link.md", "src/demos/base/LinkDisabledDemo.vue"],
  ["svg-icon-basic", "docs/components/base/svg-icon.md", "src/demos/base/SvgIconBasicDemo.vue"],
  ["svg-icon-meta", "docs/components/base/svg-icon.md", "src/demos/base/SvgIconMetaDemo.vue"],
  ["text-semantics", "docs/components/base/text.md", "src/demos/base/TextSemanticsDemo.vue"],
  ["text-truncate", "docs/components/base/text.md", "src/demos/base/TextTruncateDemo.vue"],
  ["theme-svg-basic", "docs/components/base/theme-svg.md", "src/demos/base/ThemeSvgBasicDemo.vue"],
  ["theme-svg-metadata", "docs/components/base/theme-svg.md", "src/demos/base/ThemeSvgMetadataDemo.vue"],
  ["input-basic", "docs/components/form/input.md", "src/demos/form/InputBasicDemo.vue"],
  ["input-password", "docs/components/form/input.md", "src/demos/form/InputPasswordDemo.vue"],
  ["textarea-limit", "docs/components/form/textarea.md", "src/demos/form/TextareaLimitDemo.vue"],
  ["textarea-autosize", "docs/components/form/textarea.md", "src/demos/form/TextareaAutosizeDemo.vue"],
  ["number-input-basic", "docs/components/form/number-input.md", "src/demos/form/NumberInputBasicDemo.vue"],
  ["number-input-format", "docs/components/form/number-input.md", "src/demos/form/NumberInputFormatDemo.vue"],
  ["search-input-basic", "docs/components/form/search-input.md", "src/demos/form/SearchInputBasicDemo.vue"],
  ["search-input-suggestion", "docs/components/form/search-input.md", "src/demos/form/SearchInputSuggestionDemo.vue"],
  ["checkbox-basic", "docs/components/form/checkbox.md", "src/demos/form/CheckboxBasicDemo.vue"],
  ["checkbox-indeterminate", "docs/components/form/checkbox.md", "src/demos/form/CheckboxIndeterminateDemo.vue"],
  ["switch-basic", "docs/components/form/switch.md", "src/demos/form/SwitchBasicDemo.vue"],
  ["switch-before-change", "docs/components/form/switch.md", "src/demos/form/SwitchBeforeChangeDemo.vue"],
  ["radio-basic", "docs/components/form/radio.md", "src/demos/form/RadioBasicDemo.vue"],
  ["radio-card", "docs/components/form/radio.md", "src/demos/form/RadioCardDemo.vue"],
  ["segmented-basic", "docs/components/form/segmented.md", "src/demos/form/SegmentedBasicDemo.vue"],
  ["segmented-disabled", "docs/components/form/segmented.md", "src/demos/form/SegmentedDisabledDemo.vue"],
];

function escapeRegularExpression(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeSource(value) {
  return value.replace(/\r\n/g, "\n").trim();
}

/** 统计 Markdown 表头或分隔行的列数；表格首尾竖线不计入列。 */
function getTableColumnCount(line) {
  return line.split("|").length - 2;
}

/** 判断一行是否是 GitHub Flavored Markdown 的表格分隔行。 */
function isTableDelimiter(line) {
  return /^\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(line);
}

/** 读取失败时补全文件上下文，便于定位被移动或删除的示例。 */
async function readSourceFile(relativePath) {
  try {
    return await readFile(resolve(websiteDirectory, relativePath), "utf8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`无法读取 ${relativePath}：${message}`, { cause: error });
  }
}

async function verifyDemoSources() {
  const invalidDemos = [];
  const registrySource = await readSourceFile(registryPath);

  for (const [demoId, documentPath, demoPath] of demoMappings) {
    const [documentSource, demoSource] = await Promise.all([
      readSourceFile(documentPath),
      readSourceFile(demoPath),
    ]);
    const expression = new RegExp(
      "```vue\\s+demo:" + escapeRegularExpression(demoId) + "(?:\\s+[^\\n]*)?\\n([\\s\\S]*?)\\n```",
      "m",
    );
    const matchedDemo = documentSource.match(expression);

    if (!matchedDemo) {
      invalidDemos.push(`${demoId}：未在 ${documentPath} 找到演示代码块`);
      continue;
    }

    if (normalizeSource(matchedDemo[1]) !== normalizeSource(demoSource)) {
      invalidDemos.push(`${demoId}：Markdown 示例与 ${demoPath} 不一致`);
    }

    if (!registrySource.includes(`"${demoId}":`)) {
      invalidDemos.push(`${demoId}：未在 ${registryPath} 注册可运行预览`);
    }
  }

  if (invalidDemos.length) {
    throw new Error(`组件文档演示校验失败：\n${invalidDemos.join("\n")}`);
  }

  console.info(`组件文档演示校验通过：${demoMappings.length} 个示例保持同源`);
}

/** 收集采用“demo-id.vue”命名的新 Demo 文件，供并行编写文档时自动发现。 */
async function collectAutomaticDemoPaths(relativeDirectory = "src/demos") {
  const directoryEntries = await readdir(resolve(websiteDirectory, relativeDirectory), { withFileTypes: true });
  const demoPaths = [];

  for (const entry of directoryEntries) {
    const relativePath = `${relativeDirectory}/${entry.name}`;
    if (entry.isDirectory()) {
      demoPaths.push(...await collectAutomaticDemoPaths(relativePath));
    } else if (entry.isFile() && /^[a-z0-9-]+\.vue$/.test(entry.name)) {
      demoPaths.push(relativePath);
    }
  }

  return demoPaths.sort();
}

/** 校验自动发现 Demo 的源码、文件名和 Markdown 标识一致。 */
async function verifyAutomaticDemoSources() {
  const manualDemoIds = new Set(demoMappings.map(([demoId]) => demoId));
  const automaticDemoPaths = await collectAutomaticDemoPaths();
  const automaticDemos = new Map();
  const invalidDemos = [];

  for (const demoPath of automaticDemoPaths) {
    const fileName = demoPath.slice(demoPath.lastIndexOf("/") + 1, -".vue".length);
    if (automaticDemos.has(fileName)) {
      invalidDemos.push(`${fileName}：存在重复的自动 Demo 文件名`);
    } else {
      automaticDemos.set(fileName, demoPath);
    }
  }

  const documentPaths = await collectComponentDocumentPaths("docs/components");
  for (const documentPath of documentPaths) {
    const documentSource = await readSourceFile(documentPath);
    const demoBlocks = documentSource.matchAll(/```vue\s+demo:([\w-]+)(?:\s+[^\n]*)?\n([\s\S]*?)\n```/g);

    for (const demoBlock of demoBlocks) {
      const demoId = demoBlock[1];
      if (manualDemoIds.has(demoId)) continue;

      const demoPath = automaticDemos.get(demoId);
      if (!demoPath) {
        invalidDemos.push(`${demoId}：未找到同名的自动 Demo 文件`);
        continue;
      }

      const demoSource = await readSourceFile(demoPath);
      if (normalizeSource(demoBlock[2]) !== normalizeSource(demoSource)) {
        invalidDemos.push(`${demoId}：Markdown 示例与 ${demoPath} 不一致`);
      }
    }
  }

  if (invalidDemos.length) {
    throw new Error(`自动 Demo 校验失败：\n${invalidDemos.join("\n")}`);
  }

  console.info(`自动 Demo 校验通过：${automaticDemoPaths.length} 个文件可按命名自动注册`);
}

/** 递归收集组件文档，使新增分类自动纳入结构校验。 */
async function collectComponentDocumentPaths(relativeDirectory) {
  const directoryEntries = await readdir(resolve(websiteDirectory, relativeDirectory), { withFileTypes: true });
  const documentPaths = [];

  for (const entry of directoryEntries) {
    const relativePath = `${relativeDirectory}/${entry.name}`;
    if (entry.isDirectory()) {
      documentPaths.push(...await collectComponentDocumentPaths(relativePath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      documentPaths.push(relativePath);
    }
  }

  return documentPaths.sort();
}

/** 保证所有组件文档采用统一的信息架构，并至少提供两个可运行示例。 */
async function verifyComponentDocumentStructure() {
  const documentPaths = await collectComponentDocumentPaths("docs/components");
  const requiredSections = ["## 1. 用处", "## 2. 代码演示", "## 3. API 使用方式", "## 4. Props 与 Slots"];
  const invalidDocuments = [];

  for (const documentPath of documentPaths) {
    const documentSource = await readSourceFile(documentPath);
    const missingSections = requiredSections.filter((section) => !documentSource.includes(section));
    const demoCount = [...documentSource.matchAll(/```vue\s+demo:[\w-]+/g)].length;

    const tableErrors = [];
    const documentLines = documentSource.split(/\r?\n/);
    for (let lineIndex = 1; lineIndex < documentLines.length; lineIndex += 1) {
      const headerLine = documentLines[lineIndex - 1];
      const delimiterLine = documentLines[lineIndex];
      if (!headerLine.startsWith("|") || !isTableDelimiter(delimiterLine)) continue;

      const headerColumnCount = getTableColumnCount(headerLine);
      const delimiterColumnCount = getTableColumnCount(delimiterLine);
      if (headerColumnCount !== delimiterColumnCount) {
        tableErrors.push(`第 ${lineIndex + 1} 行表格分隔列数为 ${delimiterColumnCount}，表头为 ${headerColumnCount}`);
      }
    }

    if (missingSections.length || demoCount < 2 || tableErrors.length) {
      const reasons = [
        missingSections.length ? `缺少章节：${missingSections.join("、")}` : "",
        demoCount < 2 ? `可运行示例不足 2 个，当前为 ${demoCount} 个` : "",
        tableErrors.length ? tableErrors.join("；") : "",
      ].filter(Boolean);
      invalidDocuments.push(`${documentPath}：${reasons.join("；")}`);
    }
  }

  if (invalidDocuments.length) {
    throw new Error(`组件文档结构校验失败：\n${invalidDocuments.join("\n")}`);
  }

  console.info(`组件文档结构校验通过：${documentPaths.length} 篇文档均包含四个主章节和至少两个示例`);
}

/**
 * 官网独立部署后只安装已发布的 npm 包，不再依赖组件仓库的源码路径。
 * 因此这里校验文档中的组件标识和源码链接格式，保证文档自身可独立维护。
 */
async function verifyComponentDocumentMetadata() {
  const documentPaths = await collectComponentDocumentPaths("docs/components");
  const documentedComponents = new Map();
  const invalidDocuments = [];

  for (const documentPath of documentPaths) {
    const category = documentPath.split("/")[2];
    const documentSource = await readSourceFile(documentPath);
    const componentMatch = documentSource.match(/^component:\s*([A-Za-z][A-Za-z0-9]*)\s*$/m);
    const sourceMatch = documentSource.match(/^source:\s*packages\/ui\/src\/components\/[\w/-]+\.vue\s*$/m);
    if (!componentMatch) {
      invalidDocuments.push(`${documentPath}：缺少 frontmatter component 字段`);
      continue;
    }

    if (!sourceMatch) {
      invalidDocuments.push(`${documentPath}：缺少有效的组件源码链接`);
      continue;
    }

    const componentName = componentMatch[1];
    const key = `${category}/${componentName}`;
    if (documentedComponents.has(key)) {
      invalidDocuments.push(`${documentPath}：与 ${documentedComponents.get(key)} 重复记录公开组件 ${componentName}`);
      continue;
    }
    documentedComponents.set(key, documentPath);
  }

  if (invalidDocuments.length) {
    throw new Error(`组件文档元信息校验失败：\n${invalidDocuments.join("\n")}`);
  }

  console.info(`组件文档元信息校验通过：${documentedComponents.size} 篇文档均有唯一组件标识和源码链接`);
}

await verifyDemoSources();
await verifyAutomaticDemoSources();
await verifyComponentDocumentStructure();
await verifyComponentDocumentMetadata();
