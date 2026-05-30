/**
 * IRIS OS Theme Color Configuration
 * Premium Light/Dark theme system
 */

export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  // Primary surfaces
  background: string;
  surface: string;
  surfaceVariant: string;

  // Accents & interactive
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;

  // Text colors
  text: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;

  // UI elements
  border: string;
  borderLight: string;
  divider: string;

  // Backgrounds for specific areas
  cardBg: string;
  inputBg: string;
  terminalBg: string;
  iconBg: string;

  // States
  error: string;
  success: string;
  warning: string;
  info: string;

  // Shadows (as CSS values)
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  shadowXl: string;

  // Glassmorphism
  glassBackground: string;
  glassBorder: string;
}

// Light Mode: "Emerald on Frosted Glass"
export const lightTheme: ThemeColors = {
  // Primary surfaces
  background: "#F5F7FA",
  surface: "#FFFFFF",
  surfaceVariant: "#F0F3F8",

  // Accents & interactive
  primary: "#00C896",
  primaryLight: "#34D399",
  primaryDark: "#009872",
  secondary: "#00A78E",

  // Text colors
  text: "#1A1C1E",
  textSecondary: "#64748B",
  textTertiary: "#94A3B8",
  textInverse: "#FFFFFF",

  // UI elements
  border: "#E2E8F0",
  borderLight: "#F1F5F9",
  divider: "#E8EEF5",

  // Backgrounds for specific areas
  cardBg: "#FFFFFF",
  inputBg: "#F8FAFC",
  terminalBg: "#E2E8F0",
  iconBg: "#E0F9F0",

  // States
  error: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
  info: "#0EA5E9",

  // Shadows (soft, minimal)
  shadowSm: "0 1px 2px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)",
  shadowMd: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)",
  shadowLg: "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.04)",
  shadowXl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)",

  // Glassmorphism
  glassBackground: "rgba(255, 255, 255, 0.7)",
  glassBorder: "rgba(200, 200, 200, 0.1)",
};

// Dark Mode: Preserve cyberpunk aesthetic
export const darkTheme: ThemeColors = {
  // Primary surfaces
  background: "#030303",
  surface: "#0f0f13",
  surfaceVariant: "#1a1a1f",

  // Accents & interactive
  primary: "#00C896",
  primaryLight: "#34D399",
  primaryDark: "#009872",
  secondary: "#06B6D4",

  // Text colors
  text: "#E4E6EB",
  textSecondary: "#B0B5BE",
  textTertiary: "#7A8089",
  textInverse: "#030303",

  // UI elements
  border: "rgba(255, 255, 255, 0.1)",
  borderLight: "rgba(255, 255, 255, 0.05)",
  divider: "rgba(255, 255, 255, 0.08)",

  // Backgrounds for specific areas
  cardBg: "#0f0f13",
  inputBg: "#050505",
  terminalBg: "#0a0a0c",
  iconBg: "#0d3f34",

  // States
  error: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
  info: "#0EA5E9",

  // Shadows (neon/glow)
  shadowSm: "0 0 10px rgba(0, 200, 150, 0.1)",
  shadowMd: "0 0 20px rgba(0, 200, 150, 0.15)",
  shadowLg: "0 0 30px rgba(0, 200, 150, 0.2)",
  shadowXl: "0 0 40px rgba(0, 200, 150, 0.25)",

  // Glassmorphism
  glassBackground: "rgba(15, 15, 19, 0.4)",
  glassBorder: "rgba(255, 255, 255, 0.05)",
};

export const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};
