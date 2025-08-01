export interface ThemeColors {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderLight: string;
  componentBg: string;
}

export interface Theme {
  name: string;
  id: string;
  description: string;
  colors: ThemeColors;
  effects?: {
    glowIntensity: number;
    pulseSpeed: number;
    matrixOpacity: number;
    gridOpacity: number;
    dataStreamOpacity: number;
  };
}

// Cyberpunk 2077 主题 - 默认主题
export const cyberpunk2077Theme: Theme = {
  name: "Cyberpunk 2077",
  id: "cyberpunk2077",
  description: "基于赛博朋克2077的官方配色方案，包含霓虹黄、霓虹青、霓虹红/粉、霓虹绿",
  colors: {
    background: "#000000",
    primary: "#fcee09", // 标志性霓虹黄
    secondary: "#00f5ff", // 霓虹青
    accent: "#ff003c", // 霓虹红/粉
    success: "#39ff14", // 霓虹绿
    textPrimary: "#ffffff",
    textSecondary: "#cccccc",
    textMuted: "#888888",
    border: "#fcee0940",
    borderLight: "#ffffff15",
    componentBg: "#0a0a0a",
  },
  effects: {
    glowIntensity: 1.0,
    pulseSpeed: 2.0,
    matrixOpacity: 0.6,
    gridOpacity: 0.4,
    dataStreamOpacity: 0.5,
  },
};

// 未来可扩展的其他主题示例
export const matrixTheme: Theme = {
  name: "Matrix Green",
  id: "matrix",
  description: "黑客帝国风格的绿色主题",
  colors: {
    background: "#000000",
    primary: "#39ff14", // Matrix绿
    secondary: "#00ff00", // 亮绿
    accent: "#008000", // 暗绿
    success: "#32cd32", // 石灰绿
    textPrimary: "#39ff14",
    textSecondary: "#00ff00",
    textMuted: "#008000",
    border: "#39ff1440",
    borderLight: "#39ff1415",
    componentBg: "#001100",
  },
  effects: {
    glowIntensity: 1.2,
    pulseSpeed: 1.5,
    matrixOpacity: 0.8,
    gridOpacity: 0.6,
    dataStreamOpacity: 0.7,
  },
};

export const synthwaveTheme: Theme = {
  name: "Synthwave",
  id: "synthwave",
  description: "80年代合成器波风格的粉紫配色",
  colors: {
    background: "#0a0a0a",
    primary: "#ff00ff", // 霓虹粉
    secondary: "#00ffff", // 霓虹青
    accent: "#ffff00", // 霓虹黄
    success: "#ff69b4", // 热粉
    textPrimary: "#ffffff",
    textSecondary: "#e0e0e0",
    textMuted: "#a0a0a0",
    border: "#ff00ff40",
    borderLight: "#ff00ff15",
    componentBg: "#1a001a",
  },
  effects: {
    glowIntensity: 1.3,
    pulseSpeed: 2.5,
    matrixOpacity: 0.4,
    gridOpacity: 0.3,
    dataStreamOpacity: 0.6,
  },
};

export const lightTheme: Theme = {
  name: "Light Mode",
  id: "light",
  description: "亮色主题，适合日间使用",
  colors: {
    background: "#ffffff",
    primary: "#2563eb", // 蓝色
    secondary: "#7c3aed", // 紫色
    accent: "#dc2626", // 红色
    success: "#16a34a", // 绿色
    textPrimary: "#1f2937",
    textSecondary: "#4b5563",
    textMuted: "#9ca3af",
    border: "#2563eb40",
    borderLight: "#e5e7eb",
    componentBg: "#f9fafb",
  },
  effects: {
    glowIntensity: 0.6,
    pulseSpeed: 2.0,
    matrixOpacity: 0.2,
    gridOpacity: 0.1,
    dataStreamOpacity: 0.3,
  },
};

// 主题管理器
let currentTheme: Theme = cyberpunk2077Theme;
let subscribers: Array<(theme: Theme) => void> = [];

export function getCurrentTheme(): Theme {
  return currentTheme;
}

export function setTheme(theme: Theme): void {
  currentTheme = theme;
  applyTheme(theme);
  notifySubscribers(theme);
  // 保存到本地存储
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("selected-theme", theme.id);
  }
}

export function getThemeById(id: string): Theme | undefined {
  const themes = [cyberpunk2077Theme, matrixTheme, synthwaveTheme, lightTheme];
  return themes.find((theme) => theme.id === id);
}

export function getAllThemes(): Theme[] {
  return [cyberpunk2077Theme, matrixTheme, synthwaveTheme, lightTheme];
}

export function initializeTheme(): void {
  // 从本地存储加载主题
  if (typeof localStorage !== "undefined") {
    const savedThemeId = localStorage.getItem("selected-theme");
    if (savedThemeId) {
      const savedTheme = getThemeById(savedThemeId);
      if (savedTheme) {
        currentTheme = savedTheme;
      }
    }
  }
  applyTheme(currentTheme);
}

export function subscribe(callback: (theme: Theme) => void): () => void {
  subscribers.push(callback);
  // 返回取消订阅函数
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
}

function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  // 应用颜色变量
  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty("--primary", theme.colors.primary);
  root.style.setProperty("--secondary", theme.colors.secondary);
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--success", theme.colors.success);
  root.style.setProperty("--text-primary", theme.colors.textPrimary);
  root.style.setProperty("--text-secondary", theme.colors.textSecondary);
  root.style.setProperty("--text-muted", theme.colors.textMuted);
  root.style.setProperty("--border", theme.colors.border);
  root.style.setProperty("--border-light", theme.colors.borderLight);
  root.style.setProperty("--component-bg", theme.colors.componentBg);

  // 兼容性变量
  root.style.setProperty("--sec", theme.colors.primary);
  root.style.setProperty("--white", theme.colors.textPrimary);
  root.style.setProperty("--white-icon", theme.colors.textSecondary + "98");
  root.style.setProperty("--white-icon-tr", theme.colors.borderLight);

  // 应用效果变量
  if (theme.effects) {
    root.style.setProperty("--glow-intensity", theme.effects.glowIntensity.toString());
    root.style.setProperty("--pulse-speed", `${theme.effects.pulseSpeed}s`);
    root.style.setProperty("--matrix-opacity", theme.effects.matrixOpacity.toString());
    root.style.setProperty("--grid-opacity", theme.effects.gridOpacity.toString());
    root.style.setProperty("--data-stream-opacity", theme.effects.dataStreamOpacity.toString());
  }

  // 添加主题类名到body和data-theme属性到root
  document.body.className = document.body.className.replace(/theme-\w+/, "");
  document.body.classList.add(`theme-${theme.id}`);
  root.setAttribute("data-theme", theme.id);
}

function notifySubscribers(theme: Theme): void {
  subscribers.forEach((callback) => callback(theme));
}

// 主题切换器组件的数据
export const themeOptions = [
  {
    id: cyberpunk2077Theme.id,
    name: cyberpunk2077Theme.name,
    description: cyberpunk2077Theme.description,
    preview: {
      primary: cyberpunk2077Theme.colors.primary,
      secondary: cyberpunk2077Theme.colors.secondary,
      accent: cyberpunk2077Theme.colors.accent,
    },
  },
  {
    id: matrixTheme.id,
    name: matrixTheme.name,
    description: matrixTheme.description,
    preview: {
      primary: matrixTheme.colors.primary,
      secondary: matrixTheme.colors.secondary,
      accent: matrixTheme.colors.accent,
    },
  },
  {
    id: synthwaveTheme.id,
    name: synthwaveTheme.name,
    description: synthwaveTheme.description,
    preview: {
      primary: synthwaveTheme.colors.primary,
      secondary: synthwaveTheme.colors.secondary,
      accent: synthwaveTheme.colors.accent,
    },
  },
  {
    id: lightTheme.id,
    name: lightTheme.name,
    description: lightTheme.description,
    preview: {
      primary: lightTheme.colors.primary,
      secondary: lightTheme.colors.secondary,
      accent: lightTheme.colors.accent,
    },
  },
];
