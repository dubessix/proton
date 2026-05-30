import React, { useEffect, ReactNode } from 'react'
import { useThemeStore } from '../store/theme-store'
import { themeMap } from '../config/theme-colors'

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * ThemeProvider wraps the app and manages theme initialization and CSS variables
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, initTheme } = useThemeStore()

  // Initialize theme from storage on mount
  useEffect(() => {
    initTheme()
  }, [initTheme])

  // Update CSS variables when theme changes
  useEffect(() => {
    const colors = themeMap[theme]
    const root = document.documentElement

    // Set CSS variables for theme colors
    Object.entries(colors).forEach(([key, value]) => {
      const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      root.style.setProperty(cssVarName, value)
    })
  }, [theme])

  return <>{children}</>
}
