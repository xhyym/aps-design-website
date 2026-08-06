/**
 * 官网只展示 Vue、TypeScript 和命令示例，使用轻量级静态着色即可。
 * 先逐段转义再追加 span，避免 Markdown 或组件示例中的文本被当作 HTML 执行。
 */
const SOURCE_TOKEN_PATTERN = /(<!--[\s\S]*?-->|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z][^>]*>|\b(?:import|from|const|let|ref|function|return|true|false|setup|lang|type|interface|async|await)\b|\b\d+(?:\.\d+)?\b)/g;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resolveTokenClass(token: string): string {
  if (token.startsWith("//") || token.startsWith("<!--")) return "code-token-comment";
  if (token.startsWith("\"") || token.startsWith("'") || token.startsWith("`")) return "code-token-string";
  if (token.startsWith("<")) return "code-token-tag";
  if (/^\d/.test(token)) return "code-token-number";
  return "code-token-keyword";
}

/** 返回已经转义并标记过的 HTML，仅用于可信源码文本的只读展示。 */
export function highlightCode(source: string): string {
  let cursor = 0;
  let result = "";

  for (const match of source.matchAll(SOURCE_TOKEN_PATTERN)) {
    const token = match[0];
    const start = match.index ?? cursor;
    result += escapeHtml(source.slice(cursor, start));
    result += `<span class="${resolveTokenClass(token)}">${escapeHtml(token)}</span>`;
    cursor = start + token.length;
  }

  return result + escapeHtml(source.slice(cursor));
}
