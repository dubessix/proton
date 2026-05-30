import { useThemeStore } from '../store/theme-store'
import { themeMap, type ThemeMode } from '../config/theme-colors'

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useThemeStore()
  const colors = themeMap[theme]

  return {
    theme,
    colors,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }
}
