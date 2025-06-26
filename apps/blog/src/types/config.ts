import type I18nKeys from "../locales/keys";

interface FriendLink {
  name: string;
  url: string;
  avatar: string;
  description: string;
}

interface SEOConfig {
  twitter?: string;
  ogImage?: string;
}

interface WaterfallColumns {
  default: number;
  lg: number;
  md: number;
  sm: number;
}

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navigators: { nameKey: I18nKeys; href: string }[];

  username: string;
  sign: string;
  avatarUrl: string;
  author_description?: string;
  email?: string;

  socialLinks: { icon: string; link: string }[];

  friendLinks?: FriendLink[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: string[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP" | "STATIC" | "HIDDEN";

  seo?: SEOConfig;
  
  waterfallColumns?: WaterfallColumns;
}

export type { Configuration, FriendLink, SEOConfig, WaterfallColumns };