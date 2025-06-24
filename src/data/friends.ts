// 友链数据

import type { FriendLink } from '@/types/blog';

export const friendLinks: FriendLink[] = [
  {
    id: '1',
    name: 'Astro 官方文档',
    url: 'https://docs.astro.build',
    description: 'Astro 是一个现代化的静态网站生成器，专为速度而生。',
    avatar: '/images/friends/astro.svg',
    status: 'active',
    addedDate: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'React 官方文档',
    url: 'https://react.dev',
    description: '用于构建用户界面的 JavaScript 库。',
    avatar: '/images/friends/react.svg',
    status: 'active',
    addedDate: new Date('2024-01-02')
  },
  {
    id: '3',
    name: 'TypeScript 官方文档',
    url: 'https://www.typescriptlang.org',
    description: 'TypeScript 是 JavaScript 的超集，添加了静态类型定义。',
    avatar: '/images/friends/typescript.svg',
    status: 'active',
    addedDate: new Date('2024-01-03')
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description: '一个功能类优先的 CSS 框架，用于快速构建自定义设计。',
    avatar: '/images/friends/tailwind.svg',
    status: 'active',
    addedDate: new Date('2024-01-04')
  },
  {
    id: '5',
    name: 'GitHub',
    url: 'https://github.com',
    description: '全球最大的代码托管平台，开发者的家园。',
    avatar: '/images/friends/github.svg',
    status: 'active',
    addedDate: new Date('2024-01-05')
  },
  {
    id: '6',
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'Web 开发者的权威资源，提供详细的 Web 技术文档。',
    avatar: '/images/friends/mdn.svg',
    status: 'active',
    addedDate: new Date('2024-01-06')
  }
];

// 获取所有活跃的友链
export function getActiveFriendLinks(): FriendLink[] {
  return friendLinks.filter(link => link.status === 'active');
}

// 根据 ID 获取友链
export function getFriendLinkById(id: string): FriendLink | undefined {
  return friendLinks.find(link => link.id === id);
}

// 添加新友链
export function addFriendLink(link: Omit<FriendLink, 'id' | 'addedDate'>): FriendLink {
  const newLink: FriendLink = {
    ...link,
    id: Date.now().toString(),
    addedDate: new Date()
  };
  
  friendLinks.push(newLink);
  return newLink;
}

// 更新友链状态
export function updateFriendLinkStatus(id: string, status: 'active' | 'inactive'): boolean {
  const link = getFriendLinkById(id);
  if (link) {
    link.status = status;
    return true;
  }
  return false;
}