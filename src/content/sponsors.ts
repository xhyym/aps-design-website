/**
 * 赞助页数据：收款码与赞助列表。
 * - 收款码：把真实截图放到 `public/sponsor/wechat.png` / `public/sponsor/alipay.png`，
 *   页面会自动优先使用 `.png`（存在时），否则回退到示例占位图。
 * - 赞助列表：`company` 类型建议提供 `avatar`（公司 Logo）与 `url`（官网，可点击跳转）；
 *   `individual` 类型可只填 `name` 与 `description`，无头像时展示首字母占位、无链接时不可点击。
 */
export type SponsorTier = "company" | "individual";

export interface SponsorItem {
  /** 赞助方名称（公司或个人）。 */
  name: string;
  /** 一句话描述。 */
  description?: string;
  /** 公司 Logo 地址；缺省时展示名称首字母占位。 */
  avatar?: string;
  /** 官网地址；缺省时卡片不可点击。 */
  url?: string;
  /** 赞助类型。 */
  tier: SponsorTier;
}

export interface SponsorQrCode {
  /** 展示名称，如“微信支付”。 */
  label: string;
  /** 提示文案。 */
  hint: string;
  /** 收款码图片地址（可替换为真实截图）。 */
  image: string;
  /** 主图加载失败（如占位图）时的回退地址。 */
  fallback: string;
}

/** 收款码图片：真实截图放 public/sponsor/ 下同名 png，优先展示。 */
const qrPng = (name: string) => `/sponsor/${name}.png`;
const qrSvg = (name: string) => `/sponsor/${name}.svg`;

/** 微信 / 支付宝收款码。 */
export const SPONSOR_QR_CODES: SponsorQrCode[] = [
  {
    label: "微信支付",
    hint: "扫一扫，支持一下",
    image: qrPng("wechat"),
    fallback: qrSvg("wechat"),
  },
  {
    label: "支付宝",
    hint: "打开支付宝扫一扫",
    image: qrPng("alipay"),
    fallback: qrSvg("alipay"),
  },
];

/**
 * 赞助列表（示例数据，按需增删改）。
 * 公司：带 avatar / url，点击卡片跳转官网；个人：仅名称与描述，展示首字母占位。
 */
export const SPONSORS: SponsorItem[] = [
  // {
  //   name: "腾讯云",
  //   description: "为组件库提供云计算与 CDN 基础设施支持",
  //   avatar: "https://img.alicdn.com/tfs/TB1HvyGXgHqK1RjSZFPXXcwapXa-160-160.png",
  //   url: "https://cloud.tencent.com",
  //   tier: "company",
  // },
  {
    name: "成都伴科云服科技",
    description: "一家专业的IT服务提供商",
    url: "",
    tier: "company",
  },
  {
    name: "韭菜",
    description: "好东西应该多分享",
    tier: "individual",
  },
  {
    name: "卡机嘛",
    description: "个人赞助，用于文档与示例建设",
    tier: "individual",
  },
  {
    name: "阿里凯",
    description: "钓鱼佬永不空军",
    tier: "individual",
  },
  {
    name: "陈工",
    description: "大佬牛逼",
    tier: "individual",
  },
];
