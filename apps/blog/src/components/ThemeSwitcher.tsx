"use client"

import React, { useEffect, useState } from "react"
import { Palette } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type EvaTheme = 'eva-02' | 'eva-01' | 'eva-00'

interface ThemeOption {
  value: EvaTheme
  label: string
  colorClass: string
}

const themeOptions: ThemeOption[] = [
  {
    value: 'eva-02',
    label: 'EVA-02 (明日香)',
    colorClass: 'bg-[oklch(62%_0.42_12)]'
  },
  {
    value: 'eva-01',
    label: 'EVA-01 (初号机)',
    colorClass: 'bg-[oklch(57%_0.18_260)]'
  },
  {
    value: 'eva-00',
    label: 'EVA-00 (零号机)',
    colorClass: 'bg-[oklch(52%_0.15_210)]'
  }
]

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<EvaTheme>('eva-02')

  useEffect(() => {
    // 初始化主题
    const savedTheme = (localStorage.getItem('eva-theme') as EvaTheme) || 'eva-02'
    setCurrentTheme(savedTheme)
    setEvaTheme(savedTheme)
  }, [])

  const setEvaTheme = (theme: EvaTheme) => {
    // 移除所有EVA主题类
    document.documentElement.classList.remove('eva-01', 'eva-02', 'eva-00')
    
    // 应用新主题
    if (theme && theme !== 'eva-02') { // eva-02是默认主题
      document.documentElement.classList.add(theme)
    }
    
    localStorage.setItem('eva-theme', theme)
    setCurrentTheme(theme)
  }

  const handleThemeChange = (theme: EvaTheme) => {
    setEvaTheme(theme)
  }

  const getCurrentThemeLabel = () => {
    return themeOptions.find(option => option.value === currentTheme)?.label || 'EVA-02 (明日香)'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          type="button" 
          className="flex w-11 justify-center rounded-lg py-2 text-[var(--text-color)] transition-all hover:bg-[var(--primary-color-hover)] hover:text-[var(--primary-color)]"
          aria-label="切换EVA主题"
        >
          <Palette size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>选择EVA机体</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleThemeChange(option.value)}
            className={currentTheme === option.value ? 'bg-[var(--primary-color-lighten)] text-[var(--primary-color)]' : ''}
          >
            <div className={`${option.colorClass} w-4 h-4 rounded-full border border-white/30 shadow-sm`} />
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 