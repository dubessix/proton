/**
 * Theme utility functions for consistent light/dark mode class generation
 */

export const themeClasses = {
  // Backgrounds
  background: {
    light: "bg-[#EEF2EF]",
    dark: "bg-[#030303]",
  },

  // Panels/Cards
  panel: {
    light: "bg-white/55 backdrop-blur-xl border border-white/80 shadow-sm",
    dark: "bg-[#0f0f13] backdrop-blur-xl border border-white/10 shadow-lg",
  },

  // Text - Primary
  textPrimary: {
    light: "text-[#1A1F1A]",
    dark: "text-white",
  },

  // Text - Secondary
  textSecondary: {
    light: "text-[#5A6B5A]",
    dark: "text-white/50",
  },

  // Text - Muted
  textMuted: {
    light: "text-[#8FA08F]",
    dark: "text-white/30",
  },

  // Borders
  border: {
    light: "border-black/10",
    dark: "border-white/10",
  },

  // Input backgrounds
  input: {
    light: "bg-white/60",
    dark: "bg-[#050505]",
  },

  // Accent
  accent: "#2ECC8F",
  accentLight: "#1A7A50",
  accentBg: {
    light: "bg-[#2ECC8F]/10",
    dark: "bg-emerald-500/10",
  },
};

export function getThemeClass(
  isDark: boolean,
  lightClass: string,
  darkClass: string,
): string {
  return isDark ? darkClass : lightClass;
}
