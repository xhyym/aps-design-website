# AI 编码助手 Skill

AI 编码工具（如 WorkBuddy、Cursor、Copilot 等）默认并不了解 APS Design Pro 的组件契约——它们可能写出不存在的组件名、错误的 Props，或漏掉必须的样式引入。为了让 AI 能**准确、规范**地使用本组件库，我们提供了一套官方 **Skill**：把它导入你的 AI 编码工具后，工具会自动加载组件索引、图标清单、类型定义与最佳实践，生成的代码开箱即用。

## 下载

[⬇️ 下载 aps-design-pro-skill.zip](/skill/aps-design-pro-skill.zip)

> 版本与当前文档站点保持一致（组件库 v0.3.1，179 个公开组件）。

## Skill 包含什么

| 文件 | 内容 |
| --- | --- |
| `SKILL.md` | 触发条件、7 条核心编码规则、组件速查表、常见陷阱（WorkBuddy / Claude Code 直接使用） |
| `references/getting-started.md` | 安装、引入方式、关键约定 |
| `references/components-index.md` | 177 个组件的全量索引（9 大分类 + 一句话用途） |
| `references/common-types.md` | 核心 TypeScript 类型定义与未导出类型的处理方式 |
| `references/icon-names.md` | 50 个 `IconName` 合法图标值 |
| `references/patterns.md` | 8 个已验证的组合模板（表格页、弹窗表单、删除确认、图表卡片等） |
| `adapters/AGENTS.md` | 通用规则版（Codex / Cursor / Trae / Copilot 等项目根放 `AGENTS.md` 即可） |
| `adapters/aps-design-pro.mdc` | Cursor 项目规则版（`.cursor/rules/`） |

## 安装教程

### WorkBuddy

```bash
# 解压得到 aps-design-pro/ 目录后
mkdir -p ~/.workbuddy/skills
cp -r aps-design-pro ~/.workbuddy/skills/
```

重新打开对话即可。之后说「用 aps-design-pro 写一个 XX 页面」会自动加载本 Skill。

### Claude Code

Skill 结构（`SKILL.md` + frontmatter）与 Claude Code 完全兼容，直接放入技能目录：

```bash
# 全局生效（所有项目）
mkdir -p ~/.claude/skills
cp -r aps-design-pro ~/.claude/skills/

# 或仅当前项目
mkdir -p .claude/skills
cp -r aps-design-pro .claude/skills/
```

重启会话后用 `/aps-design-pro` 调用，或在对话中描述需求时自动触发。

### OpenAI Codex

Codex 使用 `AGENTS.md` 规则文件（无需解压整个包）：

```bash
# 项目级（推荐）：把适配规则放项目根
cp aps-design-pro/adapters/AGENTS.md ./AGENTS.md

# 或全局生效
mkdir -p ~/.codex
cp aps-design-pro/adapters/AGENTS.md ~/.codex/AGENTS.md
```

Codex 每次会话前自动读取该文件，生成代码时遵循组件库规范。

### Cursor

二选一（推荐第一种）：

```bash
# 方式一：项目规则（.mdc，可智能按需生效）
mkdir -p .cursor/rules
cp aps-design-pro/adapters/aps-design-pro.mdc .cursor/rules/

# 方式二：简单版（AGENTS.md，始终加载）
cp aps-design-pro/adapters/AGENTS.md ./AGENTS.md
```

也可以打开 Cursor Settings → Rules → User Rules，把 `adapters/AGENTS.md` 的内容粘贴进去（对所有项目全局生效）。

### Trae

```bash
# 方式一：项目规则目录（自动读取）
mkdir -p .trae/rules
cp aps-design-pro/adapters/AGENTS.md .trae/rules/project-rules.md

# 方式二：AGENTS.md（需在 设置 → 规则 中开启「将 AGENTS.md 包含在上下文中」）
cp aps-design-pro/adapters/AGENTS.md ./AGENTS.md
```

### 其他工具（GitHub Copilot 等）

大多数支持 `AGENTS.md` 或项目规则机制的 AI 编码工具，均可使用 `adapters/AGENTS.md`：把文件放到工具约定的项目规则位置即可。

## 使用效果

启用后，AI 会遵守以下规则生成代码：

- 组件一律使用 `App` 前缀（`AppButton`、`AppDataTable`），从包根按需导入；
- 自动带上 `import "aps-design-pro/style.css";`；
- 图标只使用 50 个合法 `IconName`，杜绝不存在的图标名；
- 表格、表单、浮层等组合按官方推荐结构生成（`v-model:selected-keys`、`#footer` 插槽、`AppPopconfirm` 删除确认等）；
- 复杂类型（`DataTableColumn`、`ChartSeries`、`UploadFileItem`）自动从包根导入注解。

## 更新说明

组件库新增组件或 API 变更后，本 Skill 会随官网文档同步更新，重新下载覆盖即可。

## 相关页面

- [快速开始](./quick-start) · [组件列表](../components) · [贡献指南](../changelog)
