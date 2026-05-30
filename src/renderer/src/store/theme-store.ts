import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { ThemeMode } from "../config/theme-colors";

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  initTheme: () => void;
}

const THEME_STORAGE_KEY = "iris_theme_preference";

// Initialize theme from storage
const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  // Default to light mode
  return "light";
};

export const useThemeStore = create<ThemeState>()(
  immer((set, get) => ({
    theme: "light",

    setTheme: (theme: ThemeMode) => {
      set((state) => {
        state.theme = theme;
      });

      // Persist to localStorage
      localStorage.setItem(THEME_STORAGE_KEY, theme);

      // Apply theme to document
      applyThemeToDocument(theme);

      // Persist to electron-store if available
      if (window.electron?.ipcRenderer) {
        window.electron.ipcRenderer
          .invoke("store-set", {
            key: THEME_STORAGE_KEY,
            value: theme,
          })
          .catch(() => {
            // Silently fail if electron store unavailable
          });
      }
    },

    toggleTheme: () => {
      const current = get().theme;
      const next = current === "light" ? "dark" : "light";
      get().setTheme(next);
    },

    initTheme: () => {
      const theme = getInitialTheme();
      set((state) => {
        state.theme = theme;
      });
      applyThemeToDocument(theme);
    },
  })),
);

/**
 * Apply theme to document root
 */
function applyThemeToDocument(theme: ThemeMode) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}
