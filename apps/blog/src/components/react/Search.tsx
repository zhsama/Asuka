import React, { useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, X, FileText, Calendar, Tag } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  description: string;
  published: Date;
  tags: string[];
  category?: string;
  cover?: string;
  author: string;
}

interface SearchProps {
  posts: Post[];
  placeholder?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ 
  posts, 
  placeholder = "搜索文章...", 
  className = "", 
  isOpen, 
  onClose 
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // 搜索结果
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase().trim();
    
    return posts.filter(post => {
      // 搜索标题
      if (post.title.toLowerCase().includes(searchTerm)) return true;
      
      // 搜索描述
      if (post.description.toLowerCase().includes(searchTerm)) return true;
      
      // 搜索标签
      if (post.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
      
      // 搜索分类
      if (post.category?.toLowerCase().includes(searchTerm)) return true;
      
      return false;
    }).slice(0, 8); // 限制结果数量
  }, [posts, query]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && searchResults[selectedIndex]) {
            window.location.href = `/posts/${searchResults[selectedIndex].id}`;
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchResults, selectedIndex, onClose]);

  // 重置选中索引
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  // 重置搜索
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // 格式化日期
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  };

  // 高亮搜索词
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    
    const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50">
          {part}
        </mark>
      ) : part
    );
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-container">
        <div className="search-box">
          {/* Search Input */}
          <div className="search-input-wrapper">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="search-input"
              autoFocus
            />
            <button onClick={onClose} className="search-close">
              <X size={20} />
            </button>
          </div>

          {/* Search Results */}
          <div className="search-results">
            {query.trim() === '' ? (
              <div className="search-empty">
                <SearchIcon className="empty-icon" />
                <p className="empty-title">开始搜索</p>
                <p className="empty-description">
                  输入关键词搜索文章标题、内容、标签或分类
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="search-empty">
                <FileText className="empty-icon" />
                <p className="empty-title">未找到相关文章</p>
                <p className="empty-description">
                  尝试使用不同的关键词
                </p>
              </div>
            ) : (
              <div className="results-list">
                <div className="results-header">
                  找到 {searchResults.length} 篇相关文章
                </div>
                {searchResults.map((post, index) => (
                  <a
                    key={post.id}
                    href={`/posts/${post.id}`}
                    className={`result-item ${index === selectedIndex ? 'selected' : ''}`}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="result-content">
                      <h3 className="result-title">
                        {highlightText(post.title, query)}
                      </h3>
                      <p className="result-description">
                        {highlightText(post.description, query)}
                      </p>
                      <div className="result-meta">
                        <span className="result-date">
                          <Calendar size={14} />
                          {formatDate(post.published)}
                        </span>
                        {post.category && (
                          <span className="result-category">
                            <Tag size={14} />
                            {highlightText(post.category, query)}
                          </span>
                        )}
                        {post.tags.length > 0 && (
                          <div className="result-tags">
                            {post.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="result-tag">
                                {highlightText(tag, query)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {post.cover && (
                      <div className="result-cover">
                        <img src={post.cover} alt={post.title} />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Search Shortcuts */}
          <div className="search-shortcuts">
            <kbd>↑↓</kbd> 导航
            <kbd>Enter</kbd> 选择
            <kbd>Esc</kbd> 关闭
          </div>
        </div>
      </div>

      <style>{`
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 4rem 1rem;
        }

        .search-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          z-index: 10;
        }

        .search-box {
          background: white;
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .search-icon {
          width: 20px;
          height: 20px;
          color: #9ca3af;
          margin-right: 0.75rem;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1.125rem;
          color: #111827;
          background: transparent;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-close {
          padding: 0.5rem;
          color: #6b7280;
          background: none;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .search-close:hover {
          color: #374151;
          background: #f3f4f6;
        }

        .search-results {
          max-height: 400px;
          overflow-y: auto;
        }

        .search-empty {
          padding: 3rem 2rem;
          text-align: center;
          color: #6b7280;
        }

        .empty-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          color: #d1d5db;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .empty-description {
          color: #9ca3af;
        }

        .results-list {
          padding: 0.5rem 0;
        }

        .results-header {
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
          background: #f9fafb;
          border-bottom: 1px solid #f3f4f6;
        }

        .result-item {
          display: flex;
          align-items: flex-start;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #f3f4f6;
          color: inherit;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .result-item:hover,
        .result-item.selected {
          background: #f9fafb;
        }

        .result-content {
          flex: 1;
          min-width: 0;
        }

        .result-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .result-description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .result-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .result-date,
        .result-category {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .result-tags {
          display: flex;
          gap: 0.5rem;
        }

        .result-tag {
          padding: 0.125rem 0.5rem;
          background: #ede9fe;
          color: #7c3aed;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .result-cover {
          width: 60px;
          height: 60px;
          margin-left: 1rem;
          border-radius: 6px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .result-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .search-shortcuts {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .search-shortcuts kbd {
          padding: 0.125rem 0.375rem;
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-family: ui-monospace, SFMono-Regular, monospace;
          font-size: 0.625rem;
          font-weight: 600;
          color: #374151;
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .search-box {
            background: #1f2937;
            color: white;
          }

          .search-input-wrapper {
            border-bottom-color: #374151;
          }

          .search-input {
            color: white;
          }

          .search-close:hover {
            background: #374151;
            color: #d1d5db;
          }

          .empty-title {
            color: #f3f4f6;
          }

          .results-header {
            background: #111827;
            border-bottom-color: #374151;
            color: #9ca3af;
          }

          .result-item:hover,
          .result-item.selected {
            background: #111827;
          }

          .result-title {
            color: #f3f4f6;
          }

          .result-cover {
            background: #374151;
          }

          .search-shortcuts {
            background: #111827;
            border-top-color: #374151;
          }

          .search-shortcuts kbd {
            background: #374151;
            border-color: #4b5563;
            color: #d1d5db;
          }
        }
      `}</style>
    </div>
  );
};

export default Search; 