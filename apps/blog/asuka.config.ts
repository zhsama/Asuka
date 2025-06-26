import I18nKeys from "./src/i18n/keys";
import type { Configuration } from "./src/types/config";

const AsukaConfig: Configuration = {
  title: "我的博客",
  subTitle: "记录生活，分享技术",
  brandTitle: "我的博客",

  description: "一个记录技术与生活的个人博客",

  site: "https://your-blog-site.com",

  locale: "zh-CN", // 设置为中文

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/zhsama/asuka",
    },
  ],

  username: "博客作者",
  sign: "生活不止眼前的代码，还有诗和远方",
  avatarUrl: "/avatar.webp",
  author_description: "一个热爱技术的开发者",
  email: "your-email@example.com",
  
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/zhsama",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/yourid",
    },
    {
      icon: "line-md:email",
      link: "mailto:your-email@example.com",
    },
  ],
  
  // 友情链接配置
  friendLinks: [
    {
      name: "示例博客",
      url: "https://example.com",
      avatar: "https://example.com/avatar.png",
      description: "这是一个示例友链"
    }
  ],
  
  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/banner1.webp",
    "/banner2.webp",
    "/banner3.webp",
  ],

  slugMode: "HASH",

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",
  
  // SEO 配置
  seo: {
    twitter: "@yourtwitterhandle",
    ogImage: "/og-image.png",
  },
  
  // 瀑布流配置
  waterfallColumns: {
    default: 3,
    lg: 3,
    md: 2,
    sm: 1
  }
};

export default AsukaConfig;