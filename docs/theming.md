# 主题与令牌

APS Design Pro 的所有视觉都由一套 CSS 设计令牌（Design Token）驱动，变量名统一以 `--aps-` 开头。换肤、暗色模式与局部定制都不需要重写组件，只需覆盖这些变量。

## 设计令牌

令牌按用途分组，常见分组如下：

| 分组 | 代表变量 | 作用 |
| --- | --- | --- |
| 色彩 · 基础 | `--aps-surface`、`--aps-surface-soft` | 页面与卡片背景 |
| 色彩 · 文字 | `--aps-ink`、`--aps-muted`、`--aps-faint` | 标题、正文、辅助文字 |
| 色彩 · 描边 | `--aps-line`、`--aps-line-soft` | 边框与分隔线 |
| 色彩 · 主色 | `--aps-primary`、`--aps-primary-hover`、`--aps-primary-soft` | 主操作色与浅色底 |
| 色彩 · 语义 | `--aps-blue`、`--aps-green`、`--aps-red`、`--aps-orange` | 信息、成功、危险、警告 |
| 圆角 | `--aps-radius-xs` / `-sm` / `-control` / `-card` / `-overlay` / `-pill` | 不同层级的圆角 |
| 字体与阴影 | `--aps-font`、`--aps-shadow` | 字体族与浮层投影 |

完整变量见已发布包内的 `aps-design-pro/style.css`。

## 覆盖令牌

在应用的最外层（通常是 `:root` 或 `<html>`）重新声明变量即可全局生效：

```css
:root {
  --aps-primary: #6d28d9;
  --aps-primary-hover: #5b21b6;
  --aps-radius-card: 16px;
  --aps-font: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
```

组件内部一律引用这些变量，所以改一处即可联动所有组件。

## 暗色模式

暗色主题通过 `data-theme` 属性开启，组件会自动切换到对应的暗色令牌：

```html
<html data-theme="dark">
  <!-- 全站进入暗色 -->
</html>
```

也可以只在某个容器内开启，不影响其它区域：

```html
<div data-theme="dark">
  <!-- 仅该容器为暗色 -->
</div>
```

切换时直接改属性即可，无需重新加载：

```ts
document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
```

## 作用域与优先级

令牌遵循 CSS 层叠规则：越靠近组件的声明优先级越高。常见的覆盖层级从低到高为：

1. 组件库默认令牌（`:root`）
2. 你的全局覆盖（`:root` 或 `html`）
3. 局部作用域（某个 `data-theme` 容器或自定义 class）

需要仅让某个区块换肤时，把变量声明放在该区块的选择器下即可，不必改动组件源码。
