// 博客相关的类型定义

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: Date;
  updateDate?: Date;
  tags: string[];
  category: string;
  slug: string;
  featured: boolean;
  draft: boolean;
  coverImage?: string;
  readingTime: number; // 预计阅读时间（分钟）
}

export interface BlogTag {
  name: string;
  count: number;
  color?: string;
}

export interface BlogCategory {
  name: string;
  count: number;
  description?: string;
}

export interface BlogArchive {
  year: number;
  months: {
    month: number;
    posts: BlogPost[];
  }[];
}

export interface FriendLink {
  id: string;
  name: string;
  url: string;
  description: string;
  avatar?: string;
  status: 'active' | 'inactive';
  addedDate: Date;
}

export interface BlogFilterOptions {
  tags?: string[];
  category?: string;
  year?: number;
  month?: number;
  featured?: boolean;
  search?: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
} 