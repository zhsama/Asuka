import { useState, useEffect } from "react";
import { ThemeManager, themeOptions, type Theme } from "@/config/themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/React/ui/DropdownMenu";
import { ChevronDownIcon, CheckIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(ThemeManager.getCurrentTheme());

  useEffect(() => {
    // 初始化主题
    ThemeManager.initializeTheme();

    // 订阅主题变化
    const unsubscribe = ThemeManager.subscribe((theme) => {
      setCurrentTheme(theme);
    });

    return unsubscribe;
  }, []);

  const handleThemeChange = (themeId: string) => {
    const theme = ThemeManager.getThemeById(themeId);
    if (theme) {
      ThemeManager.setTheme(theme);
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="cyberpunk-button px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-[var(--primary)]/10 transition-all duration-300"
          aria-label="切换主题"
        >
          {/* 当前主题预览色块 */}
          <div className="flex gap-1">
            <div
              className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
              style={{ backgroundColor: currentTheme.colors.primary }}
            />
            <div
              className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
              style={{ backgroundColor: currentTheme.colors.secondary }}
            />
            <div
              className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
              style={{ backgroundColor: currentTheme.colors.accent }}
            />
          </div>
          {/* <span className="hidden md:inline text-[var(--text-primary)]">{currentTheme.name}</span> */}
          <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 text-[var(--text-secondary)]" />
        </button>
      </DropdownMenuTrigger>


      <DropdownMenuContent
        className="w-80 cyberpunk-card border-[var(--border)] bg-[var(--component-bg)] backdrop-blur-xl"
        align="start"
      >
        <DropdownMenuSeparator className="bg-[var(--border)]" />

        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => handleThemeChange(option.id)}
            className={`p-4 cursor-pointer transition-all duration-300 focus:bg-[var(--primary)]/10 hover:bg-[var(--secondary)]/5 ${
              currentTheme.id === option.id
                ? 'bg-[var(--primary)]/10 border-l-2 border-l-[var(--primary)]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-[var(--text-primary)]">{option.name}</span>
                  {currentTheme.id === option.id && (
                    <CheckIcon className="w-4 h-4 text-[var(--primary)]" />
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-2">{option.description}</p>

                {/* 当前主题指示器 */}
                {currentTheme.id === option.id && (
                  <div className="flex items-center gap-2 text-xs text-[var(--primary)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                    当前主题
                  </div>
                )}
              </div>

              {/* 主题预览色块 */}
              <div className="flex gap-1 ml-4">
                <div
                  className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                  style={{ backgroundColor: option.preview.primary }}
                />
                <div
                  className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                  style={{ backgroundColor: option.preview.secondary }}
                />
                <div
                  className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                  style={{ backgroundColor: option.preview.accent }}
                />
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher; 