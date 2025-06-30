import I18nKeys from "./src/i18n/keys";
import type { Configuration } from "./src/types/config";

const AsukaConfig: Configuration = {
  title: "zhsama's blog",
  subTitle: "Frontend && AI",
  brandTitle: "zhsama",

  description: "I'm a frontend developer and AI enthusiast.",

  site: "https://blog.zhsama.xyz",

  locale: "zh-CN",

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

  username: "zhsama",
  sign: "我没有敌人",
  avatarUrl: "/avatar.jpeg",
  author_description: "冻鳗糕手，游戏领域大神，懂一点点前端和AI",
  email: "a602693793@gmail.com",

  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/zhsama",
    },
    {
      icon: "mingcute:twitter-line",
      link: "https://x.com/a602693793",
    },
    {
      icon: "line-md:email",
      link: "mailto:a602693793@gmail.com",
    },
  ],

  // 友情链接配置
  friendLinks: [
    {
      name: "示例博客",
      url: "https://example.com",
      avatar: "https://example.com/avatar.png",
      description: "这是一个示例友链",
    },
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/banner/eva-01.png",
    "/banner/eva-01.2.png",
    "/banner/eva-01.3.png",
    "/banner/eva-02.png",
    "/banner/eva-02.2.png",
  ],

  slugMode: "HASH",

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",

  // SEO 配置
  seo: {
    twitter: "@a602693793",
    ogImage: "/og-image.png",
  },

  // 瀑布流配置
  waterfallColumns: {
    default: 3,
    lg: 3,
    md: 2,
    sm: 1,
  },
};

export default AsukaConfig;
